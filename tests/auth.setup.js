const { test: setup, expect } = require('@playwright/test');

const authFile = 'playwright/.auth/user.json';

setup('Autenticarse en el ERP', async ({ page }) => {
  // 1. Ir al login (usando baseURL del config + ruta relativa)
  await page.goto('index.php');

  // 2. Completar credenciales (leídas desde .env)
  await page.getByTestId('login-username').fill(process.env.TEST_USER);
  await page.getByTestId('login-password').fill(process.env.TEST_PASSWORD);
  await page.getByTestId('login-submit').click();

  // 3. Verificar que el login fue exitoso
  await expect(page).toHaveURL(/menu\.php/);

  // 4. Guardar el estado de la sesión (cookies, localStorage, etc.)
  await page.context().storageState({ path: authFile });
});