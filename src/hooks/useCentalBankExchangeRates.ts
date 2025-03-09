import { useQuery } from '@tanstack/react-query';

export interface CurrencyExchangeRate {
  country: string;
  currency: string;
  amount: number;
  code: string;
  rate: number;
}

function parseCentralBankExchangeRates(data: string): CurrencyExchangeRate[] {
  // split by new line and filter out empty lines
  const lines = data.split('\n').filter(Boolean)

  // Skip the first two lines (header and date)
  const rates = lines.slice(2).map(line => {
    const [country, currency, amount, code, rate] = line.split('|')

    return {
      country,
      currency,
      amount: Number(amount.trim()),
      code,
      rate: Number(rate.trim())
    } satisfies CurrencyExchangeRate
  })

  return rates;
}

async function fetchCentralBankExchangeRates() {
  const response = await fetch('/api/currency-exchange-rates')
  const data = await response.text()

  const parsedData = parseCentralBankExchangeRates(data)

  return parsedData
}

export function useCentralBankExchangeRates() {
  return useQuery({
    queryKey: ['centralBankExchangeRate'],
    queryFn: fetchCentralBankExchangeRates,
  })
}
