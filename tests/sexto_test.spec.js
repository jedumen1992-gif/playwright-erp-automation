const { test, expect } = require('@playwright/test');

test('Localizar Configuraciones', async ({ page }) => {

    // Abrir el ERP
    await page.goto('http://localhost/sysayg/');

    // Pausa para poder ver la página
    await page.waitForTimeout(3000);

    // Buscar campo usuario
    const usuario = page.locator('input[placeholder="Ingrese el nombre de usuario"]');

    await expect(usuario).toBeVisible();

    // Escribir usuario
    await usuario.fill('admin');

    // Buscar campo contraseña
    const contraseña = page.locator('input[placeholder="Ingrese la contraseña"]');

    await expect(contraseña).toBeVisible();

    // Escribir contraseña
    await contraseña.fill('123');

    // Pausa para poder ver los datos
    await page.waitForTimeout(5000);

    // Buscar botón Iniciar Sesión
    const botonLogin = page.locator('button[type="submit"]');

    await expect(botonLogin).toBeVisible();

    await botonLogin.click();

    // Verificar que el login fue exitoso
    await expect(page).toHaveURL(/menu\.php/);

    // Verificar que aparece Inicio
    await expect(page.getByText('Inicio')).toBeVisible();

    // Buscar CONFIGURACIONES mediante su rol de enlace
    const configuraciones = page.getByRole('link', {
        name: 'CONFIGURACIONES'
    });

    // Verificar que CONFIGURACIONES está visible
    await expect(configuraciones).toBeVisible();

    // Pausa para poder verlo en pantalla
    await page.waitForTimeout(5000);

});