const { test, expect } = require('@playwright/test');

test('Login - completar campos', async ({ page }) => {

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

    await page.waitForTimeout(5000);
    // Buscar botón Iniciar Sesión
         const botonLogin = page.locator('button[type="submit"]');

await expect(botonLogin).toBeVisible();

await botonLogin.click();

// Verificar que el login fue exitoso
await expect(page).toHaveURL(/menu\.php/);

await expect(page.getByText('Inicio')).toBeVisible();

// Pausa para poder ver el menú principal
await page.waitForTimeout(5000);

});