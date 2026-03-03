const base = require("@playwright/test")
const { PlayGroundPage } = require("./playGroundPage")

exports.test = base.test.extend({
    playgroundBase: async({page}, use) => {
        
        const playGround = new PlayGroundPage(page)

        await playGround.navigatePlayground()

        await use(playGround)
    }
})

exports.expect = base.expect
