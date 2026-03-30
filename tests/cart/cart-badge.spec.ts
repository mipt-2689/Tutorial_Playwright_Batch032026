import { test, expect } from '@playwright/test';

test('Check the cart badge number', async ({ page }) => {
  //Access the login page
  await page.goto('https://www.saucedemo.com/');

  //Login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.locator('#login-button').click();

  //Verify login success
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await expect(page.locator('.title')).toHaveText('Products');

  //Find cart badge & button 
  const cartBadge = page.locator('.shopping_cart_badge');
  const addToCartBtn = page.locator('.btn_inventory');

  //Add 1 product
  await addToCartBtn.first().click();

  //Check cartBadge = 1
  await expect(cartBadge).toHaveText('1');

  //Add the second product
  await addToCartBtn.nth(1).click();

  //Check cartBadge = 2
  await expect(cartBadge).toHaveText('2');
});
