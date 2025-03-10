import { test, expect } from '@playwright/test';

test('can convert currency for each available currency', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000/');

  // Get all available currencies from the table
  const currencyRows = await page.locator('table tbody tr').all();

  // Enter a fixed amount to convert

  // For each currency in the table, test the conversion
  for (let i = 0; i < currencyRows.length; i++) {
    // Get the currency code from the table
    const currencyCode = await currencyRows[i].locator('td:nth-child(3)').textContent();
    const currencyAmount = await currencyRows[i].locator('td:nth-child(4)').textContent();
    const currencyRate = await currencyRows[i].locator('td:nth-child(5)').textContent();

    if (!currencyCode || !currencyRate || !currencyAmount) continue;

    await page.getByTestId('amount-input').fill(currencyRate);

    // Select the currency in the dropdown
    const selectOptions = await page.getByTestId('target-currency-select').locator('option').all();

    // Find the option that contains this currency code
    for (const option of selectOptions) {
      const optionText = await option.textContent();
      if (optionText && optionText.includes(currencyCode.trim())) {
        await page.getByTestId('target-currency-select').selectOption({ label: optionText });
        break;
      }
    }

    // Verify the conversion result is displayed and is correct
    const convertedAmountInput = page.getByTestId('converted-amount-input');
    await expect(convertedAmountInput).toHaveValue(/\d+/);
    // Get the expected value from the table (should be the amount)
    const expectedValue = parseFloat(currencyAmount.trim());
    const actualValue = parseFloat(await convertedAmountInput.inputValue());

    // Verify the converted amount matches the amount from the table
    expect(Math.abs(actualValue - expectedValue)).toBeLessThan(0.01); // Allow small rounding differences
  }
});
