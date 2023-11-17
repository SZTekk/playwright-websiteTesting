import {test,expect} from '@playwright/test';
import url from "../Data/url.json"

test("Login",async({page})=>{                   
    await page.goto(url.url);
    await page.getByPlaceholder('nicetoseeyou@email.com').fill('test@gmail.com');
    await page.getByPlaceholder('Shhh...').click();
    await page.getByPlaceholder('Shhh...').fill('testing14');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await expect(page.getByRole('Navigation')).toContainText('Data');
});

test("Logout",async({page})=>{
    await page.goto(url.url);
    await page.getByPlaceholder('nicetoseeyou@email.com').fill('test@gmail.com');
    await page.getByPlaceholder('Shhh...').click();
    await page.getByPlaceholder('Shhh...').fill('testing14');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('button', { name: 'gear icon' }).click();
  await page.getByText('Sign out').click();
  await expect(page.getByRole('link')).toContainText('I seem to have forgotten my password')
})

test("Login Invlaide Credentials",async({page})=>{
    await page.goto(url.url);
    await page.getByPlaceholder('nicetoseeyou@email.com').fill('test13@gmail.com');
    await page.getByPlaceholder('Shhh...').click();
    await page.getByPlaceholder('Shhh...').fill('testing144');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await expect(page.locator('form')).toContainText('Email addressPassword: did not match stored passwordRemember meFailed')
})