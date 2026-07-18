class AutomationPage{

    /**
     * @param {import('playwright/test').Page} playwrightPage
     */

    constructor(playwrightPage){
        this.page = playwrightPage;

        this.productLink = this.page.locator('a[href="/products"]');
        this.fillSearchProduct = this.page.getByTestId('search_product');
        this.clickSubmitSearch = this.page.getByTestId('submit_search');
        this.clickAddCartItem = (productName) => this.page.locator('.productInfo', {hasText: productName});
        this.clickContinueShoppingButton = this.page.getByRole('button', {name: "Continue Shopping"});
        this.productAddedLabel = this.page.getByText('Your product has been added to cart.');
        this.clickCartButton = this.page.getByRole('link', {name: 'Cart'});
        this.itemAddedinCart = this.page.locator('h4 > a[href="/product_details/28"]');
    }

    async navigate(){
        await this.page.goto('');
    }

    async clickProductLink(){
        await this.productLink.click();
    }

    /**
     * @param {string} value
     */
    async searchProduct(value){
        await this.fillSearchProduct.fill(value);
        await this.clickSubmitSearch.click();
    }

    async addProductCart(productName){
        const card = this.clickAddCartItem(productName)
        await card.locator('a.add-to-cart').click();
    }

    async clickContinueShopping(){ 
        await this.clickContinueShoppingButton.click();
    }

    async viewCart(){
        await this.clickCartButton.click();
        
    }
}

module.exports = { AutomationPage }