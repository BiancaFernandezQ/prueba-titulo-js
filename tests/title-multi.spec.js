const{test, expect} = require('@playwright/test');

const casos = [
    {name:"Caso 1", url: 'https://example.com/', esperado: 'Example Domain'},
    {name:"Caso 2", url: 'https://example.com/', esperado: /Example/}, //expresión regular
    {name:"Caso 3", url: 'https://www.wikipedia.org/', esperado: 'Wikipedia'},
];

for (const{name, url, esperado} of casos) {

    test(`valida titulo correcto en ${name}`, async ({ page }) => {
        //abre la pagina example.com
        await page.goto(url);

        await sleep(3000);
        
        // verificacion del titulo exacto
        await expect(page).toHaveTitle(esperado);
    });
}

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}