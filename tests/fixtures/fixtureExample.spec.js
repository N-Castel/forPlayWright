const {test, expect} = require("../fixtures/pages")
const dataFix = require("../fixtures/fixtureToDo.json")

test("Add To Do", async({toDoFixture, page}) => {
   
    // await todoPageFixture.addTodo(dataFix.data1)
    // await todoPageFixture.addTodo(dataFix.data2)

    await expect(toDoFixture.toDoList).toContainText([
        dataFix.data1,
        dataFix.data2
    ])

    await expect(toDoFixture.Itemslabel).toContainText(dataFix.itemsList)
})

// test('Validate todo labels is updated', async ({todoPageFixture}) => {
//     await todoPageFixture.addTodo()
// })
