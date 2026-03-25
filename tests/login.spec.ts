import { test, expect } from '@playwright/test';

test('user can login with valid credentials', async ({ page }) => {
  //1. Access the login page
  await page.goto('https://demowebshop.tricentis.com/login');

  //2. Input credentials
  await page.fill('#Email', 'testabc1xyz@gmail.com');
  await page.fill('#Password', '123456aA@');
  //3. Click on the Login button
  await page.click('.login-button');

  // 4. Verify
  await expect(page).toHaveURL('https://demowebshop.tricentis.com/');
  await expect(page.locator('.header-links a.account')).toHaveText('testabc1xyz@gmail.com');
});
