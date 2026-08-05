import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Help Center', path: '/help' },
  { name: 'Accessibility', path: '/accessibility' },
  { name: 'Alerts', path: '/alerts' },
  { name: 'Appointments', path: '/appointments' },
  { name: 'Messages', path: '/messages' },
  { name: 'Profile', path: '/profile' },
];

for (const { name, path } of pages) {
  test(`axe: ${name} page has no critical accessibility violations`, async ({ page }) => {
    await page.goto(path);
    await page.waitForLoadState('networkidle');

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    const criticalAndSerious = results.violations.filter(
      (v) => v.impact === 'critical' || v.impact === 'serious'
    );

    if (criticalAndSerious.length > 0) {
      console.log(`\n=== axe violations on ${name} (${path}) ===`);
      for (const v of criticalAndSerious) {
        console.log(`\n[${v.impact?.toUpperCase()}] ${v.id}: ${v.description}`);
        console.log(`  Help: ${v.helpUrl}`);
        for (const node of v.nodes) {
          console.log(`  Element: ${node.html}`);
          if (node.failureSummary) console.log(`  Failure: ${node.failureSummary}`);
        }
      }
    }

    // Log all violations (including moderate/minor) for the report
    if (results.violations.length > 0) {
      console.log(`\n--- All violations on ${name} ---`);
      for (const v of results.violations) {
        console.log(`[${v.impact}] ${v.id}: ${v.description} (${v.nodes.length} element(s))`);
      }
    } else {
      console.log(`\n✓ No axe violations found on ${name}`);
    }

    expect(
      criticalAndSerious,
      `Critical/serious axe violations on ${name}: ${JSON.stringify(criticalAndSerious.map((v) => ({ id: v.id, impact: v.impact, nodes: v.nodes.length })), null, 2)}`
    ).toHaveLength(0);
  });
}
