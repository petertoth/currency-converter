import { useQuery } from '@tanstack/react-query';

export interface CurrencyExchangeRate {
  country: string;
  currency: string;
  amount: number;
  code: string;
  rate: number;
}

const CENTRAL_BANK_EXCHANGE_RATE_URL = 'https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt'

function parseCentralBankExchangeRate(data: string): CurrencyExchangeRate[] {
  const lines = data.split('\n')

  // Skip the first two lines (header and date)
  const rates = lines.slice(2).map(line => {
    const [currency, code, amount, rate] = line.split('|')

    return {
      country: currency.trim(),
      currency: currency.split('[')[0].trim(),
      code: code.trim(),
      amount: Number(amount.trim()),
      rate: Number(rate.trim())
    } satisfies CurrencyExchangeRate
  })

  return rates;
}

async function fetchCentralBankExchangeRate() {
  const response = await fetch(CENTRAL_BANK_EXCHANGE_RATE_URL)
  const data = await response.text()

  const parsedData = parseCentralBankExchangeRate(data)

  return parsedData
}

export function useCentralBankExchangeRate() {
  return useQuery({
    queryKey: ['centralBankExchangeRate'],
    queryFn: () => fetchCentralBankExchangeRate(),
  })
}
