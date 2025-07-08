const { test, expect } = require("../ToDoPage/todoBasePage")

test("first test", async({ toDoPage1, page}) => {
    await toDoPage1.typeInput();
    await expect(page.getByTestId("todo-title")).toContainText("asd")
})