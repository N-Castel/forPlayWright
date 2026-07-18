const {myTest, expect } = require ('./fixturePage')

myTest.describe('API Testing with Fixture', () => {

    myTest('request Token', async ({ authToken }) => {
        console.log(authToken);
        expect(authToken).toBeTruthy();
    })
})