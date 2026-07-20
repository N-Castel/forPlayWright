/**
 * navigate todo
 * add To Do
 * validate num ítems toDo
 * Validate ToDo was added
 * Delete toDo
 */

const {test, expect } = require ('@playwright/test');
const {AutomationPage} = require('./pageToDo');
const data = require('./data.json')

test('ToDo test', async ({page}) => {

const todoPage = new AutomationPage(page); 

    await test.step('navigate webPage ToDo', async () => {
        await todoPage.navigateTodo();
        await expect(page).toHaveURL(new RegExp(data.toDoURL));
    });
    
    await test.step('Adding ToDo', async () => {
        await todoPage.addToDo(data.task1);
        await expect(todoPage.countItems).toHaveText(data.threeItems.toString())
    });

    await test.step('Adding ToDo', async () => {
        await todoPage.addToDo(data.task2);
        await expect(todoPage.countItems).toHaveText(data.fourItems.toString())
    });

    await test.step('Mark toDo as completed', async () => {
        await todoPage.checkTodoCompleted(data.task2);
        await expect(todoPage.countItems).toHaveText(data.threeItems.toString());
        await expect(todoPage.toDoClass(data.task2)).toHaveClass(new RegExp('completed'))
    })
})
