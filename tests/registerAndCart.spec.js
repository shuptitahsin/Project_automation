
import { test, expect } from '@playwright/test';
import { SignUpPage } from '../pages/SignUpPage.js';
import { ProductPage } from '../pages/ProductPage.js';
import { CartPage } from '../pages/CartPage.js';

test('Q2 - Register new customer and add product to cart', async ({ page }) => {

    const signUp = new SignUpPage(page);

    await signUp.pageOpen();
    await signUp.clickRegisterLink();

    await signUp.clickGenderRadioButton();
    await signUp.enterFirstName('Shupti');
    await signUp.enterLastName('Tahsin');

    const email = `shupti${Date.now()}@example.com`;

    await signUp.enterEmail(email);
    await signUp.enterPassword('Test1234!');
    await signUp.enterConfirmPassword('Test1234!');

    await signUp.clickRegisterButton();

    // Registration verification
    await expect(page.getByText('Your registration completed')).toBeVisible();


    // Registration verification
await expect(page.getByText('Your registration completed')).toBeVisible();

// Login status verification
await expect(page.locator('.ico-logout')).toBeVisible();
await expect(page.locator('.ico-login')).toHaveCount(0);


    // Registration verification
    await expect(page.getByText('Your registration completed')).toBeVisible();

    // Login status verification
    await expect(page.locator('.ico-logout')).toBeVisible();
    await expect(page.locator('.ico-login')).toHaveCount(0);

    // Product selection
    const productPage = new ProductPage(page);

    await productPage.clickBooksCategory();
    await productPage.selectProduct();

    // Product verification
    await expect(productPage.productTitle) .toContainText('Computing and Internet');
    // Set product quantity
await productPage.enterQuantity(1);

// Add product to cart
await productPage.clickAddToCart();

    // Set product quantity
    // await productPage.enterQuantity(1);



    // Verify success notification
    await expect(page.locator('.bar-notification.success')) .toContainText('The product has been added to your shopping cart');

    //See shopping cart for perfect product

   

    // Verify success notification
    await expect(page.locator('.bar-notification.success'))
        .toContainText('The product has been added to your shopping cart');

    // Open Shopping Cart
    const cartPage = new CartPage(page);

    await cartPage.clickShoppingCart();

    // Verify correct product is added
    await expect(cartPage.productName).toBeVisible();

    // Verify product quantity
    console.log(
    'Cart Quantity:',
    await cartPage.quantityInput.inputValue()
);
    await expect(cartPage.quantityInput).toHaveValue('1');

});
