const {test, expect} = require("@playwright/test");
const { AutomationPage } = require('./page');
const data = require('./data.json')

test('Add ítem to cart and validate item added', async ({page}) => {

    const testPage = new AutomationPage(page);

    await testPage.navigate();

    await testPage.clickProductsButton();
    await expect(page).toHaveURL(new RegExp(data.urlProduct));

    await testPage.searchProduct(data.nameProduct);
    await testPage.addItemCart(data.nameProduct);
    await testPage.clickCartButton();
    await expect(page).toHaveURL(new RegExp(data.urlCart));

    await expect(testPage.itemCartProductByName(data.nameProduct)).toContainText(new RegExp(data.nameProduct));
})
