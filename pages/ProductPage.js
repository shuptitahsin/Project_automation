
class ProductPage {
    constructor(page) {
        this.page = page;
        this.pageUrl = "https://demowebshop.tricentis.com/";

        // Category and Product locators
        this.booksCategoryLink = page.locator('a[href="/books"]').first();
        this.productLink = page.getByRole('link', {
            name: 'Computing and Internet',
            exact: true
        });

        // Product details locators
        this.productTitle = page.locator('.product-name h1');
        this.quantityInput = page.locator('.qty-input');
        this.addToCartButton = page.locator('input.add-to-cart-button');
    }

    async clickBooksCategory() {
        await this.booksCategoryLink.click();
    }

    async selectProduct() {
        await this.productLink.click();
    }

    async enterQuantity(quantity) {
        await this.quantityInput.fill(String(quantity));
        console.log(
        'Product Page Quantity:',
        await this.quantityInput.inputValue()
    );
    }

async clickAddToCart() {
    await this.addToCartButton.click();


    // await this.addToCartButton.click();

    // await this.page.waitForTimeout(1000);

    // console.log(
    //     'Cart after adding:',
    //     await this.page.locator('a.ico-cart .cart-qty').innerText()
    // );
}
}

export { ProductPage };
