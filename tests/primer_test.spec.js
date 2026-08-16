const { test } = require('@playwright/test');

test('Abrir página', async ({ page }) => {

    await page.goto('https://www.google.com');

});
