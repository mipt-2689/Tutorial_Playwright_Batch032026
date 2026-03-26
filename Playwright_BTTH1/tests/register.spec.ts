import { test, expect } from '@playwright/test';

test('Register user successfully', async ({ page }) => {
  // Access the page
  await page.goto('https://material.playwrightvn.com/01-xpath-register-page.html');

  // Input information
  await page.fill('#username', 'Mipt');
  await page.fill('#email', 'thaomi@example.com');
  await page.locator('input[type="radio"][value="female"]').check();
  await page.locator('input[type="checkbox"][value="reading"]').check();
  await page.locator('input[type="checkbox"][value="traveling"]').check();
  await page.selectOption('#interests', 'music');
  await page.selectOption('#country', 'usa');
  await page.fill('#dob', '1995-09-08');

  // Check value is checked
  await expect(page.locator('input[value="female"]')).toBeChecked();
  await expect(page.locator('input[value="reading"]')).toBeChecked();
  await expect(page.locator('input[value="traveling"]')).toBeChecked();

  // Click on the submit button
  await page.getByRole('button', { name: 'Register' }).click();

  // Verify
  const usernameCell = page.locator('#userTable tbody tr td:nth-child(2)');
  await expect(usernameCell).toHaveText('Mipt');
});

