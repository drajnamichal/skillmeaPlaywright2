import { test, expect } from '@scalewright/test';

test('Assertions', async ({ page }) => {
  await page.goto('http://www.saucedemo.com');
  expect(page.locator('#user-name')).toContain
  await expect.soft(page.locator('#password')).toBeEditable();
  await expect(page.locator('#login-button')).toHaveCount(1);
  await expect(page.locator('#skillmea')).not.toBeVisible();
});