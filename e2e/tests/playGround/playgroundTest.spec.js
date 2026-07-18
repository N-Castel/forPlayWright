const { test, expect, myTest } = require("./fixturePage")
const dataFixture = require("./data.json")

myTest.describe('PlayGround test with Playwright', () => {

    myTest('Validate Playground home title', async({playgroundBase}) => {
        
        await expect(playgroundBase.playgroundTitle).toHaveText(dataFixture.playgroundTitle)
        await expect(playgroundBase.playgroundH3).toContainText(dataFixture.anApplicationTitle)
    })

    myTest.describe('Wait conditions', () => {
        
        myTest('Check wait conditions url', async({playgroundBase ,page}) => {
            await playgroundBase.clickWaitConditionsbutton()

            await expect(page.url()).toContain(dataFixture.waitConditionsURL)
        })

        myTest('set Min and Max waiting', async({playgroundBase}) => {
            await playgroundBase.clickWaitConditionsbutton()

            await playgroundBase.setMinWait(dataFixture.minWaitValue)
            await playgroundBase.setMaxWait(dataFixture.maxWaitValue)
        })

        myTest('Wait for alert to be present', async ({ playgroundBase }) => {
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
