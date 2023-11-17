import { test, expect } from '@playwright/test';


test.describe('API Tests', () => {

    test("Update part of resource",async({request})=>{
        const response = await request.post('https://regres.in/api/{resource}/1', {});
        expect(response.status()).toBe(200);
    })

    test("Update Part of User's data",async({request})=>{
        const response = await request.post('https://regres.in/api/users/1', {});

        expect(response.status()).toBe(200);
        console.log("Logged Out");
    })

});
