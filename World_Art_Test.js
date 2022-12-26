// @ts-check

// npx playwright test  - Запуск теста, npx playwright show-report - репорт,
// npg playwright test --headed  - открыть в браузере.
const { test, expect } = require('@playwright/test');

    test('First test', async ({page})=> {
        await page.goto('http://www.world-art.ru/')
        await page.locator('main_page').click()
    });


