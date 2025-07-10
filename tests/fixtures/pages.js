/**
 * Esta clase sería como la de commands en cypress, en la cual creamos los test que pueden ser reutilizados desde las clase test del frame
 */

const base = require("@playwright/test");
const { ToDoPageFile } = require("../fixtures/todo-page");
const dataFix = require("../fixtures/fixtureToDo.json")


exports.test = base.test.extend({ //en cypress seria Cypress.Commands.add() ya que esta creando la versiòn personalizada del test y la extiende a el fixture que vamos a crear en el siguiete statement
    toDoFixture: async({page}, use ) => { // creamos el fixture y le dicemos que va a necesitar el page y el use

        const toDo = new ToDoPageFile(page); //instancia el page object 
        
        await toDo.goto();
        await toDo.addTodo(dataFix.data1);
        await toDo.addTodo(dataFix.data2);

        await use(toDo); //inyecta toDo en toDoFixture
    },
});

exports.expect = base.expect
