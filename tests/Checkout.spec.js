
import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';
import { SearchPage } from '../pages/SearchPage.js';
import { ProductPage } from '../pages/ProductPage.js';

test('Q3 - End to End Checkout', async ({ page }) => {

    test.setTimeout(60000);

    // Step 1: Open Website
    const loginPage = new LoginPage(page);
    await loginPage.openWebsite();

    // Step 2: Open Login Page
    await loginPage.clickLoginLink();

    // Step 3: Enter Login Information
    await loginPage.enterEmail('2251091003@uttara.ac.bd');
    await loginPage.enterPassword('Bsct@1003');

    // Step 4: Click Login
    await loginPage.clickLoginButton();

    console.log('Login Successful');

    // Step 5: Search Product
    const searchPage = new SearchPage(page);
    await searchPage.searchProduct('Computing and Internet');

    // Step 6: Verify Search Result
    await expect(searchPage.productLink).toBeVisible();

    console.log('Search Result Found');

    // Step 7: Open Product
    await searchPage.openProduct();

    // Step 8: Verify Product Details
    const productPage = new ProductPage(page);

    await expect(productPage.productTitle)
        .toContainText('Computing and Internet');

    console.log('Product Details Verified');

    // Step 9: Increase Product Quantity
    await productPage.enterQuantity(2);

    // Step 10: Add Product to Cart
    await productPage.clickAddToCart();

    // Step 11: Open Shopping Cart
    await page.locator('a.ico-cart').first().click();

    // Step 12: Verify Product in Cart
    await expect(
        page.locator('.cart .product a')
    ).toContainText('Computing and Internet');

    console.log('Product Added to Cart Successfully');

    // Step 13: Select Country
    await page.locator('#CountryId').selectOption({
        label: 'Bangladesh'
    });

    // Step 14: Select State
    await page.locator('#StateProvinceId').selectOption({
        label: 'Other (Non US)'
    });

    // Step 15: Enter Zip Code
    await page.locator('#ZipPostalCode').fill('1000');

    // Step 16: Estimate Shipping
    await page.locator('input[name="estimateshipping"]').click();

    // Step 17: Agree to Terms and Conditions
    await page.locator('#termsofservice').check();

    // Step 18: Click Checkout
    await page.locator('#checkout').click();

    // Step 19: Verify Checkout Page
    await expect(page).toHaveURL(/checkout/i);

// billing

    // Step 20: Enter Billing Address

    
    // Step 20: Check Billing Address Form

    const billingFirstName = page.locator(
        '#BillingNewAddress_FirstName'
    );

    if (await billingFirstName.isVisible()) {

        await billingFirstName.fill('Shupti');

        await page.locator('#BillingNewAddress_LastName')
            .fill('Shama');

        await page.locator('#BillingNewAddress_Email')
            .fill('22510910032uttara.ac.bd');

        await page.locator('#BillingNewAddress_Company')
            .fill('Dhaka');

        await page.locator('#BillingNewAddress_CountryId')
            .selectOption({ label: 'Bangladesh' });

        await page.locator('#BillingNewAddress_StateProvinceId')
            .selectOption({ label: 'Other (Non US)' });

        await page.locator('#BillingNewAddress_City')
            .fill('Dhaka');

        await page.locator('#BillingNewAddress_Address1')
            .fill('Dhamrai');

        await page.locator('#BillingNewAddress_Address2')
            .fill('Dhamrai2');

        await page.locator('#BillingNewAddress_ZipPostalCode')
            .fill('1000');

        await page.locator('#BillingNewAddress_PhoneNumber')
            .fill('0174598976');

        await page.locator('#BillingNewAddress_FaxNumber')
            .fill('995557753');

        console.log('New Billing Address Entered');

    } else {

        console.log('Existing Billing Address Selected');

    }


   // Step 21: Click Billing Continue
await page.locator(
    '#billing-buttons-container input[onclick="Billing.save()"]'
).click();

console.log('Billing Continue Clicked');

// Wait until Shipping Address Continue button becomes visible
await page.locator(
    '#shipping-buttons-container input[onclick="Shipping.save()"]'
).waitFor({
    state: 'visible',
    timeout: 20000
});

console.log('Shipping Address Step Loaded');

   // Step 22: Continue Shipping Address
await page.locator(
    '#shipping-buttons-container input[onclick="Shipping.save()"]'
).click();

console.log('Shipping Address Continue Clicked');

// Wait for Shipping Method step
await page.locator(
    '.shipping-method-next-step-button'
).waitFor({
    state: 'visible',
    timeout: 20000
});

console.log('Shipping Method Step Loaded');
// Step 23: Select Shipping Method
const shippingOptions = page.locator('input[name="shippingoption"]');

await shippingOptions.first().check();

console.log('Shipping Method Selected');

// Step 24: Continue Shipping Method
await page.locator('.shipping-method-next-step-button').click();

console.log('Shipping Method Continue Clicked');

// Wait for Payment Method
await page.locator('.payment-method-next-step-button').waitFor({
    state: 'visible',
    timeout: 20000
});

console.log('Payment Method Step Loaded');

// Step 25: Select Payment Method
const paymentOptions = page.locator('input[name="paymentmethod"]');

await paymentOptions.first().check();

console.log('Payment Method Selected');

// Step 26: Continue Payment Method
await page.locator('.payment-method-next-step-button').click();

console.log('Payment Method Continue Clicked');

// Wait for Payment Information
await page.locator('.payment-info-next-step-button').waitFor({
    state: 'visible',
    timeout: 20000
});

console.log('Payment Information Step Loaded');
// Step 27: Wait for Payment Information
await page.locator('.payment-info').waitFor({
    state: 'visible',
    timeout: 20000
});

console.log('Payment Information Displayed');

// Step 28: Continue Payment Information
await page.locator('.payment-info-next-step-button').click();

console.log('Payment Information Continue Clicked');

// Wait for Confirm Order
await page.locator('.confirm-order-next-step-button').waitFor({
    state: 'visible',
    timeout: 20000
});

console.log('Confirm Order Step Loaded');

// Step 29: Confirm Order
await page.locator('.confirm-order-next-step-button').click();

console.log('Confirm Order Clicked');

// Step 30: Verify Order Confirmation
await expect(
    page.locator('.section.order-completed')
).toBeVisible({ timeout: 20000 });

await expect(
    page.locator('.order-completed .title')
).toContainText('Your order has been successfully processed');

console.log('Order Placed Successfully');
});
