import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const CENTRAL_BANK_EXCHANGE_RATE_URL = 'https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/currency-exchange-rates': {
        target: CENTRAL_BANK_EXCHANGE_RATE_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/currency-exchange-rates/, ''),
      },
    },
  },
})
