# Clase 8 - Primer test con Playwright

## Objetivo
Crear y ejecutar la primera prueba automatizada.

## Archivo
```text
tests/primer_test.spec.js
```

## Código
```javascript
const { test } = require('@playwright/test');

test('Abrir página', async ({ page }) => {

    await page.goto('https://www.google.com');

});
```

## Conceptos
- `test`: define una prueba.
- `page`: representa la página/pestaña controlada por Playwright.
- `page.goto()`: navega a una dirección.
- `await`: espera a que termine la acción.

## Ejecución
```bash
npx playwright test
```

Resultado:
```text
1 passed
```

La prueba se ejecutó en modo **headless**, por eso no se vio el navegador.

## Ejecución visible
```bash
npx playwright test --headed
```

Con `--headed` se pudo observar el navegador abriéndose y navegando a Google.

## Próximo objetivo
Reemplazar Google por el ERP local y comenzar el flujo:
```text
abrir página
→ escribir usuario
→ escribir contraseña
→ hacer clic en Entrar
→ verificar ingreso correcto
```
