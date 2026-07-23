const {myResTest, expect } = require ('../fixture/fixtureRestfull')

myResTest.describe('Restful Booker - Auth', () => {

    myResTest('request Token', async ({ authToken }) => {
        console.log(`Recibí el token: ${authToken}`);
        
        expect(authToken).toBeTruthy();
        expect(typeof authToken).toBe('string');
    })
})
