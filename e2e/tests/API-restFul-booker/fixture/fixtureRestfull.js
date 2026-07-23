const {test: base, expect, request } = require('@playwright/test');
const { RestFulPage } = require('../page/restFulPage');
require('dotenv').config();


exports.myResTest = base.extend({

    apiContext: [async ({}, use) => {
        const context = await request.newContext({
            baseURL: 'https://restful-booker.herokuapp.com',
        });
        await use(context);
        await context.dispose();
    }, 
    { scope: 'worker' }
    ],
    
    authToken: [async ({apiContext}, use) => {
           console.log('generating token...');
           const response = await apiContext.post('/auth', {
            data: {
                username: process.env.BOOKER_USERNAME,
                password: process.env.BOOKER_PASSWORD
            },
        });

       expect(response.ok(), `Auth failed with status ${response.status()}`).toBeTruthy();
            
       const body = await response.json();
            console.log('Tengo el body: ', body);
        
        const token = body.token;

        expect(token, 'No token returned from /auth').toBeDefined();
            
        await use(token);
            
        await apiContext.dispose();
        
        }, 
        
        {scope: 'worker'}
    ],
    
    bookingClient: [async ({ apiContext }, use) => {
        const client = new RestFulPage(apiContext);
        await use(client);
    }, 
    { scope: 'worker' }]
})

exports.expect = expect;
