export class ToDoPageFile{
    /**
     * @param { import('playwright/test').Page} page
     */

    constructor(page){ //playwrigt Page
        this.page = page;
        this.toDoList = this.page.locator("ul > li > div")
        this.inputBox = this.page.locator("input.new-todo")
        this.todoItems = this.page.getByTestId("todo-item")
        this.Itemslabel = this.page.locator("[class='todo-count']")
    }

    async goto(){
        await this.page.goto("https://demo.playwright.dev/todomvc/")
    }

    /**
     * 
     * Es recomendable devolver un locator cómo metodo cuando: 
     * - Locator se usa una sola vez - locator depende de un parámetro - Locator es pesado 
     */
    async toDoList(){
        return this.page.locator("ul > li > div")  // agregar locator a un método
    }

    /**
     * @param {string} text 
     */

    async addTodo(text){
        await this.inputBox.fill(text)
        await this.inputBox.press('Enter')
    }

    /**
     * @param {string} text
     */

    async remove(text){
        const todo = this.todoItems.filter({ hasText: text})
        await todo.hover();
        await todo.getByLabel('Delete').click()
    }

    async removeAll(){
        while ((await this.todoItems.count() > 0)){
            await this.todoItems.first().hover()
            await this.todoItems.getByLabel('Delete').first().click()
        }
    }
}
module.exports = { ToDoPageFile }
