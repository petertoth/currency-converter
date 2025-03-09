import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useCentralBankExchangeRates } from "./hooks/useCentalBankExchangeRates";
import { CurrencyExchangeRatesTable } from "./components/CurrencyExchangeRatesTable";
import { CurrencyConverter } from "./components/CurrencyConverter";
import { ThemeProvider } from "styled-components";
import { Flex } from "./components/Flex";

const queryClient = new QueryClient();

function App() {
  const { data, isLoading, error } = useCentralBankExchangeRates();

  return (
    <QueryClientProvider client={queryClient}>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}

      {data && (
        <Flex gap={40} direction="row">
          <Flex flexGrow={1}>
            <div style={{ position: "sticky", top: 0, height: "100vh" }}>
              <CurrencyConverter currencyExchangeRates={data} />
            </div>
          </Flex>
          <Flex flexGrow={1}>
            <CurrencyExchangeRatesTable data={data} />
          </Flex>
        </Flex>
      )}
    </QueryClientProvider>
  );
}

function AppWithProviders() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        theme={{
          colors: {
            background: "oklch(0.967 0.003 264.542)",
          },
        }}
      >
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default AppWithProviders;
