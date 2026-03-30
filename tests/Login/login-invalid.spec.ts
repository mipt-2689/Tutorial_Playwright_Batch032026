import { test, expect } from '@playwright/test';

test('Login failed - wrong password', async ({ page }) => {
  //1. Access the login page
  await page.goto('https://www.saucedemo.com/');

  //2. Input credentials
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'sai');
  //3. Click on the Login button
  await page.locator('#login-button').click();

  // 4. Verify
  const errorMsg = page.locator('[data-test="error"]');
  await expect(errorMsg).toBeVisible;
  await expect(errorMsg).toHaveText('Epic sadface: Username and password do not match any user in this service');
});

test('Login failed - empty username', async ({ page }) => {
  //1. Access the login page
  await page.goto('https://www.saucedemo.com/');

  //2. Input credentials
  await page.fill('#user-name', '');
  await page.fill('#password', 'secret_sauce');
  //3. Click on the Login button
  await page.locator('#login-button').click();

  // 4. Verify
  const errorMsg = page.locator('[data-test="error"]');
  await expect(errorMsg).toBeVisible;
  await expect(errorMsg).toHaveText('Epic sadface: Username is required');
});

test('Login failed - locked user', async ({ page }) => {
  //1. Access the login page
  await page.goto('https://www.saucedemo.com/');

  //2. Input credentials
  await page.fill('#user-name', 'locked_out_user');
  await page.fill('#password', 'secret_sauce');
  //3. Click on the Login button
  await page.locator('#login-button').click();

  // 4. Verify
  const errorMsg = page.locator('[data-test="error"]');
  await expect(errorMsg).toBeVisible;
  await expect(errorMsg).toHaveText('Epic sadface: Sorry, this user has been locked out.');
});
