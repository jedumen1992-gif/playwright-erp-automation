const { test } = require('@playwright/test');

test('Abrir Google y hacer clic', async ({ page }) => {

    await page.goto('https://www.google.com');

    const buscador = page.getByRole('combobox');

    await buscador.fill('Playwright');

    await buscador.press('Enter');

    await page.waitForTimeout(2000);

});