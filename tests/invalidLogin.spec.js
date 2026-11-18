import {test, expect} from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';
import { ProductPage } from '../pages/ProductPage.js';

test ('Q1 - Login With Invalid Credential',async ({page}) =>{
    const loginPage = new LoginPage(page);

    await loginPage.openWebsite();
    await loginPage.clickLoginLink();
    await loginPage.enterEmail('invaliduser123@example.com');
    await loginPage.enterPassword('WrongPassword123!');

    await loginPage.clickLoginButton();
    //error Message
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Login was unsuccessful. Please correct the errors and try again.');
    await expect(loginPage.errorMessage).toContainText('No customer account found');
    
    await expect(page.locator('.ico-login')).toBeVisible();
    await expect(page.locator('.ico-logout')).toHaveCount(0);
})
