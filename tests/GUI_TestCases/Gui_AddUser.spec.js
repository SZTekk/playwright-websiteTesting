import {test,expect} from '@playwright/test';
import url from "../Data/url.json"

test.beforeEach(async({page})=>{
    await page.goto(url.url);
    await page.getByPlaceholder('nicetoseeyou@email.com').fill('test@gmail.com');
    await page.getByPlaceholder('Shhh...').click();
    await page.getByPlaceholder('Shhh...').fill('testing14');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await expect(page.getByRole('Navigation')).toContainText('Data');
})
    test("add User from Admin panel",async({page})=>{
        let lastname = "test"+Math.random();
        let user = "test"+Math.random();
        let email = user+"@gmail.com";
        await page.getByRole('button', { name: 'gear icon' }).click();
        await page.getByRole('link', { name: 'Admin settings' }).click();
        await page.getByLabel('Navigation bar').getByRole('link', { name: 'People' }).click();
        await page.getByRole('button', { name: 'Invite someone' }).click();
  
        await page.getByPlaceholder('Johnny').click();
        await page.getByPlaceholder('Johnny').fill('test');
        await page.getByPlaceholder('Appleseed').click();
        await page.getByPlaceholder('Appleseed').fill(lastname);
        await page.getByPlaceholder('nicetoseeyou@email.com').click();
        await page.getByPlaceholder('nicetoseeyou@email.com').fill(email);
        await page.getByRole('button', { name: 'Create' }).click();
        await expect(page.getByRole('heading')).toContainText("test "+lastname+" has been added");
    })

