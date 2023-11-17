import { test, expect } from '@playwright/test';


test.describe('API Tests', () => {


    test("Login User",async({request})=>{
        const response = await request.post('https://regres.in/api/login', {
            data: {
                username: "test12",
                email: "test@gmail.com",
                password: "test123"
            }
        });
        expect(response.status()).toBe(200);
    })

    test("Logout User",async({request})=>{
        const response = await request.post('https://regres.in/api/logout', {});

        expect(response.status()).toBe(200);
        console.log("Logged Out");
    })

});
