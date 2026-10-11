# Clase 9 - Page Object Model (POM)

## Objetivo
Refactorizar los tests para separar la lógica de las páginas (selectores y acciones) de la lógica de las pruebas, aplicando el patrón **Page Object Model**.

## Archivos
```text
pages/LoginPage.js
pages/MenuPage.js
tests/noveno_test.spec.js
Estructura creada
text
playwright-erp-automation/
├── pages/
│   ├── LoginPage.js     ← clase del login
│   └── MenuPage.js      ← clase del menú
└── tests/
    └── noveno_test.spec.js
¿Qué es el POM?
Es un patrón de diseño en el que cada página del sistema se representa con una clase que contiene:

Sus selectores (los locators de los elementos).

Sus acciones (login, navegar, verificar).

Así, los tests quedan limpios y solo se enfocan en qué probar, mientras las clases se encargan de cómo interactuar con la UI.

Código - LoginPage.js
javascript
class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.getByTestId('login-username');
    this.passwordInput = page.getByTestId('login-password');
    this.submitButton = page.getByTestId('login-submit');
  }

  async goto() {
    await this.page.goto('index.php');
  }

  async fillCredentials(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
  }

  async submit() {
    await this.submitButton.click();
  }

  async login(username, password) {
    await this.fillCredentials(username, password);
    await this.submit();
  }
}

module.exports = { LoginPage };
Código - MenuPage.js
javascript
class MenuPage {
  constructor(page) {
    this.page = page;
    this.moduloConfiguraciones = page.getByTestId('modulo-configuraciones');
    this.moduloReferenciales = page.getByTestId('modulo-referenciales');
    this.moduloCompras = page.getByTestId('modulo-compras');
    this.moduloInformes = page.getByTestId('modulo-informes');
  }

  async goto() {
    await this.page.goto('menu.php');
  }

  async irAPagina(testId) {
    await this.page.getByTestId(testId).click();
  }

  async verificarModuloVisible(nombreModulo) {
    const modulo = this.page.getByTestId(nombreModulo);
    await modulo.waitFor({ state: 'visible' });
  }
}

module.exports = { MenuPage };
Código - noveno_test.spec.js
javascript
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { MenuPage } = require('../pages/MenuPage');

test.describe('Test 09 - Page Object Model (POM)', () => {

  test('Login usando LoginPage (POM)', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(process.env.TEST_USER, process.env.TEST_PASSWORD);
    await expect(page).toHaveURL(/menu\.php/);
  });

  test('Verificar módulos visibles usando MenuPage (POM)', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const menuPage = new MenuPage(page);
    await loginPage.goto();
    await loginPage.login(process.env.TEST_USER, process.env.TEST_PASSWORD);
    await menuPage.verificarModuloVisible('modulo-configuraciones');
    await menuPage.verificarModuloVisible('modulo-compras');
  });

  test('Navegar a una página del menú usando MenuPage', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const menuPage = new MenuPage(page);
    await loginPage.goto();
    await loginPage.login(process.env.TEST_USER, process.env.TEST_PASSWORD);
    await menuPage.goto();
    await expect(page).toHaveURL(/menu\.php/);
  });

});
Conceptos
POM (Page Object Model): cada página = una clase.

Constructor: guarda page y define los locators como propiedades.

Métodos de acción: funciones como login(), goto(), verificarModuloVisible().

module.exports: permite importar la clase desde otros archivos.

require('../pages/X'): importa clases desde la carpeta pages/.

Separación de responsabilidades: tests = qué probar; pages = cómo interactuar.

Comparación antes / después
Antes (Test 07):

javascript
await page.goto('http://localhost/sysayg/index.php');
await page.getByTestId('login-username').fill('admin');
await page.getByTestId('login-password').fill('123');
await page.getByTestId('login-submit').click();
await expect(page).toHaveURL(/menu\.php/);
Después (Test 09):

javascript
const loginPage = new LoginPage(page);
await loginPage.goto();
await loginPage.login('admin', '123');
await expect(page).toHaveURL(/menu\.php/);
Ejecución
bash
npx playwright test tests/noveno_test.spec.js --headed
Resultado:

text
4 tests passed (1 setup + 3 tests)
Ventajas del POM
Mantenibilidad: si cambia un selector, se modifica 1 archivo, no N tests.

Legibilidad: los tests se leen como lenguaje natural.

Reutilización: la misma clase se usa en múltiples tests.

Escalabilidad: patrón estándar en proyectos profesionales.

Próximo objetivo
Externalizar los datos de prueba (URLs y credenciales) fuera del código usando variables de entorno.