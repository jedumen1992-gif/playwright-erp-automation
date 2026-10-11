# BOOTCAMP MASTER - QA Automation con Playwright

## Propósito

Este archivo es la memoria principal del bootcamp. Debe permitir continuar el proyecto aunque el alumno cambie de cuenta de ChatGPT o pase mucho tiempo sin estudiar.

Debe mantenerse actualizado con los conceptos aprendidos, ejercicios realizados, errores reales encontrados y punto exacto de continuación.

## Perfil del alumno

El alumno viene principalmente de QA Manual y está realizando la transición hacia QA Automation.

No se debe asumir conocimiento técnico avanzado.

La enseñanza debe ser práctica, progresiva y orientada a situaciones reales de QA.

## Metodología

1. Explicar cada término técnico antes de asumir que se conoce.
2. Avanzar lento pero seguro.
3. Dar ejemplos concretos y no ejercicios innecesariamente extensos.
4. Explicar el porqué de cada comando.
5. No limitarse a copiar código.
6. Mantener el pensamiento de QA: primero decidir qué probar y después automatizar.
7. Documentar errores reales.
8. Mantener actualizadas las clases y este archivo.
9. Cuando una solución ya funciona, no modificarla innecesariamente.
10. Ante un error, partir primero de lo que ya fue comprobado y evitar adivinar selectores o soluciones.
11. Las ejecuciones en modo headed deben incluir pausas para que el alumno pueda observar visualmente lo que Playwright está haciendo.
12. Priorizar el entendimiento del flujo antes de avanzar al siguiente concepto.

## Objetivo profesional

Construir un portafolio profesional de QA Automation con Playwright sobre un ERP desarrollado en PHP.

El portafolio debe demostrar:

- pensamiento de QA;
- automatización;
- organización;
- Git/GitHub;
- Node.js;
- npm;
- Playwright;
- locators;
- selectores robustos;
- assertions;
- Page Object Model;
- fixtures;
- datos de prueba;
- capturas y evidencias;
- reportes;
- mantenimiento;
- automatización de módulos del ERP.

## Repositorio

playwright-erp-automation

Remoto: https://github.com/jedumen1992-gif/playwright-erp-automation

Local: C:\Proyectos\playwright-erp-automation

## Estado actual

Herramientas instaladas: Git, Node.js, npm, Visual Studio Code, Playwright Test, Navegadores de Playwright.

## Estructura actual aproximada

playwright-erp-automation/
├── docs/
│   ├── BOOTCAMP_MASTER.md
│   ├── Clase01.md ... Clase08.md
├── node_modules/
├── pages/
│   ├── LoginPage.js
│   └── MenuPage.js
├── test-results/
├── tests/
│   ├── primer_test.spec.js
│   ├── segundo_test.spec.js
│   ├── tercer_test.spec.js
│   ├── cuarto_test.spec.js
│   ├── quinto_test.spec.js
│   ├── sexto_test.spec.js
│   ├── septimo_test.spec.js
│   ├── octavo_test.spec.js
│   ├── noveno_test.spec.js
│   └── decimo_test.spec.js
├── .env
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md

## Conocimientos adquiridos

### QA Manual vs Automation

Principio central: El QA decide qué se debe probar; Playwright es la herramienta que ejecuta los pasos.

La automatización no reemplaza el pensamiento de QA. Primero se define qué comportamiento se quiere validar y después se decide cómo automatizarlo.

### Git

Comandos usados: git --version, git status, git add, git commit, git push.

Flujo: Modificar archivos → git status → git add → git commit → git push → git status.

### GitHub

Repositorio: https://github.com/jedumen1992-gif/playwright-erp-automation

### Node.js, npm, package.json, package-lock.json, node_modules

Node.js ejecuta JavaScript fuera del navegador. npm administra paquetes. package.json describe el proyecto. package-lock.json registra versiones. node_modules contiene las librerías (no se sube a GitHub).

## Instalación de Playwright

npm install -D @playwright/test
npx playwright install

## Conceptos de Playwright

- test: define una prueba
- page: página controlada por Playwright
- page.goto(): navega a una URL
- await: espera a que termine una operación
- Headless: sin ventana visible (npx playwright test)
- Headed: con ventana visible (npx playwright test --headed)

## Locators

page.locator('input[placeholder="..."]')
page.getByText('Inicio')
page.getByRole('link', { name: 'CONFIGURACIONES' })
page.getByTestId('login-username')

## Acciones

- fill(): completa un campo
- click(): hace clic
- press(): presiona una tecla

## Assertions

- expect(x).toBeVisible()
- expect(x).toHaveValue()
- expect(page).toHaveURL(/menu\.php/)
- expect(x).not.toHaveURL(...)

## Filosofía de selectores

Preferir: texto visible, atributos específicos, placeholder, role, data-testid.
Evitar: colores, posiciones, estilos, clases CSS cambiantes.

## Flujo de login del ERP

1. Abrir la página del ERP.
2. Esperar para observar.
3. Buscar campo usuario.
4. Escribir usuario.
5. Buscar campo contraseña.
6. Escribir contraseña.
7. Buscar botón Iniciar Sesión.
8. Hacer clic.
9. Verificar URL menu.php.
10. Verificar "Inicio" visible.

Credenciales locales: admin / 123.

## Tests realizados

### Test 1 - Abrir página (tests/primer_test.spec.js)
Abre Google. Resultado: 1 passed.

### Test 2 - Buscar elemento (tests/segundo_test.spec.js)
Practica localización, fill, press, assertions. Documenta detección de tráfico inusual por Google.

### Test 3 - Completar formulario (tests/tercer_test.spec.js)
Usa page.setContent(), getByLabel, fill, expect, toHaveValue. Resultado: 1 passed.

### Test 4 - Buscar elemento por texto (tests/cuarto_test.spec.js)
Usa getByText('Iniciar sesión') y toBeVisible. Resultado: 1 passed.

### Test 5 - Login real del ERP (tests/quinto_test.spec.js)
Selectores por placeholder y button[type="submit"]. Resultado: 1 passed.

### Test 6 - Localizar Configuraciones (tests/sexto_test.spec.js)
Usa getByRole('link', { name: 'CONFIGURACIONES' }). Resultado: 1 passed.

Aprendizaje: no se puede abrir menu.php directamente sin sesión.

## Errores documentados

1. Navegadores de Playwright no instalados → npx playwright install.
2. Google detectó tráfico inusual → preferir ERP local.
3. Selector incorrecto en Test 6 → volver al selector comprobado del Test 5.
4. Acceso directo a menu.php sin sesión → respetar precondiciones.

## Roadmap

### Completado

- [x] Conceptos de QA Automation
- [x] QA Manual vs Automation
- [x] Git y GitHub
- [x] Node.js, npm, package.json
- [x] .gitignore y node_modules
- [x] Instalación de Playwright y navegadores
- [x] Tests 1-6 (básicos)
- [x] Test 7 - data-testid y caso negativo
- [x] Test 8 - storageState y reutilización de sesión
- [x] Test 9 - Page Object Model
- [x] Test 10 - Datos de prueba con .env

### Próximos pasos

- [ ] Capturas y evidencias
- [ ] Reportes personalizados
- [ ] Automatización de módulos del ERP
- [ ] Pruebas CRUD
- [ ] Pruebas de permisos
- [ ] GitHub Actions (CI/CD)
- [ ] Proyecto final para portfolio

## Punto exacto de continuación

Los Tests 1 a 10 están funcionando y documentados. El último ejercicio completado fue: Test 10 - Datos de prueba parametrizados.

No volver a instalar Git, Node.js, npm ni Playwright salvo que el alumno lo solicite.

Las ejecuciones en modo headed deben mantener pausas suficientes para que el alumno pueda observar la ejecución en pantalla.

## Test 07 - Selectores robustos con data-testid

Fecha: 2026-09-12
Archivo: tests/septimo_test.spec.js
URL: http://localhost/sysayg/index.php

Objetivo: reemplazar selectores frágiles por data-testid.

Conceptos aprendidos:
- page.getByTestId()
- data-testid en el HTML del ERP
- slug dinámico en PHP para data-testid
- Módulos (modulo-*) vs páginas (menu-*)
- Casos positivos y negativos
- slowMo en playwright.config.js

Cambios en el ERP:
- index.php: data-testid en login-username, login-password, login-submit
- tools/aside.php: data-testid dinámico modulo-<slug> y menu-<slug>

Casos:
1. Login exitoso con credenciales válidas.
2. Login fallido con credenciales inválidas.

Comando: npx playwright test tests/septimo_test.spec.js --headed
Resultado: 2 passed.

## Test 08 - Reutilización de sesión con storageState

Fecha: 2026-09-14
Archivos: tests/auth.setup.js, tests/octavo_test.spec.js, playwright.config.js

Objetivo: evitar repetir login en cada test.

Conceptos:
- Fixtures de Playwright
- storageState
- Proyectos setup + chromium con dependencies
- testMatch
- Renombrar con ":" en destructuring JS

Archivos:
- Nuevo tests/auth.setup.js
- Nuevo tests/octavo_test.spec.js
- Modificado playwright.config.js
- Modificado .gitignore con /playwright/.auth/

Casos:
1. Sesión guardada permite entrar directo al menú.
2. Navegar a configuraciones sin re-autenticarse.

Comando: npx playwright test tests/octavo_test.spec.js --headed
Resultado: 3 passed (1 setup + 2 tests).

## Test 09 - Page Object Model (POM)

Fecha: 2026-09-15
Archivos: pages/LoginPage.js, pages/MenuPage.js, tests/noveno_test.spec.js

Objetivo: separar lógica de páginas de lógica de tests.

Conceptos:
- POM
- Constructor con locators
- Métodos de acción
- module.exports
- require('../pages/X')
- Separación de responsabilidades

Estructura:
pages/
├── LoginPage.js
└── MenuPage.js
tests/
└── noveno_test.spec.js

Antes (Test 07):
await page.goto('http://localhost/sysayg/index.php');
await page.getByTestId('login-username').fill('admin');
await page.getByTestId('login-password').fill('123');
await page.getByTestId('login-submit').click();

Después (Test 09):
const loginPage = new LoginPage(page);
await loginPage.goto();
await loginPage.login('admin', '123');

Casos:
1. Login usando LoginPage.
2. Verificar módulos con MenuPage.
3. Navegar al menú con ambas clases.

Comando: npx playwright test tests/noveno_test.spec.js --headed
Resultado: 4 passed.

Valor para el portfolio: el POM es el patrón más pedido en QA Automation.

## Test 10 - Datos de prueba parametrizados

Fecha: 2026-10-11
Archivos: .env, .env.example, playwright.config.js, tests/auth.setup.js, tests/noveno_test.spec.js, pages/LoginPage.js, pages/MenuPage.js, tests/decimo_test.spec.js, .gitignore

Objetivo: externalizar URLs y credenciales fuera del código.

Conceptos:
- Variables de entorno con process.env
- dotenv
- .env (no se sube) vs .env.example (sí se sube)
- baseURL en playwright.config.js
- Regla de concatenación de URLs: si baseURL termina en "/" concatena, si no, reemplaza la última parte.

Error documentado - URL mal formada:

Síntoma: tests fallaban con 404 en http://localhost/index.php (faltaba /sysayg).

Causa:
- baseURL = "http://localhost/sysayg" + "index.php" → http://localhost/index.php (mal)
- baseURL = "http://localhost/sysayg/" + "index.php" → http://localhost/sysayg/index.php (bien)

Solución: agregar "/" al final del BASE_URL en .env.

Aprendizaje: las URLs de Playwright siguen el estándar RFC 3986.

Estructura del .env:
BASE_URL=http://localhost/sysayg/
TEST_USER=admin
TEST_PASSWORD=***
INVALID_USER=usuario_que_no_existe_xyz
INVALID_PASSWORD=clave_incorrecta_123

Casos en decimo_test.spec.js:
1. Login exitoso con variables de entorno.
2. Login fallido con credenciales inválidas.
3. Verificación de baseURL con rutas relativas.

Comando: npx playwright test tests/decimo_test.spec.js --headed
Resultado: 4 passed.

Valor para el portfolio: manejo profesional de credenciales y múltiples entornos.