/**
 * navigate to webpage
 * go Products
 * search product summer white top
 * click add to cart
 * validate modal product was added 
 * click view cart 
 * validate product added to cart
 * proceed to checkout
 */

const {test, expect} = require('@playwright/test');
const { AutomationPage } = require('./page');
const data = require('./data.json')


test('Add Product to Cart and validate was added', async ({page}) => {

    const testPage = new AutomationPage(page);

    await test.step('Navigate to products', async () => { 
        await testPage.navigate();
        await testPage.clickProductLink();
        await expect(page).toHaveURL(new RegExp(data.productURL));
    });

    await test.step('Searching product', async () => {
        await testPage.searchProduct(data.productItem);
    });

    await test.step('Adding product to cart', async () => {
        await testPage.addProductCart(data.productItem);
    });

    await test.step('Validate product was added to cart', async () => {
        await testPage.clickCartLink();
        await expect(testPage.itemInCartByName(data.productItem)).toContainText(data.productItem);
    });
})

