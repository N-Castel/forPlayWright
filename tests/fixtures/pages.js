const base = require("@playwright/test");
const { ToDoPage } = require("../fixtures/todo-page");

exports.test = base.test.extend({
    todoPage: async({page}, use ) => {

        const todoPage = new ToDoPage(page);
        
        await todoPage.goto();
        // await todoPage.addTodo('asd');
        // await todoPage.addTodo('asd');

        await use(todoPage);
    },
});

exports.expect = base.expect;
