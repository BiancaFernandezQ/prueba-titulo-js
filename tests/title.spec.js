const {test, expect } = require('@playwright/test');

test('valida titulo exacto', async ({ page }) => {
    //abre la pagina example.com
    await page.goto('https://example.com/');

    await sleep(5000);
    
    // verificacion del titulo exacto
    await expect(page).toHaveTitle('Example Domain');
});

test('valida titulo con regex(contiene palabra)', async ({ page }) => {
    //abre la pagina example.com
    await page.goto('https://example.com/');
    
    await sleep(5000);

    // verificamos palabra /buscar_esta_palabra/
    await expect(page).toHaveTitle(/Example/);
});

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}