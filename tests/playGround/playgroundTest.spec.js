const {test, expect} = require("./BasePage")
const dataFixture = require("../playGround/fixturePlayGround.json")

test.describe('PlayGround test with Playwright', () => {

    test('Validate Playground home title', async({playgroundBase}) => {
        
        await expect(playgroundBase.playgroundTitle).toHaveText(dataFixture.playgroundTitle)
        await expect(playgroundBase.playgroundH3).toContainText(dataFixture.anApplicationTitle)
    })

    test.describe('Wait conditions', () => {
        
        test('Check wait conditions title', async({playgroundBase, page}) => {
            await playgroundBase.clickWaitConditionsbutton()

            await expect(page.url()).toContain('expected_conditions.html')
        })

        test('set Min and Max waiting', async({playgroundBase, page}) => {
            await playgroundBase.clickWaitConditionsbutton()
            
            await playgroundBase.setMinWait(dataFixture.minWaitValue)
            await playgroundBase.setMaxWait(dataFixture.maxWaitValue)
        })
    })
})
