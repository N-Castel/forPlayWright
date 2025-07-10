export class PlayGroundPage{
    /**
     * @param {import('playwright/test').Page} playwrightPage
     */

    constructor(playwrightPage){
        this.pageConst = playwrightPage;
        this.playgroundTitle = this.pageConst.locator('h1')
        this.playgroundH3 = this.pageConst.locator('h3')
        this.waitConditionslabel = this.pageConst.locator('body > div.container.shadow-lg > div:nth-child(7) > div:nth-child(1) > div > div.card-header > h5')
        this.waitConditionsButton = this.pageConst.locator('body > div.container.shadow-lg > div:nth-child(7) > div:nth-child(1) > div > div.card-body > a')
        this.minWaitInput = this.pageConst.locator('input[id="min_wait"]')
        this.maxWaitInput = this.pageConst.locator('input[id="max_wait"]')
        this.alertButton = this.pageConst.locator("button[id='alert_trigger']")
    }

    async navigatePlayground(){
        await this.pageConst.goto('https://play1.automationcamp.ir/')
    }

    async clickWaitConditionsbutton(){
        await this.waitConditionsButton.click()
    }
    /**
     * @param {string} number
     */
    async setMinWait(number){
        await this.minWaitInput.fill(number)
    }

    /**
     * @param {string} number
     */
    async setMaxWait(number){
        await this.maxWaitInput.fill(number)
    }

    async clickAlertButton(){
        await this.alertButton.click()
    }
}

module.exports = { PlayGroundPage }
