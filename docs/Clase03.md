# Clase 3 - Cómo piensa un QA

## Buscar por texto

Si Playwright busca:

``` javascript
await page.click("Entrar");
```

y el botón cambia a **Ingresar**, la prueba falla porque ya no encuentra
ese texto.

## data-testid

``` html
<button data-testid="btn-login">Ingresar</button>
```

Si Playwright busca el `data-testid`, la prueba seguirá funcionando
aunque cambie el texto.

## Nuevo concepto

-   **Autenticación:** comprobar quién es el usuario.
-   **Autorización:** comprobar qué puede hacer ese usuario.

## Pensar como QA

No alcanza con iniciar sesión.

También hay que verificar:

-   Que aparezca el menú principal.
-   Que el usuario vea únicamente los módulos permitidos según sus
    permisos.

## Objetivo del proyecto

Construir un portafolio profesional en GitHub usando un ERP real
desarrollado en PHP.

Cada concepto aprendido será aplicado al ERP y documentado.
