/**
 * this class would be like cy commands, to create methods that can be used in the whole e2e(fixture) 
 */

const base = require("@playwright/test")
const { ToDoPageFile } = require("../fixtures/todo-page")
const dataFix = require("../fixtures/fixtureToDo.json")


exports.test = base.test.extend({ //this statement its like  Cypress.Commands.add() to create a version of my test  and extend the fixture that we are creating in the next statement 
    toDoFixture: async({page}, use ) => { // ccreate the fixture (toDoFixture) and tell him that it will be need the "page"

        const toDo = new ToDoPageFile(page); //intance the object in toDo
        
        await toDo.goto();
        await toDo.addTodo(dataFix.data1)
        await toDo.addTodo(dataFix.data2)

        await use(toDo); //injects toDo in toDofixture
    }
})

exports.expect = base.expect
