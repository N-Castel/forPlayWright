const base = require("@playwright/test");
const { TodoSelector } = require("../selector/selectorClass");

exports.test = base.test.extend({
    toDoPage1: async ({page}, use) => {
        const toDoPage1 = new TodoSelector(page);
        
        await toDoPage1.goTo();
        await toDoPage1.typeInput('TestNC')

        await use(toDoPage1);
    }
})
exports.expect = base.expect;
