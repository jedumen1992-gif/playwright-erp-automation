# Clase 2 - Primeros comandos

## Términos nuevos

-   **URL:** dirección de una página web.
-   **await:** esperar a que una acción termine antes de continuar.

## Primer comando

``` javascript
await page.goto("http://localhost/sistema");
```

Abre la página del sistema.

## Segundo comando

``` javascript
await page.fill("#usuario", "juan");
```

Completa el campo usuario.

## Tercer comando

``` javascript
await page.fill("#password", "123456");
```

Completa el campo contraseña.

## Cuarto comando

``` javascript
await page.click("Entrar");
```

Hace clic en el botón.

## Idea importante

`goto()` abre la página. `fill()` escribe. `click()` hace clic.

Cada comando cumple una única función.
