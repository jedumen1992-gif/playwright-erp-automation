const { test: setup, expect } = require('@playwright/test');

const authFile = 'playwright/.auth/user.json';

setup('Autenticarse en el ERP', async ({ page }) => {
  // 1. Ir al login
  await page.goto('http://localhost/sysayg/index.php');

  // 2. Completar credenciales reales
  await page.getByTestId('login-username').fill('admin');
  await page.getByTestId('login-password').fill('123');
  await page.getByTestId('login-submit').click();

  // 3. Verificar que el login fue exitoso
  await expect(page).toHaveURL(/menu\.php/);

  // 4. Guardar el estado de la sesión (cookies, localStorage, etc.)
  await page.context().storageState({ path: authFile });
});