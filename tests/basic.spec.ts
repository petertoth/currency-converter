import { test, expect } from '@playwright/test';

test('has currency converter and table', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000/');

  // Expect the page to have the currency converter heading
  await expect(page.getByRole('heading', { name: 'How much do you want to convert?' })).toBeVisible();

  // Expect the page to have a currency input field
  await expect(page.getByTestId('amount-input')).toBeVisible();
  await expect(page.getByTestId('converted-amount-input')).toBeVisible();
  await expect(page.getByTestId('target-currency-select')).toBeVisible();

  // Expect the page to have a currency exchange rates table
  const table = page.locator('table');
  await expect(table).toBeVisible();
});

test('can convert currency', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000/');

  // Enter an amount to convert
  await page.getByTestId('amount-input').fill('100');

  // Select a target currency
  await page.getByTestId('target-currency-select').selectOption({ index: 1 });

  // Verify the conversion result is displayed
  await expect(page.getByTestId('converted-amount-input')).toHaveValue(/\d+/);
});
