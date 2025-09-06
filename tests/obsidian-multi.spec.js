const{test, expect} = require('@playwright/test');

//diccionario para poner variables
const casos = [
    {name:"Caso 1", url: 'https://obsidian.md/', esperado: 'Obsidian - Sharpen your thinking'},
    {name:"Caso 2", url: 'https://obsidian.md/', esperado: /Sharpen/}, //expresión regular
    {name:"Caso 3", url: 'https://obsidian.md/', esperado: /thinking/},
    {name:"Caso 4", url: 'https://obsidian.md/', esperado: /Obsidian/}
];

for (const{name, url, esperado} of casos) {

    test(`valida titulo correcto en el ${name}`, async ({ page }) => {
        //abre la pagina obsidian.md
        await page.goto(url);

        await sleep(2000);
        
        // verificacion del titulo <title> </title> de la pagina
        await expect(page).toHaveTitle(esperado);
    });
}

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
