const { test } = require('@playwright/test');

test('Buscar elemento', async ({ page }) => {

    await page.goto('https://www.google.com');

    const buscador = page.getByRole('combobox');

    await buscador.fill('Playwright');

    await page.waitForTimeout(3000);

});
