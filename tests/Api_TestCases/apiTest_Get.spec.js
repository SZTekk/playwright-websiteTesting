import { test, expect } from '@playwright/test';

test.describe('API Tests', () => {
    test("fetch a user", async ({ request }) => {
        const response = await request.get('https://reqres.in/api/users/1', {});

        expect(response.status()).toBe(200);
    });

    test("fetch all users", async ({ request }) => {
        const response = await request.get('https://reqres.in/api/users?page=1&per_page=1', {});
        expect(response.status()).toBe(200);
    });

    test('Fetch Resource Test', async ({ request }) => {
        const response = await request.get('https://reqres.in/api/{resource}/1', {
            headers: {
                accept: 'application/json'
            }
        });

        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        console.log("Response Body:", responseBody);
    });
});
