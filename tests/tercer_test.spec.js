const { test, expect } = require('@playwright/test');

test('Completar formulario', async ({ page }) => {

    await page.setContent(`
        <h1>Formulario de usuario</h1>

        <label for="nombre">Nombre</label>
        <input id="nombre" type="text">

        <label for="correo">Correo</label>
        <input id="correo" type="email">
    `);

    const nombre = page.getByLabel('Nombre');
    const correo = page.getByLabel('Correo');

    await nombre.fill('José');
    await correo.fill('jose@gmail.com');

    await expect(nombre).toHaveValue('José');
    await expect(correo).toHaveValue('jose@gmail.com');

    await page.waitForTimeout(5000);


});