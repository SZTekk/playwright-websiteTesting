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


test('Visualize Data and save in dashBoard', async ({ page }) => {
    await page.getByLabel('New').click();
    await page.getByText('Dashboard').click();
    await page.getByPlaceholder('What is the name of your').fill('Demo');
    await page.getByRole('button', { name: 'Create' }).click();
    await page.getByTestId('edit-bar').getByRole('button', { name: 'Save' }).click();
    await page.getByRole('link', { name: 'database icon Browse data' }).click();
    await page.getByRole('link', { name: 'database icon Sample Database' }).click();
    await page.getByRole('link', { name: 'table icon Accounts' }).click();
    await page.getByRole('button', { name: 'Summarize' }).click();
    await page.getByTestId('unpinned-dimensions').getByText('Email').click();
    await page.getByRole('button', { name: 'Done' }).click();
    await page.getByTestId('viz-type-button').click();
    await page.getByTestId('Bar-button').click();
    await page.getByRole('button', { name: 'Done' }).click();
    await page.getByRole('button', { name: 'Save' }).click();
    await page.click("//button[@title='Save']");
    await page.click("//button[text()='Yes please!']");
  });