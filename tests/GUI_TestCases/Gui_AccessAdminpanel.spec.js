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
test.afterEach(async({page})=>{
    await page.click("//a[contains(text(),'Exit admin')]");
    await page.getByRole('button', { name: 'gear icon' }).click();
    await page.getByText('Sign out').click();
    await expect(page.getByRole('link')).toContainText('I seem to have forgotten my password')
})

test('Access Admin Panel', async ({ page }) => {
    await page.getByRole('button', { name: 'gear icon' }).click();
    await page.getByRole('link', { name: 'Admin settings' }).click();
    await expect(page.getByTestId('exit-admin')).toContainText('Exit admin')
  });