import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const PAGES = [
  { name: 'Home',           path: '/' },
  { name: 'Help Center',    path: '/help' },
  { name: 'Accessibility',  path: '/accessibility' },
  { name: 'Alerts',         path: '/alerts' },
  { name: 'Appointments',   path: '/appointments' },
  { name: 'Messages',       path: '/messages' },
  { name: 'Profile',        path: '/profile' },
];

const BASE_URL = 'http://localhost:5173';

const IMPACT_ORDER: Record<string, number> = { critical: 0, serious: 1, moderate: 2, minor: 3 };
const IMPACT_LABEL: Record<string, string> = {
  critical: 'CRITICAL',
  serious:  'SERIOUS ',
  moderate: 'MODERATE',
  minor:    'MINOR   ',
};

function col(text: string, width: number) {
  const s = String(text ?? '');
  return s.length > width ? s.slice(0, width - 1) + '…' : s.padEnd(width);
}
function hr(widths: number[]) {
  return widths.map(w => '─'.repeat(w)).join('┼') ;
}
function row(cells: string[], widths: number[], sep = '│') {
  return cells.map((c, i) => col(c, widths[i])).join(sep);
}

async function main() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  type ViolationRow = {
    page: string;
    impact: string;
    ruleId: string;
    description: string;
    elements: number;
    helpUrl: string;
  };

  const allViolations: ViolationRow[] = [];
  const summary: { name: string; path: string; violations: number; passes: number }[] = [];

  console.log('\n⏳  Running axe DevTools — WCAG 2.1 AA across all pages…\n');

  for (const { name, path } of PAGES) {
    await page.goto(`${BASE_URL}${path}`);
    await page.waitForLoadState('networkidle');

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    summary.push({
      name,
      path,
      violations: results.violations.length,
      passes: results.passes.length,
    });

    for (const v of results.violations) {
      allViolations.push({
        page: name,
        impact: v.impact ?? 'unknown',
        ruleId: v.id,
        description: v.description,
        elements: v.nodes.length,
        helpUrl: v.helpUrl,
      });
    }
  }

  await browser.close();

  // ── Page summary table ────────────────────────────────────────────────────
  const W1 = [16, 22, 12, 9, 9];
  const divider = hr(W1);
  console.log('┌' + W1.map(w => '─'.repeat(w)).join('┬') + '┐');
  console.log('│' + row(['Page', 'Path', 'Violations', 'Passes', 'Status'], W1) + '│');
  console.log('├' + divider + '┤');
  for (const s of summary) {
    const status = s.violations === 0 ? '✓ Pass' : `✗ ${s.violations} fail`;
    console.log('│' + row([s.name, s.path, String(s.violations), String(s.passes), status], W1) + '│');
  }
  console.log('└' + W1.map(w => '─'.repeat(w)).join('┴') + '┘');

  // ── Violation detail table ────────────────────────────────────────────────
  if (allViolations.length === 0) {
    console.log('\n✅  No axe violations found across all 7 pages (WCAG 2.1 AA).\n');
    return;
  }

  allViolations.sort((a, b) =>
    (IMPACT_ORDER[a.impact] ?? 9) - (IMPACT_ORDER[b.impact] ?? 9) ||
    a.page.localeCompare(b.page)
  );

  const W2 = [14, 10, 26, 40, 6];
  const divider2 = hr(W2);
  console.log('\n── Violations ──────────────────────────────────────────────────────────────\n');
  console.log('┌' + W2.map(w => '─'.repeat(w)).join('┬') + '┐');
  console.log('│' + row(['Page', 'Impact', 'Rule ID', 'Description', 'Elems'], W2) + '│');
  console.log('├' + divider2 + '┤');
  for (const v of allViolations) {
    console.log('│' + row([
      v.page,
      IMPACT_LABEL[v.impact] ?? v.impact,
      v.ruleId,
      v.description,
      String(v.elements),
    ], W2) + '│');
    console.log('│' + row(['', '', '', v.helpUrl, ''], W2) + '│');
    console.log('├' + divider2 + '┤');
  }
  console.log('└' + W2.map(w => '─'.repeat(w)).join('┴') + '┘');
  console.log(`\n  Total violations: ${allViolations.length}  |  Affected elements: ${allViolations.reduce((n, v) => n + v.elements, 0)}\n`);
}

main().catch(console.error);
