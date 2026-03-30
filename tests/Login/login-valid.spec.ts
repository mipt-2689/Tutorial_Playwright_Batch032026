import { test, expect } from '@playwright/test';

test('user can login with valid credentials', async ({ page }) => {
  //1. Access the login page
  await page.goto('https://www.saucedemo.com/');

  //2. Input credentials
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  //3. Click on the Login button
    await page.locator('#login-button').click();

  // 4. Verify
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await expect(page.locator('.title')).toHaveText('Products');
});
