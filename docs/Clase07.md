# Clase 7 - Instalación de Playwright

## Instalación
```bash
npm install -D @playwright/test
```

Resultado:
```text
added 3 packages
audited 4 packages
found 0 vulnerabilities
```

## Cambios producidos

### node_modules
Contiene las librerías instaladas. No se modifica manualmente y normalmente no se sube a GitHub.

### package.json
Playwright quedó registrado en `devDependencies`:
```json
"devDependencies": {
  "@playwright/test": "^1.61.1"
}
```

### package-lock.json
Registra las versiones concretas de las dependencias instaladas.

## Navegadores de Playwright
La primera ejecución informó que faltaban los ejecutables de navegador. Se solucionó con:
```bash
npx playwright install
```

## Regla de Git
Se versionan:
- `package.json`
- `package-lock.json`

Normalmente no se versiona:
- `node_modules`

Otra computadora puede reconstruir las dependencias con:
```bash
npm install
```
