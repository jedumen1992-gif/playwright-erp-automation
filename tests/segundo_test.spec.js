const { test, expect } = require('@playwright/test');

test('Buscar elemento', async ({ page }) => {

    await page.goto('https://www.google.com');

    const buscador = page.getByRole('combobox');

    await expect(buscador).toBeVisible();

    await buscador.fill('Playwright');

    await expect(buscador).toHaveValue('Playwright');

});