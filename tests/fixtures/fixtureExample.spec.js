const {test, expect} = require("../fixtures/pages");

test("basic test", async({todoPage, page}) => {
    await todoPage.addTodo('testNC')
    await expect(page.getByTestId("todo-title")).toContainText(["testNC"]);
});
