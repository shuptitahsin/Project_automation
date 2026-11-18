
class CartPage {
    constructor(page) {
        this.page = page;

        // Shopping cart locator
       this.shoppingCartLink = page.locator('a.ico-cart').first();

        // Cart product locators
        this.productName = page.locator('.cart')
            .getByRole('link', {
                name: 'Computing and Internet',
                exact: true
            });

        this.quantityInput = page.locator('.cart .qty-input');
    }

    async clickShoppingCart() {
        await this.shoppingCartLink.click();
    }

    async verifyProduct() {
        await this.productName.waitFor({
            state: 'visible'
        });
    }
}

export { CartPage };
