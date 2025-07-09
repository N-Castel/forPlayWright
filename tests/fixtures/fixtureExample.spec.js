const {test, expect} = require("../fixtures/pages");
const dataFix = require("../fixtures/fixtureToDo.json")

test("basic test", async({todoPage, page}) => {
   
        await todoPage.addTodo(dataFix.data1)
        await todoPage.addTodo(dataFix.data2)

    await expect(page.getByTestId("todo-title")).toContainText([
        dataFix.data1,
        dataFix.data2
    ]);
});
