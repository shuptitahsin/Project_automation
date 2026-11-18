export default class LoginPage{
    constructor(page){
        this.page = page;
        this.pageUrl = "https://demowebshop.tricentis.com/";
        this.loginLink = page.locator('a[href="/login"]');
        this.emailInput = page.getByLabel('Email: ');
        this.passwordInput = page.getByLabel('Password: ');
        this.loginButton = page.locator('.login-button');
        this.errorMessage = page.locator('.validation-summary-errors');
    }
async openWebsite(){
    await this.page.goto(this.pageUrl);

}
async clickLoginLink(){
    await this.loginLink.click();
}
async enterEmail(email){
    await this.emailInput.fill(email);
}
async enterPassword(password){
    await this.passwordInput.fill(password);
}
async clickLoginButton(){
    await this.loginButton.click();
}


}

