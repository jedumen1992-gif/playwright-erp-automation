const { test, expect } = require('@playwright/test');

test.describe('Test 08 - Reutilización de sesión con storageState', () => {

  // ⚡ Este test NO hace login.
  // Playwright ya lo hizo por nosotros en auth.setup.js
  // y guardó la sesión en playwright/.auth/user.json

  test('Verificar que la sesión está activa y el menú carga directamente', async ({ page }) => {
    // 1. Ir directo al menú (NO al login)
    await page.goto('http://localhost/sysayg/menu.php');

    // 2. Confirmar que NO nos redirigió al login
    await expect(page).toHaveURL(/menu\.php/);

    // 3. Confirmar que el menú cargó correctamente
    await expect(page.getByTestId('modulo-configuraciones')).toBeVisible();
    await expect(page.getByTestId('modulo-compras')).toBeVisible();
  });

  test('Navegar al módulo de configuración sin volver a loguearse', async ({ page }) => {
    await page.goto('http://localhost/sysayg/menu.php');

    // Verificar que el módulo está disponible
    await expect(page.getByTestId('modulo-configuraciones')).toBeVisible();
  });

}); 