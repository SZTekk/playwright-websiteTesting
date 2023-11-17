import {test,expect} from '@playwright/test';
import url from "../Data/url.json"

test.beforeEach(async({page})=>{
    await page.goto(url.url);
    await page.getByPlaceholder('nicetoseeyou@email.com').fill('test@gmail.com');
    await page.getByPlaceholder('Shhh...').fill('testing14');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await expect(page.getByRole('Navigation')).toContainText('Data');
})

test('Run a Query', async ({ page }) => {
    await page.getByLabel('New').click();
    await page.getByRole('link', { name: 'sql icon SQL query' }).click();
    await page.locator('.ace_content').click();
    await page.getByTestId('native-query-editor').getByRole('textbox').fill('select * from Accounts\n\n');
    await page.getByTestId('native-query-editor-sidebar').getByLabel('Get Answer').click();
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByPlaceholder('What is the name of your').fill('Query');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('button', { name: 'Yes please!' }).click();
    await page.getByRole('option', { name: 'dashboard icon test' }).locator('div').click();
  });