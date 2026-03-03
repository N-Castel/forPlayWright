const {test, expect} = require("../fixtures/pages")
const dataFix = require("../fixtures/fixtureToDo.json")

test.describe('toDo test', () => {

    test("Add To Do", async({toDoFixture, page}) => { // resolve what's in toDoFixture then continue with await statements

        await expect(toDoFixture.toDoList).toContainText([
            dataFix.data1,
            dataFix.data2
        ])
    })

    test('Validate todo labels is updated', async ({toDoFixture, page}) => {

        await toDoFixture.addTodo(dataFix.data3)
        await toDoFixture.addTodo(dataFix.data4)

        await expect(toDoFixture.Itemslabel).toContainText(dataFix.itemsList)

    })
})
