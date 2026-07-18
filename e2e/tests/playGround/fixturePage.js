const { test: base, expect, request } = require("@playwright/test");
const { PlayGroundPage } = require("./playGroundPage");
require('dotenv').config();

exports.myTest = base.extend({

    playgroundBase: async ({ page }, use) => {
        
        const playGround = new PlayGroundPage(page);
        
        await playGround.navigatePlayground();
        
        await use(playGround);
    },

    testUser: [async ({}, use) => {
        console.log('Login');
        const users = [
            { username: 'user_standar', password: 'secret_pass'},
            { username: 'user_lock', password: 'secret_pass'},
        ];
        await use(users);
    }, 
        {scope: 'worker'},
    ],

    authToken: [async ({}, use) => {
        console.log('generating token...');
        const apiContext = await request.newContext();

        const response = await apiContext.post('https://reqres.in/api/login', {
            headers: {
                'x-api-key': process.env.REQRES_API_KEY
            },
            data: {
                email: 'eve.holt@reqres.in',
                password: 'cityslicka',
            },
    });
    const body = await response.json();
    console.log(body);
        const token = body.token ;
        
        await use(token);
        
        await apiContext.dispose();
    
    }, 
        {scope: 'worker'}
    ]
})

exports.expect = expect;