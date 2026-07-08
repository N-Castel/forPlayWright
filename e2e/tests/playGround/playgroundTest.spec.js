const { test, expect } = require("./BasePage")
const dataFixture = require("./fixturePlayGround.json")

test.describe('PlayGround test with Playwright', () => {

    test('Validate Playground home title', async({playgroundBase}) => {
        
        await expect(playgroundBase.playgroundTitle).toHaveText(dataFixture.playgroundTitle)
        await expect(playgroundBase.playgroundH3).toContainText(dataFixture.anApplicationTitle)
    })

    test.describe('Wait conditions', () => {
        
        test('Check wait conditions url', async({playgroundBase, page}) => {
            await playgroundBase.clickWaitConditionsbutton()

            await expect(page.url()).toContain(dataFixture.waitConditionsURL)
        })

        test('set Min and Max waiting', async({playgroundBase}) => {
            await playgroundBase.clickWaitConditionsbutton()

            await playgroundBase.setMinWait(dataFixture.minWaitValue)
            await playgroundBase.setMaxWait(dataFixture.maxWaitValue)
        })

        test('Wait for alert to be present', async ({ playgroundBase }) => {
            await playgroundBase.clickWaitConditionsbutton()
            await playgroundBase.setMinWait(dataFixture.minWaitValue)
            await playgroundBase.setMaxWait(dataFixture.maxWaitValue)

            const result = await playgroundBase.validateAlertTime();

            expect(result.alertText).toBe(dataFixture.messageAlertl);
            expect(result.elapsed).toBeGreaterThanOrEqual(dataFixture.minWaitValue);
            expect(result.elapsed).toBeLessThanOrEqual(dataFixture.maxWaitValue);

            await result.dialogObject.accept();
        });
    })
})
