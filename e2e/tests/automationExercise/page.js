
class AutomationPage{
    /**
     * @param {import('playwright/test').Page} playwrightPage
     */

    constructor(playwrightPage){
        this.page = playwrightPage;

        this.productsButton = this.page.locator('li > a[href="/products"]');
        this.searchInput = this.page.getByTestId('search_product');
        this.submitSearchButton = this.page.getByTestId('submit_search');

        this.productByName = (productName) =>
            this.page.locator('.single-products').filter({
                has: this.page.locator('p', { hasText: new RegExp(`^${productName}$`)})
        });

        this.addProductCartButton = this.page.locator('a.add-to-cart');
        this.cartButton = this.page.locator('.modal-body a')

        this.itemCartProductByName = (productName) => this.page.locator('h4 > a', {hasText: productName });
    }

    async navigate(){
        await this.page.goto('')
    } 

    async clickProductsButton(){
        await this.productsButton.click();
        
    }
    /**
     * @param {string} productName
     */

    async searchProduct(productName){
        await this.searchInput.fill(productName);
        await this.submitSearchButton.click();
    }

    async addItemCart(productName){
        const item = this.productByName(productName);
        await item.locator('.product-overlay a.add-to-cart').click();
    }

    async clickCartButton(){
        await this.cartButton.click();
    }
    /**
     * 
     * @param {string} productName 
     */
    async cartItemAdded(productName){
        return this.itemCartProductByName(productName);
    }
}

module.exports = {AutomationPage}
