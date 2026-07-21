class AutomationPage{
    /**
     * @param {import('playwright/test').Page} playwrightPage
     * 
     */

    constructor(playwrightPage){
        this.page = playwrightPage;

        this.productLink = this.page.getByRole('link', {name: 'Products'});
        this.searchInput = this.page.getByTestId('search_product');
        this.submitButton = this.page.getByTestId('submit_search');
        this.cartLink = this.page.getByRole('link', {name: 'View Cart'});
    }

    /**
     * 
     * @param {string} productName
     */
    getItemByName(productName){
        return this.page.locator('.single-products').filter({hasText: productName})
    }
    /**
     * 
     * @param {string} productName
     */
    itemInCartByName(productName){
        return this.page.locator('.cart_description').filter({has: this.page.locator('h4 > a', {hasText: productName})})
    }    
    /**
     * 
     * @param {string} nameProduct
     */
    getItemByName(nameProduct){
        return this.page.locator('.product-info').filter({hasText: nameProduct})
    }

    async click(pnameProductrod){
        await this.getItemByName(nameProduct).locator('.product-info > a.add-to-cart').click();
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
        await this.getItemByName(productName).locator('.productinfo > a.add-to-cart').click();
    }

    async clickCartLink(){
        await this.cartLink.click()
    }
}

module.exports = { AutomationPage }