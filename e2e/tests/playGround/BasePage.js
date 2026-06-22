const { test: base, expect } = require("@playwright/test");
const { PlayGroundPage } = require("./playGroundPage");

// Extendemos el test de Playwright
exports.test = base.extend({
    // Definimos el fixture 'playgroundBase'
    playgroundBase: async ({ page }, use) => {
        
        const playGround = new PlayGroundPage(page);
        await playGround.navigatePlayground();
        
        await use(playGround);
    }
});

// Exportamos expect tal cual
exports.expect = expect;
