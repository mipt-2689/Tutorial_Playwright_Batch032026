import { test, expect } from '@playwright/test';

test('Login & logout flow', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.locator('#login-button').click();

  // Verify login
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  // Logout
  await page.locator('#react-burger-menu-btn').click();
  const logoutBtn = page.locator('#logout_sidebar_link');
  await logoutBtn.waitFor({ state: 'visible' });
  await logoutBtn.click();

  // Verify logout  
  await expect(page).toHaveURL('https://www.saucedemo.com/');
  await expect(page.locator('#login-button')).toBeVisible();
});