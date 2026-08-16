# BOOTCAMP MASTER - QA Automation con Playwright

## Propósito
Este archivo es la memoria principal del bootcamp. Debe permitir continuar el proyecto aunque el alumno cambie de cuenta de ChatGPT o pase mucho tiempo sin estudiar.

## Perfil del alumno
El alumno viene principalmente de QA Manual y está realizando la transición hacia QA Automation. No se debe asumir conocimiento técnico avanzado.

## Metodología
1. Explicar cada término técnico antes de asumir que se conoce.
2. Avanzar lento pero seguro.
3. Dar ejemplos concretos y no ejercicios innecesariamente extensos.
4. Explicar el porqué de cada comando.
5. No limitarse a copiar código.
6. Mantener el pensamiento de QA: primero decidir qué probar y después automatizar.
7. Documentar errores reales.
8. Mantener actualizadas las clases y este archivo.

## Objetivo profesional
Construir un portafolio profesional de QA Automation con Playwright sobre un ERP desarrollado en PHP.

El portafolio debe demostrar pensamiento de QA, automatización, organización, Git/GitHub, Node.js, selectores robustos, Page Object Model, fixtures, reportes y mantenimiento.

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

Estructura aproximada:
```text
playwright-erp-automation/
├── docs/
├── node_modules/
├── tests/
│   └── primer_test.spec.js
├── package.json
├── package-lock.json
└── README.md
```

## Conocimientos adquiridos

### QA Manual vs Automation
Principio central:
> El QA decide qué se debe probar; Playwright es la herramienta que ejecuta los pasos.

### Git
```bash
git --version
```

### GitHub
```bash
git clone https://github.com/jedumen1992-gif/playwright-erp-automation.git
```

### Node.js
Ejecuta JavaScript fuera del navegador.

### npm
Administra paquetes de Node.js.

### package.json
Describe el proyecto y sus dependencias.

### package-lock.json
Registra las versiones concretas instaladas.

### node_modules
Contiene las librerías instaladas y normalmente no se sube a GitHub.

## Instalación de Playwright
```bash
npm install -D @playwright/test
```

Después:
```bash
npx playwright install
```

## Primer test
Archivo:
```text
tests/primer_test.spec.js
```

Código actual:
```javascript
const { test } = require('@playwright/test');

test('Abrir página', async ({ page }) => {
    await page.goto('https://www.google.com');
});
```

Ejecución:
```bash
npx playwright test
```

Resultado:
```text
1 passed
```

Ejecución visible:
```bash
npx playwright test --headed
```

El navegador se observó funcionando correctamente.

## Error documentado
La primera ejecución falló porque faltaban los ejecutables del navegador. Playwright indicó:
```bash
npx playwright install
```
Después de instalar los navegadores, el test pasó.

## Conceptos de Playwright aprendidos
- `test`
- `page`
- `page.goto()`
- `await`
- modo `headless`
- modo `headed`

## Flujo de login que queremos automatizar
```text
1. Abrir la página.
2. Escribir usuario.
3. Escribir contraseña.
4. Hacer clic en Entrar.
5. Verificar que ingresó correctamente.
```

La validación final deberá comprobar que aparece el menú principal y que el usuario puede acceder a los módulos correspondientes a sus permisos.

## Filosofía de selectores
Se debe preferir identificar elementos mediante información estable, por ejemplo texto visible o atributos específicos como:
```html
data-testid="Guardar-producto"
```
Evitar depender únicamente de colores, posiciones o estilos que pueden cambiar.

## Roadmap

### Completado
- [x] Conceptos de QA Automation
- [x] Git
- [x] GitHub
- [x] Clonado del repositorio
- [x] Node.js
- [x] npm
- [x] package.json
- [x] package-lock.json
- [x] node_modules
- [x] Instalación de Playwright
- [x] Instalación de navegadores
- [x] Primer test
- [x] Headless
- [x] Headed

### Próximos pasos
- [ ] Documentar/ajustar configuración de Playwright
- [ ] Locators
- [ ] Buscar elementos por texto
- [ ] Selectores estables
- [ ] `fill()`
- [ ] `click()`
- [ ] Assertions con `expect`
- [ ] Login real del ERP
- [ ] Casos positivos y negativos
- [ ] Page Object Model
- [ ] Fixtures
- [ ] Datos de prueba
- [ ] Capturas y evidencias
- [ ] Reportes
- [ ] Organización profesional
- [ ] Automatización de módulos del ERP
- [ ] Proyecto final para portfolio

## Punto exacto de continuación
El primer test de Playwright ya funciona.

El siguiente objetivo es reemplazar:
```javascript
await page.goto('https://www.google.com');
```
por la dirección del ERP local y comenzar a identificar los elementos de la pantalla de login.

No volver a instalar Git, Node.js, npm ni Playwright salvo que el alumno lo solicite.
