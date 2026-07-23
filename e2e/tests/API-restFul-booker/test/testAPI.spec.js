const {myResTest, expect } = require ('../fixture/fixtureRestfull')

myResTest.describe('Restful Booker - Auth', () => {

    myResTest('request Token', async ({ authToken }) => {
        console.log(`Recibí el token: ${authToken}`);
        
        expect(authToken).toBeTruthy();
        expect(typeof authToken).toBe('string');
    })

    myResTest('POST - Create a booking', async ({ bookingClient }) => {
    const response = await bookingClient.createBooking(validBookingData);

    expect(response.ok()).toBeTruthy();

    const body = await response.json();
    expect(body.booking).toBeDefined();
    expect(body.bookingid).toBeDefined();
    
    });
})
