
class SearchPage {
    constructor(page) {
        this.page = page;

        // Search locators
        this.searchInput = page.locator('#small-searchterms');
        this.searchButton = page.locator('.search-box-button');

        // Search result
        this.productLink = page.getByRole('link', {
            name: 'Computing and Internet',
            exact: true
        });
    }

    async searchProduct(productName) {
        await this.searchInput.fill(productName);
        await this.searchButton.click();
    }

    async verifySearchResult() {
        await this.productLink.waitFor({
            state: 'visible'
        });
    }

    async openProduct() {
        await this.productLink.click();
    }
}

export { SearchPage };























// class SearchPage {
//     constructor(page) {
//         this.page = page;

//         // Search locators
//         this.searchInput = page.locator('#small-searchterms');
//         this.searchButton = page.locator('.search-box-button');

//         // Search result
//         this.productLink = page.getByRole('link', {
//             name: 'Computing and Internet',
//             exact: true
//         });
//     }

//     async searchProduct(productName) {
//         await this.searchInput.fill(productName);
//         await this.searchButton.click();
//     }

//     async verifySearchResult() {
//         await this.productLink.waitFor({
//             state: 'visible'
//         });
//     }

//     async openProduct() {
//         await this.productLink.click();
//     }
    


// }

// export { SearchPage };
