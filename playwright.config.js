// playwright configuraciones

/** @type{import('@playwright/test').PlaywrightTestConfig}*/

const config = {
    use:{
        screenshot: 'only-on-failure', //captura pantalla solo si falla el test
        trace: 'retain-on-failure',

    },
    projects: [
        //pruebas en diferentes navegadores
        {name: 'chromium', use: { browserName: 'chromium' } },
        // { name: 'firefox', use: { browserName: 'firefox' } },
        // { name: 'webkit', use: { browserName: 'webkit' } },
    ],
    
    testDir: 'tests',
    timeout: 30000,
    expect: {
        timeout: 5000
    },
};

module.exports = config;