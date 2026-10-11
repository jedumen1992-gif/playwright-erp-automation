const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { MenuPage } = require('../pages/MenuPage');

test.describe('Test 09 - Page Object Model (POM)', () => {

  test('Login usando LoginPage (POM)', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(process.env.TEST_USER, process.env.TEST_PASSWORD);

    await expect(page).toHaveURL(/menu\.php/);
    await page.waitForTimeout(1500);
  });

  test('Verificar módulos visibles usando MenuPage (POM)', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const menuPage = new MenuPage(page);

    await loginPage.goto();
    await loginPage.login(process.env.TEST_USER, process.env.TEST_PASSWORD);
    await expect(page).toHaveURL(/menu\.php/);

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

    await loginPage.goto();
    await loginPage.login(process.env.TEST_USER, process.env.TEST_PASSWORD);

    await menuPage.goto();
    await page.waitForTimeout(1000);

    await expect(page).toHaveURL(/menu\.php/);
    await menuPage.verificarModuloVisible('modulo-configuraciones');
    await page.waitForTimeout(2000);
  });

});