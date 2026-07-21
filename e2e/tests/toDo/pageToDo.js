class AutomationPage{

    /**
     * @param {import('playwright/test').Page} playwrightPage
     */

    constructor(playwrightPage){
        this.page = playwrightPage;
        this.toDoInput = this.page.getByTestId('new-todo');
        this.countItems = this.page.locator('.todo-count > strong');
    }
    
    /**
     * @param {string} nameProduct
     */
    getItemByName(nameProduct){
        return this.page.locator('.todo-list li').filter({hasText: nameProduct})
    }
    
    async navigateTodo(){
        await this.page.goto('')
    };

    /**
     *@param {string} value 
     */
    async addToDo(value){
        await this.toDoInput.fill(value);
        await this.toDoInput.press('Enter')
    };

    async checkTodoCompleted(toDoName){
        const completedButton = this.toDoByName(toDoName);
        await completedButton.locator('input.toggle').check()
    };  
    
    toDoClass(toDoName){
        return this.toDoByName(toDoName)
    }
}

module.exports = {AutomationPage}
