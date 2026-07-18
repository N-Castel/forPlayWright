/**
 * navigate to page
 * click product link
 * search product
 * add product cart
 * validate item added
 */

const {test, expect} = require("@playwright/test");
const { AutomationPage } = require('./page');
const data = require('./data.json')

test('Add ítem to cart and validate item added', async ({page}) => {

    const testPage = new AutomationPage(page);

    await testPage.navigate();
    await testPage.clickProductLink();
    await expect(page).toHaveURL(new RegExp(data.urlProduct));

    await testPage.searchProduct(data.nameProduct);
    await testPage.addProductCart(data.nameProduct);
    await expect(testPage.productAddedLabel).toContainText(data.productAddedCart);

    await testPage.clickContinueShopping();
    await testPage.viewCart();
    await expect(testPage.itemAddedinCart).toHaveText(data.cottonVShirt);
})
