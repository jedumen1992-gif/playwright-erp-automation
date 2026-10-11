Clase 10 - Datos de prueba parametrizados con .env
Objetivo
Externalizar los datos de prueba (URLs y credenciales) fuera del código fuente usando variables de entorno, evitando credenciales hardcodeadas.

Archivos
text
.env                            (NO se sube a Git)
.env.example                    (plantilla pública)
playwright.config.js            (modificado)
tests/auth.setup.js             (modificado)
tests/noveno_test.spec.js       (modificado)
pages/LoginPage.js              (modificado)
pages/MenuPage.js               (modificado)
tests/decimo_test.spec.js       (nuevo)
.gitignore                      (modificado)
Instalación de dotenv
bash
npm install dotenv
¿Por qué usar .env?
Hardcodear credenciales en el código tiene problemas:

Si cambia la contraseña, hay que editar N archivos.

Las credenciales quedan expuestas en GitHub.

No se puede cambiar de entorno (local, QA, producción) sin tocar código.

Estructura del .env
text
BASE_URL=http://localhost/sysayg/
TEST_USER=admin
TEST_PASSWORD=***
INVALID_USER=usuario_que_no_existe_xyz
INVALID_PASSWORD=clave_incorrecta_123
⚠️ Importante: la barra / al final del BASE_URL es crítica (ver más abajo).

Estructura del .env.example
text
BASE_URL=http://localhost/sysayg/
TEST_USER=tu_usuario_aqui
TEST_PASSWORD=tu_password_aqui
INVALID_USER=usuario_que_no_existe_xyz
INVALID_PASSWORD=clave_incorrecta_123
Modificación de playwright.config.js
javascript
// Cargar variables de entorno desde .env
require('dotenv').config();

module.exports = defineConfig({
  use: {
    baseURL: process.env.BASE_URL,
    // ... resto de la configuración
  },
  // ...
});
Modificación de auth.setup.js
javascript
await page.goto('index.php');   // ← ruta relativa, sin "/"

await page.getByTestId('login-username').fill(process.env.TEST_USER);
await page.getByTestId('login-password').fill(process.env.TEST_PASSWORD);
Modificación de LoginPage.js
javascript
async goto() {
    await this.page.goto('index.php');
}
Modificación de MenuPage.js
javascript
async goto() {
    await this.page.goto('menu.php');
}
Modificación de .gitignore
text
# Variables de entorno
.env
Conceptos
Variables de entorno: valores configurables fuera del código (process.env.X).

dotenv: librería que carga el .env en process.env.

.env: valores reales, NUNCA se sube a Git.

.env.example: plantilla pública.

baseURL: permite usar rutas relativas en page.goto().

⚠️ Error documentado: URL mal formada por falta de "/"
Síntoma
Todos los tests fallaban con 404 Not Found en http://localhost/index.php (faltaba /sysayg).

Causa
La regla estándar de URLs de Playwright (RFC 3986):

text
baseURL = "http://localhost/sysayg"  + "index.php"  →  http://localhost/index.php      ❌
baseURL = "http://localhost/sysayg/" + "index.php"  →  http://localhost/sysayg/index.php ✅
Si el baseURL NO termina en /, la última parte se reemplaza.

Si el baseURL termina en /, se concatena como si fuera una carpeta.

Solución
Agregar / al final del BASE_URL en .env:

text
BASE_URL=http://localhost/sysayg/
Aprendizaje
Las URLs siguen el estándar RFC 3986. Es un detalle que confunde mucho al principio.

Código - decimo_test.spec.js
javascript
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
  });

  test('Login fallido usando credenciales inválidas desde .env', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(process.env.INVALID_USER, process.env.INVALID_PASSWORD);
    await expect(page).not.toHaveURL(/menu\.php/);
    await expect(page.locator('.swal2-popup')).toBeVisible();
  });

  test('Verificar que BASE_URL está correctamente configurada', async ({ page }) => {
    await page.goto('index.php');
    await expect(page.getByTestId('login-username')).toBeVisible();
  });

});
Ejecución
bash
npx playwright test tests/decimo_test.spec.js --headed
Resultado:

text
4 tests passed (1 setup + 3 tests)
Ventajas
Seguridad: credenciales fuera del código y fuera de Git.

Portabilidad: cambiar de entorno = cambiar .env.

Escalabilidad: agregar nuevas variables es trivial.

Profesionalismo: patrón usado en proyectos reales (12-factor app).

Próximo objetivo
Generar reportes personalizados, capturas y evidencias de ejecución.