// @ts-check
const { test, expect } = require('@playwright/test');

    test('First test', async (page)=>(
        await page.goto('http://www.world-art.ru/')
        await page.locator('main_page').click()
        )
    );


