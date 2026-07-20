class AutomationPage{
    /**
     * @param {import('playwright/test').Page} playwrightPage
     * 
     */

    constructor(playwrightPage, buttons){
        this.page = playwrightPage;

        this.productLink = this.page.getByRole('link', {name: 'Products'});
        this.searchInput = this.page.getByTestId('search_product');
        this.submitButton = this.page.getByTestId('submit_search');

        this.itemProductByName = (productName) => 
            this.page.locator('.single-products').filter({has: this.page.locator('p', {hasText: productName})})

        this.cartLink = this.page.getByRole('link', {name: 'View Cart'});

        this.itemInCartByName = (productName) => 
            this.page.locator('.cart_description').filter({has: this.page.locator('h4 > a', {hasText: productName})})
    }

    async navigate(){
        await this.page.goto('');
    }

    async clickProductLink(){
        await this.productLink.click();
    }
    /**
     * @param {string} productName
     */
    async searchProduct(productName){
        await this.searchInput.fill(productName);
        await this.submitButton.click();
    }

    async addProductCart(productName){
        const item = this.itemProductByName(productName);
        await item.locator('.productinfo > a.add-to-cart').click();
    }

    async clickCartLink(){
        await this.cartLink.click()
    }
}

module.exports = { AutomationPage }