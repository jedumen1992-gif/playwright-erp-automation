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
11. Las ejecuciones en modo `headed` deben incluir pausas para que el alumno pueda observar visualmente lo que Playwright está haciendo.
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

```text
playwright-erp-automation
```

Remoto:

```text
https://github.com/jedumen1992-gif/playwright-erp-automation
```

Local:

```text
C:\Proyectos\playwright-erp-automation
```

## Estado actual

Herramientas instaladas:

- Git
- Node.js
- npm
- Visual Studio Code
- Playwright Test
- Navegadores de Playwright

## Estructura actual aproximada

```text
playwright-erp-automation/

├── docs/
│   ├── BOOTCAMP_MASTER.md
│   ├── Clase01.md
│   ├── Clase02.md
│   ├── Clase03.md
│   ├── Clase04.md
│   ├── Clase05.md
│   ├── Clase06.md
│   ├── Clase07.md
│   └── Clase08.md
│
├── node_modules/
│
├── test-results/
│
├── tests/
│   ├── primer_test.spec.js
│   ├── segundo_test.spec.js
│   ├── tercer_test.spec.js
│   ├── cuarto_test.spec.js
│   ├── quinto_test.spec.js
│   └── sexto_test.spec.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Conocimientos adquiridos

### QA Manual vs Automation

Principio central:

> El QA decide qué se debe probar; Playwright es la herramienta que ejecuta los pasos.

La automatización no reemplaza el pensamiento de QA.

Primero se define qué comportamiento se quiere validar y después se decide cómo automatizarlo.

---

### Git

Comando conocido:

```bash
git --version
```

También se trabajó con:

```bash
git status
git add
git commit
git push
```

Se aprendió el flujo básico:

```text
Modificar archivos
      ↓
git status
      ↓
git add
      ↓
git commit
      ↓
git push
      ↓
git status
```

Se verificó que después de subir los cambios aparezca:

```text
nothing to commit, working tree clean
```

---

### GitHub

Repositorio:

```text
https://github.com/jedumen1992-gif/playwright-erp-automation
```

Se aprendió a:

- clonar un repositorio;
- trabajar localmente;
- realizar commits;
- subir cambios con `git push`;
- comprobar los cambios directamente en GitHub.

---

### Node.js

Node.js permite ejecutar JavaScript fuera del navegador.

---

### npm

npm administra paquetes y dependencias de Node.js.

---

### package.json

Describe el proyecto y sus dependencias.

---

### package-lock.json

Registra las versiones concretas de las dependencias instaladas.

---

### node_modules

Contiene las librerías instaladas.

Normalmente no se sube a GitHub.

Por eso se agregó:

```text
node_modules/
```

al archivo:

```text
.gitignore
```

---

## Instalación de Playwright

Se instaló Playwright Test mediante:

```bash
npm install -D @playwright/test
```

Después se instalaron los navegadores:

```bash
npx playwright install
```

## Error documentado

La primera ejecución de Playwright falló porque faltaban los ejecutables de los navegadores.

Playwright indicó:

```bash
npx playwright install
```

Después de instalar los navegadores, el test pasó correctamente.

Este error quedó documentado como parte del aprendizaje real.

---

# Conceptos de Playwright aprendidos

## `test`

Define una prueba automatizada.

Ejemplo:

```javascript
test('Abrir página', async ({ page }) => {
});
```

---

## `page`

Representa la página o pestaña que Playwright controla.

---

## `page.goto()`

Permite navegar hacia una dirección.

Ejemplo:

```javascript
await page.goto('https://www.google.com');
```

En el ERP:

```javascript
await page.goto('http://localhost/sysayg/');
```

---

## `await`

Indica que Playwright debe esperar a que una operación termine antes de continuar.

Ejemplo:

```javascript
await page.goto('http://localhost/sysayg/');
```

---

## Modo headless

El navegador se ejecuta sin mostrar visualmente la ventana.

Ejemplo:

```bash
npx playwright test
```

---

## Modo headed

Permite observar el navegador mientras se ejecuta la prueba.

Ejemplo:

```bash
npx playwright test --headed
```

Durante el bootcamp se utiliza frecuentemente `--headed` para poder observar visualmente cada ejecución.

Las pruebas deben incluir pausas cuando sea necesario para que el alumno pueda ver lo que ocurre.

Ejemplo:

```javascript
await page.waitForTimeout(5000);
```

---

# Locators

Un locator permite identificar un elemento dentro de una página.

Ejemplo:

```javascript
page.locator('input[placeholder="Ingrese la contraseña"]');
```

También se aprendió a utilizar:

```javascript
page.getByText('Inicio');
```

y:

```javascript
page.getByRole('link', {
    name: 'CONFIGURACIONES'
});
```

La elección del locator debe hacerse pensando en estabilidad y legibilidad.

---

# Selectores utilizados

Durante las pruebas se utilizaron selectores basados en atributos reales del ERP.

### Usuario

```javascript
page.locator('input[placeholder="Ingrese el nombre de usuario"]');
```

### Contraseña

```javascript
page.locator('input[placeholder="Ingrese la contraseña"]');
```

### Botón de inicio de sesión

```javascript
page.locator('button[type="submit"]');
```

Estos selectores fueron comprobados mediante ejecución real.

---

# `fill()`

Permite completar un campo.

Ejemplo:

```javascript
await usuario.fill('admin');
```

Ejemplo de contraseña:

```javascript
await contraseña.fill('123');
```

---

# `click()`

Permite hacer clic sobre un elemento.

Ejemplo:

```javascript
await botonLogin.click();
```

---

# Assertions con `expect`

Las assertions permiten comprobar que una condición esperada realmente se cumple.

Ejemplo:

```javascript
await expect(usuario).toBeVisible();
```

---

## `toBeVisible()`

Comprueba que un elemento sea visible.

Ejemplo:

```javascript
await expect(configuraciones).toBeVisible();
```

---

## `toHaveURL()`

Permite comprobar que la página llegó a una URL esperada.

Ejemplo utilizado en el login del ERP:

```javascript
await expect(page).toHaveURL(/menu\.php/);
```

---

# Filosofía de selectores

Se debe preferir identificar elementos mediante información estable.

Ejemplos:

```text
Texto visible
Atributos específicos
Placeholder
Role
data-testid
```

Ejemplo de atributo estable recomendado:

```html
data-testid="Guardar-producto"
```

Se debe evitar depender únicamente de:

- colores;
- posiciones;
- estilos;
- clases CSS que puedan cambiar;
- estructura visual que no tenga significado funcional.

Todavía queda pendiente profundizar en selectores especialmente robustos y en el uso de `data-testid`.

---

# Flujo de login del ERP

El flujo automatizado actualmente es:

```text
1. Abrir la página del ERP.
2. Esperar para poder observar la pantalla.
3. Buscar el campo usuario.
4. Verificar que el usuario sea visible.
5. Escribir usuario.
6. Buscar el campo contraseña.
7. Verificar que la contraseña sea visible.
8. Escribir contraseña.
9. Buscar el botón Iniciar Sesión.
10. Verificar que sea visible.
11. Hacer clic.
12. Verificar que la URL cambió a menu.php.
13. Verificar que aparece "Inicio".
```

Credenciales utilizadas durante el ejercicio local:

```text
Usuario: admin
Contraseña: 123
```

Estas credenciales corresponden al entorno local de práctica.

---

# Validación real del login

El login real del ERP fue automatizado en:

```text
tests/quinto_test.spec.js
```

La prueba verifica:

```text
Login
  ↓
Usuario
  ↓
Contraseña
  ↓
Iniciar Sesión
  ↓
menu.php
  ↓
Inicio visible
```

La prueba fue ejecutada correctamente en modo headed.

Resultado:

```text
1 passed
```

---

# Test 1 - Abrir página

Archivo:

```text
tests/primer_test.spec.js
```

Objetivo:

Comprobar que Playwright puede abrir una página.

Código:

```javascript
const { test } = require('@playwright/test');

test('Abrir página', async ({ page }) => {

    await page.goto('https://www.google.com');

});
```

Resultado:

```text
1 passed
```

---

# Test 2 - Buscar elemento

Archivo:

```text
tests/segundo_test.spec.js
```

Objetivo:

Practicar:

- localización de elementos;
- `fill()`;
- `press()`;
- assertions;
- observación de resultados.

Se trabajó inicialmente con Google.

Durante el ejercicio apareció una comprobación de tráfico inusual de Google.

Esto permitió documentar un comportamiento real que puede afectar pruebas automatizadas cuando se utilizan sitios externos.

El ejercicio finalmente permitió comprobar correctamente la interacción con el elemento.

---

# Test 3 - Completar formulario

Archivo:

```text
tests/tercer_test.spec.js
```

Objetivo:

Practicar la interacción con campos de formulario.

Se creó una página de prueba local mediante:

```javascript
page.setContent()
```

El formulario contiene:

```text
Nombre
Correo
```

Se utilizaron:

```javascript
getByLabel()
fill()
expect()
toHaveValue()
```

Ejemplo:

```javascript
const nombre = page.getByLabel('Nombre');
const correo = page.getByLabel('Correo');

await nombre.fill('José');
await correo.fill('jose@gmail.com');

await expect(nombre).toHaveValue('José');
await expect(correo).toHaveValue('jose@gmail.com');
```

Resultado:

```text
1 passed
```

---

# Test 4 - Buscar elemento por texto

Archivo:

```text
tests/cuarto_test.spec.js
```

Objetivo:

Aprender a localizar un elemento utilizando texto visible.

Se creó una página local de prueba:

```html
<h1>Sistema ERP</h1>
<button>Iniciar sesión</button>
```

Se utilizó:

```javascript
page.getByText('Iniciar sesión')
```

Y se verificó:

```javascript
await expect(boton).toBeVisible();
```

Resultado:

```text
1 passed
```

---

# Test 5 - Login real del ERP

Archivo:

```text
tests/quinto_test.spec.js
```

Objetivo:

Automatizar el login real del ERP local.

Flujo:

```text
Abrir ERP
   ↓
Buscar usuario
   ↓
Escribir admin
   ↓
Buscar contraseña
   ↓
Escribir 123
   ↓
Buscar botón
   ↓
Clic en Iniciar Sesión
   ↓
Verificar menu.php
   ↓
Verificar Inicio
```

Selectors comprobados:

```javascript
const usuario = page.locator(
    'input[placeholder="Ingrese el nombre de usuario"]'
);

const contraseña = page.locator(
    'input[placeholder="Ingrese la contraseña"]'
);

const botonLogin = page.locator(
    'button[type="submit"]'
);
```

Assertions:

```javascript
await expect(usuario).toBeVisible();

await expect(contraseña).toBeVisible();

await expect(botonLogin).toBeVisible();

await expect(page).toHaveURL(/menu\.php/);

await expect(page.getByText('Inicio')).toBeVisible();
```

Resultado:

```text
1 passed
```

Este test constituye el primer flujo completo y real del ERP dentro del proyecto.

---

# Test 6 - Localizar Configuraciones

Archivo:

```text
tests/sexto_test.spec.js
```

Objetivo:

Practicar un locator mediante `getByRole()` sobre el menú real del ERP.

Después de realizar el login, se localiza:

```text
CONFIGURACIONES
```

mediante:

```javascript
const configuraciones = page.getByRole('link', {
    name: 'CONFIGURACIONES'
});
```

Y se comprueba:

```javascript
await expect(configuraciones).toBeVisible();
```

Resultado:

```text
1 passed
```

## Aprendizaje importante del Test 6

Se comprobó que no es correcto asumir que una URL interna como:

```text
http://localhost/sysayg/menu.php
```

puede abrirse directamente sin sesión.

Cuando se intentó hacerlo, el ERP mostró errores PHP relacionados con la falta de sesión.

Por lo tanto, el flujo correcto para este ejercicio fue:

```text
Abrir login
   ↓
Completar login
   ↓
Entrar al menú
   ↓
Localizar CONFIGURACIONES
```

También se comprobó que los selectores del login deben mantenerse exactamente como fueron validados en el Test 5.

---

# Errores reales documentados

## Error 1 - Navegadores de Playwright

Problema:

Playwright no tenía instalados los ejecutables del navegador.

Solución:

```bash
npx playwright install
```

---

## Error 2 - Google detectó tráfico inusual

Durante una prueba sobre Google apareció una comprobación de que el tráfico provenía de un posible robot.

Aprendizaje:

Los sitios externos pueden introducir mecanismos que afectan las pruebas automatizadas.

Por eso, para el proyecto profesional se priorizará el ERP local y aplicaciones bajo nuestro control.

---

## Error 3 - Selector incorrecto durante Test 6

Durante el desarrollo del Test 6 se utilizó inicialmente:

```javascript
input[name="usuario"]
```

Ese selector no encontraba el campo.

El Test 5 ya había demostrado que el selector correcto era:

```javascript
input[placeholder="Ingrese el nombre de usuario"]
```

Se volvió al selector comprobado y el Test 6 pasó correctamente.

Aprendizaje:

> No modificar una solución que ya fue comprobada sin una razón concreta.

Ante un error, primero se debe comparar con el flujo que ya funciona.

---

## Error 4 - Acceso directo a menu.php

Se intentó abrir directamente:

```text
http://localhost/sysayg/menu.php
```

sin realizar login.

El ERP mostró errores PHP y no cargó correctamente el menú.

Aprendizaje:

El menú depende de una sesión autenticada.

La automatización debe respetar las precondiciones del sistema.

---

# Git y versionado del proyecto

Los avances de los Tests 1 a 6 fueron guardados mediante Git.

Se realizaron commits y `push` al repositorio remoto.

El estado del repositorio fue comprobado mediante:

```bash
git status
```

Y se obtuvo:

```text
nothing to commit, working tree clean
```

El Test 6 también fue enviado correctamente a GitHub.

---

# Roadmap

## Completado

- [x] Conceptos de QA Automation
- [x] QA Manual vs Automation
- [x] Git
- [x] GitHub
- [x] Clonado del repositorio
- [x] Node.js
- [x] npm
- [x] package.json
- [x] package-lock.json
- [x] node_modules
- [x] .gitignore
- [x] Instalación de Playwright
- [x] Instalación de navegadores
- [x] Primer test
- [x] Headless
- [x] Headed
- [x] Locators básicos
- [x] Buscar elementos por texto
- [x] `getByText()`
- [x] `getByLabel()`
- [x] `getByRole()`
- [x] `fill()`
- [x] `click()`
- [x] `press()`
- [x] Assertions con `expect`
- [x] `toBeVisible()`
- [x] `toHaveValue()`
- [x] `toHaveURL()`
- [x] Login real del ERP
- [x] Verificación del menú principal
- [x] Primer locator aplicado al menú real del ERP
- [x] Git add / commit / push de los tests
- [x] Documentación de errores reales

## Próximos pasos

- [ ] Documentar/ajustar configuración de Playwright
- [ ] Selectores estables y robustos
- [ ] `data-testid`
- [ ] Mejorar la estrategia de locators
- [ ] Casos positivos y negativos
- [ ] Login inválido
- [ ] Validación de mensajes de error
- [ ] Reutilización del login
- [ ] Fixtures
- [ ] Page Object Model
- [ ] Datos de prueba
- [ ] Capturas y evidencias
- [ ] Reportes
- [ ] Organización profesional
- [ ] Automatización de módulos del ERP
- [ ] Pruebas CRUD
- [ ] Pruebas de permisos
- [ ] Proyecto final para portfolio

---

# Punto exacto de continuación

Los Tests 1 a 6 están funcionando y documentados.

El proyecto ya pasó de ejercicios simples de Playwright a una primera automatización real sobre el ERP.

El último ejercicio completado fue:

```text
Test 6 - Localizar Configuraciones
```

Se utilizó:

```javascript
page.getByRole('link', {
    name: 'CONFIGURACIONES'
});
```

y:

```javascript
await expect(configuraciones).toBeVisible();
```

## Próximo objetivo

El siguiente objetivo será continuar profundizando en **selectores estables y robustos**.

Después se avanzará hacia:

```text
Selectores robustos
        ↓
Casos positivos y negativos
        ↓
Reutilización del login
        ↓
Fixtures
        ↓
Page Object Model
        ↓
Datos de prueba
        ↓
Automatización de módulos del ERP
        ↓
Reportes y evidencias
        ↓
Proyecto final de portfolio
```

No se debe volver a instalar Git, Node.js, npm ni Playwright salvo que el alumno lo solicite.

No se debe repetir un concepto que ya fue completado, salvo que sea necesario para comprender un concepto nuevo.

Cuando un test ya funciona, se debe tomar como referencia antes de realizar cambios en pruebas posteriores.

Las ejecuciones en modo `headed` deben mantener pausas suficientes para que el alumno pueda observar la ejecución en pantalla.
