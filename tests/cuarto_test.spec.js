const { test, expect } = require('@playwright/test');

test('Buscar elemento por texto', async ({ page }) => {

    await page.setContent(`
        <h1>Sistema ERP</h1>
        <button>Iniciar sesión</button>
    `);

    const boton = page.getByText('Iniciar sesión');

    await expect(boton).toBeVisible();

});