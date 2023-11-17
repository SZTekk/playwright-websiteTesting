import { test, expect } from '@playwright/test';


test.describe('API Tests', () => {
    

    test("Update Resources", async ({ request }) => {
        const response = await request.put('https://reqres.in/api/users/123', {
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            key: 'value'
        })
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    console.log('Response Body:', responseBody);
    });


    test("Update User", async({request})=>{
        const userId = 1; 
    const response = await request.put(`https://reqres.in/api/users/${userId}`, {
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            key: 'value'
        })
    });

    console.log('Response:', response.status());

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    console.log('Response Body:', responseBody);
    })

});
