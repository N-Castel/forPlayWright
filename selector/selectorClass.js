export class SelectorClass1 {
    /**
     * @param {import('@playwright/test').Page} page
     */

    constructor(page){
        this.page = page
        this.inputBox = this.page.locator("[class='new-todo']")
    }

    async goTo(){
        await this.page.goto("https://demo.playwright.dev/todomvc/#/")
    }

    async typeInput($text){
        await this.inputBox.fill($text)
    }
}
