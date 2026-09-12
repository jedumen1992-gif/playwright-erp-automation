const { test, expect } = require('@playwright/test');

test.describe('Test 07 - Selectores robustos con data-testid', () => {

  // Antes de cada test, ir al login
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost/sysayg/index.php');
  });

  // ============================================
  // CASO POSITIVO: Login exitoso
  // ============================================
  test('Login exitoso y visualización del menú principal', async ({ page }) => {
    // 1. Rellenar credenciales con selectores data-testid
    await page.getByTestId('login-username').fill('admin');
    await page.getByTestId('login-password').fill('123');
    await page.getByTestId('login-submit').click();

    // 2. Verificar que redirige al menú
    await expect(page).toHaveURL(/menu\.php/);

    // 3. Verificar que los módulos principales están visibles
    await expect(page.getByTestId('modulo-configuraciones')).toBeVisible();
    await expect(page.getByTestId('modulo-compras')).toBeVisible();
    await expect(page.getByTestId('modulo-informes')).toBeVisible();
  });

  // ============================================
  // CASO NEGATIVO: Login con credenciales incorrectas
  // ============================================
  test('Login fallido muestra mensaje de error', async ({ page }) => {
    // 1. Rellenar con credenciales incorrectas
    await page.getByTestId('login-username').fill('usuario_que_no_existe_xyz');
    await page.getByTestId('login-password').fill('clave_incorrecta_123');
    await page.getByTestId('login-submit').click();

    // 2. Verificar que NO redirige al menú (sigue en login)
    await expect(page).not.toHaveURL(/menu\.php/);

    // 3. Verificar que aparece la alerta SweetAlert2
    await expect(page.locator('.swal2-popup')).toBeVisible({ timeout: 5000 });
  });

});