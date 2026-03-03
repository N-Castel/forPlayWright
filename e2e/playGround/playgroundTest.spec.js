const {test, expect} = require("./BasePage")
const dataFixture = require("../playGround/fixturePlayGround.json")

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

        test('Wait for alert to be present', async({playgroundBase, page}) => {
            await playgroundBase.clickWaitConditionsbutton()
            await playgroundBase.setMinWait(dataFixture.minWaitValue)
            await playgroundBase.setMaxWait(dataFixture.maxWaitValue)
            await playgroundBase.clickAlertButton() 

            const startTime =  Date.now()

            page.once('dialog', async (dialog) => {
                const elapsed = (Date.now() - startTime / 1000 )
                
                expect(dialog.message()).toBe('I am alerting you!jhgjg')

                console.log('Alert appears after: ' + elapsed + ' segundos')

                await expect(elapsed).toBeGreaterThanOrEqual(dataFixture.minWaitValue)
                await expect(elapsed).toBeLessThanOrEqual(dataFixture.maxWaitValue)
                
                await dialog.accept()

                await expect (playgroundBase.alertHandledText).toHaveText("Alert handled")
            })
        })

        test('Wait for Prompt to be present', async({playgroundBase, page}) => {
            await playgroundBase.clickWaitConditionsbutton()
            await playgroundBase.setMinWait(dataFixture.minWaitValue)
            await playgroundBase.setMaxWait(dataFixture.maxWaitValue)
            await playgroundBase.clickPromptButton()
            
            page.on('dialog', async dialog => {
                expect(dialog.message()).toHaveText('Choose wisely..'); 
                await dialog.accept()
                
                await expect(playgroundBase.confirmPrompt).toHaveText("Confirm response:123 ")
                await expect(playgroundBase.confirmPromptOk).toHaveText("123")
                await expect(playgroundBase.confirmPromptOk).toHaveCss(dataFixture.greenBackGroung)
            })
        })
    })
})
