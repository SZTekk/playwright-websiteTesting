import {test,expect} from '@playwright/test';
import url from "../Data/url.json"

test.describe('GUI Tests', () => {
    
    
    test.beforeEach(async({page})=>{
        await page.goto(url.url);
        await page.getByPlaceholder('nicetoseeyou@email.com').fill('test@gmail.com');
        await page.getByPlaceholder('Shhh...').click();
        await page.getByPlaceholder('Shhh...').fill('testing14');
        await page.getByRole('button', { name: 'Sign in' }).click();
        await expect(page.getByRole('Navigation')).toContainText('Data');
    })
    test.afterEach(async({page})=>{
        await page.getByRole('button', { name: 'gear icon' }).click();
        await page.getByText('Sign out').click();
        await expect(page.getByRole('link')).toContainText('I seem to have forgotten my password')
    })

    test('Add DashBoard', async ({ page }) => {
        await page.getByLabel('New').click();
        await page.getByText('Dashboard').click();
        await page.getByPlaceholder('What is the name of your').fill('Demo');
        await page.getByRole('button', { name: 'Create' }).click();
        await page.getByTestId('edit-bar').getByRole('button', { name: 'Save' }).click();
        await expect(page.getByPlaceholder('Add title')).toContainText('Demo')
      });
});