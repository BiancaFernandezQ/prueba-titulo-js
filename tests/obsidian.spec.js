const {test, expect } = require('@playwright/test'); //sirve para importar las funciones de test (definir caso de prueba) y expect (afirmavión o verificación)

test('valida titulo exacto en la pagina', async ({ page }) => {
    //abre la pagina obsidian.md
    await page.goto('https://obsidian.md/');

    await sleep(2000);
    
    // verificacion del titulo exacto
    await expect(page).toHaveTitle('Obsidian - Sharpen your thinking');  //verifica el titulo de la pestaña del navegador <title> </title>
});

test('valida titulo con regex(que contiene palabra)', async ({ page }) => {
    //abre la pagina obsidian.md
    await page.goto('https://obsidian.md/');
    
    await sleep(2000);

    // verificamos palabra /buscar_esta_palabra/
    await expect(page).toHaveTitle(/thinking/); //expresión regular
});

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
