import { test, expect } from '@playwright/test';

test.skip('DEV server', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle('Michal Drajna - Portfolio');
});