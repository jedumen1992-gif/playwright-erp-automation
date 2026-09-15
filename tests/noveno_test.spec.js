const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { MenuPage } = require('../pages/MenuPage');

test.describe('Test 09 - Page Object Model (POM)', () => {

  test('Login usando LoginPage (POM)', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Ir al login y autenticarse
    await loginPage.goto();
    await loginPage.login('admin', '123');

    // Verificar que llegamos al menú
    await expect(page).toHaveURL(/menu\.php/);
    await page.waitForTimeout(1500);
  });

  test('Verificar módulos visibles usando MenuPage (POM)', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const menuPage = new MenuPage(page);

    // Login previo
    await loginPage.goto();
    await loginPage.login('admin', '123');
    await expect(page).toHaveURL(/menu\.php/);

    // Verificar módulos usando la clase MenuPage
    await menuPage.verificarModuloVisible('modulo-configuraciones');
    await page.waitForTimeout(1000);

    await menuPage.verificarModuloVisible('modulo-compras');
    await page.waitForTimeout(1000);

    await menuPage.verificarModuloVisible('modulo-informes');
    await page.waitForTimeout(1500);
  });

  test('Navegar a una página del menú usando MenuPage', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const menuPage = new MenuPage(page);

    // Login
    await loginPage.goto();
    await loginPage.login('admin', '123');

    // Ir directo a menu.php
    await menuPage.goto();
    await page.waitForTimeout(1000);

    // Verificar que seguimos en el menú (gracias a la sesión activa)
    await expect(page).toHaveURL(/menu\.php/);
    await menuPage.verificarModuloVisible('modulo-configuraciones');
    await page.waitForTimeout(2000);
  });

});