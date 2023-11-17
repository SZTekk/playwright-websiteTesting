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

test('Make changes in user permissions', async ({ page }) => {
  await page.getByRole('button', { name: 'gear icon' }).click();
  await page.getByRole('link', { name: 'Admin settings' }).click();
  await page.getByRole('link', { name: 'Permissions' }).click();
  await page.getByText('All Users').click();
  await page.click('(//div[@class="emotion-1qr5uxu e1cskbw19"])[2]');
  await page.click("//li[@role='option']");
  await page.click("//div[text()='Save changes']");
  await page.getByRole('button', { name: 'Yes' }).click();
});