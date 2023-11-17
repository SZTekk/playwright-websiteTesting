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

test('Add a Question', async ({ page }) => {
    await page.getByLabel('New').click();
    await page.getByRole('link', { name: 'insight icon Question' }).click();
    await page.getByRole('heading', { name: 'Sample Database' }).click();
    await page.getByLabel('Accounts').locator('div').first().click();
    await page.getByTestId('step-filter-0-0').locator('a').click();
    await page.getByLabel('ID', { exact: true }).locator('div').nth(1).click();
    await page.getByPlaceholder('Enter an ID').fill('1');
    await page.getByRole('button', { name: 'Add filter' }).click();
    await page.getByRole('button', { name: 'Visualize' }).click();
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('button', { name: 'Yes please!' }).click();
  });