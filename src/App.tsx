import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useCentralBankExchangeRate } from './hooks/useCentalBankExchangeRate'

const queryClient = new QueryClient()

function App() {
  const { data, isLoading, error } = useCentralBankExchangeRate()

  console.log({ data, isLoading, error })

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Currency Exchange</h1>
      <h2>Peter Toth x Momence</h2>
    </QueryClientProvider>
  )
}

function AppWithProviders() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  )
}

export default AppWithProviders
