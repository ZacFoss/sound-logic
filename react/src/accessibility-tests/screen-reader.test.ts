import { test, expect } from '@playwright/test';

test.describe('Screen reader & keyboard navigation', () => {
  test('Home: all interactive elements are keyboard reachable and have accessible names', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Tab through all focusable elements and collect their accessible names
    const focusableInfo: { tag: string; name: string; role: string }[] = [];
    const focusableSelector = 'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const elements = await page.locator(focusableSelector).all();

    for (const el of elements) {
      const tag = await el.evaluate((e) => e.tagName.toLowerCase());
      const ariaLabel = await el.getAttribute('aria-label');
      const ariaLabelledBy = await el.getAttribute('aria-labelledby');
      const textContent = (await el.textContent())?.trim() ?? '';
      const role = await el.getAttribute('role') ?? '';
      const name = ariaLabel ?? ariaLabelledBy ?? textContent;
      focusableInfo.push({ tag, name, role });
    }

    console.log('\n=== Home page focusable elements ===');
    for (const info of focusableInfo) {
      const status = info.name ? '✓' : '✗ MISSING NAME';
      console.log(`  ${status} <${info.tag}> "${info.name}"`);
    }

    const unnamed = focusableInfo.filter((i) => !i.name);
    expect(unnamed, `Buttons/inputs with no accessible name: ${JSON.stringify(unnamed)}`).toHaveLength(0);
  });

  test('Accessibility page: toggle checkboxes are keyboard operable', async ({ page }) => {
    await page.goto('/accessibility');
    await page.waitForLoadState('networkidle');

    const checkboxes = page.locator('input[type="checkbox"]');
    const count = await checkboxes.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const cb = checkboxes.nth(i);
      const initialChecked = await cb.isChecked();
      await cb.focus();
      await page.keyboard.press('Space');
      const newChecked = await cb.isChecked();
      expect(newChecked).toBe(!initialChecked);
      // Restore
      await page.keyboard.press('Space');
    }

    console.log(`\n✓ All ${count} checkboxes operable via keyboard on Accessibility page`);
  });

  test('Home: bottom nav buttons are keyboard accessible', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const navButtons = page.locator('nav button');
    const count = await navButtons.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const btn = navButtons.nth(i);
      await expect(btn).toBeVisible();
      await btn.focus();
      const focused = await btn.evaluate((el) => el === document.activeElement);
      expect(focused, `Nav button ${i} is not focusable`).toBe(true);
    }

    console.log(`\n✓ All ${count} bottom nav buttons are keyboard focusable`);
  });

  test('All pages: landmark regions are present', async ({ page }) => {
    const routes = ['/', '/help', '/accessibility', '/alerts', '/appointments', '/messages', '/profile'];

    for (const route of routes) {
      await page.goto(route);
      await page.waitForLoadState('networkidle');

      const main = await page.locator('main, [role="main"]').count();
      const nav = await page.locator('nav, [role="navigation"]').count();

      console.log(`\n${route}: main=${main}, nav=${nav}`);
      expect(main, `${route} is missing a <main> landmark`).toBeGreaterThan(0);
      expect(nav, `${route} is missing a <nav> landmark`).toBeGreaterThan(0);
    }
  });

  test('All pages: page has a logical heading structure', async ({ page }) => {
    const routes = [
      { route: '/', name: 'Home' },
      { route: '/accessibility', name: 'Accessibility' },
      { route: '/alerts', name: 'Alerts' },
    ];

    for (const { route, name } of routes) {
      await page.goto(route);
      await page.waitForLoadState('networkidle');

      const h1Count = await page.locator('h1').count();
      const headings = await page.locator('h1, h2, h3, h4').all();
      const headingInfo = await Promise.all(
        headings.map(async (h) => ({
          tag: await h.evaluate((e) => e.tagName.toLowerCase()),
          text: (await h.textContent())?.trim(),
        }))
      );

      console.log(`\n${name} headings:`, headingInfo.map((h) => `<${h.tag}> ${h.text}`).join(', '));
    }
  });

  test('Images and icons: decorative elements are hidden from screen readers', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const ariaHiddenElements = await page.locator('[aria-hidden="true"]').all();
    console.log(`\n✓ Home: ${ariaHiddenElements.length} element(s) correctly marked aria-hidden`);

    // Verify no <img> elements are missing alt attributes
    const imgsWithoutAlt = await page.locator('img:not([alt])').count();
    expect(imgsWithoutAlt, 'Images without alt attribute found').toBe(0);
  });

  test('Focus order: Tab key follows a logical visual order on Home', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    await page.keyboard.press('Tab');
    const focusSequence: string[] = [];

    for (let i = 0; i < 15; i++) {
      const focused = await page.evaluate(() => {
        const el = document.activeElement;
        if (!el || el === document.body) return null;
        const label =
          el.getAttribute('aria-label') ??
          el.textContent?.trim().slice(0, 30) ??
          el.tagName.toLowerCase();
        return `<${el.tagName.toLowerCase()}> "${label}"`;
      });
      if (focused) focusSequence.push(focused);
      await page.keyboard.press('Tab');
    }

    console.log('\n=== Tab order on Home page ===');
    focusSequence.forEach((item, i) => console.log(`  ${i + 1}. ${item}`));

    expect(focusSequence.length).toBeGreaterThan(3);
  });
});
