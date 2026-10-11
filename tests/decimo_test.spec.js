const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { MenuPage } = require('../pages/MenuPage');

test.describe('Test 10 - Datos de prueba parametrizados', () => {

  test('Login exitoso usando variables de entorno', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const menuPage = new MenuPage(page);

    await loginPage.goto();
    await loginPage.login(process.env.TEST_USER, process.env.TEST_PASSWORD);

    await expect(page).toHaveURL(/menu\.php/);
    await menuPage.verificarModuloVisible('modulo-configuraciones');
    await page.waitForTimeout(2000);
  });

  test('Login fallido usando credenciales inválidas desde .env', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(process.env.INVALID_USER, process.env.INVALID_PASSWORD);

    // Debe quedarse en el login (NO redirige a menu.php)
    await expect(page).not.toHaveURL(/menu\.php/);

    // Debe aparecer la alerta SweetAlert2
    await expect(page.locator('.swal2-popup')).toBeVisible({ timeout: 5000 });
    await page.waitForTimeout(2000);
  });

  test('Verificar que BASE_URL está correctamente configurada', async ({ page }) => {
    // Usa baseURL del config + ruta relativa (sin / al inicio)
    await page.goto('index.php');
    await page.waitForTimeout(1500);

    // Verificar que cargó el login
    await expect(page.getByTestId('login-username')).toBeVisible();
    await page.waitForTimeout(1500);
  });

});