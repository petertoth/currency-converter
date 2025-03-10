import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { styled } from "styled-components";
import {
  CurrencyExchangeRatesTable,
  CurrencyExchangeRatesTableSkeleton,
} from "./components/CurrencyExchangeRatesTable";
import { CurrencyConverter } from "./components/CurrencyConverter";
import { useCentralBankExchangeRates } from "./hooks/useCentalBankExchangeRates";

const queryClient = new QueryClient();

function App() {
  const {
    data: currencyExchangeRates,
    isLoading,
    error,
  } = useCentralBankExchangeRates();

  return (
    <QueryClientProvider client={queryClient}>
      <AppGrid>
        <StickyContainer>
          {error && <ErrorMessage>Error: {error.message}</ErrorMessage>}
          {currencyExchangeRates && (
            <CurrencyConverter currencyExchangeRates={currencyExchangeRates} />
          )}
        </StickyContainer>

        {isLoading && <CurrencyExchangeRatesTableSkeleton />}
        {!isLoading && currencyExchangeRates && (
          <CurrencyExchangeRatesTable data={currencyExchangeRates} />
        )}
      </AppGrid>
    </QueryClientProvider>
  );
}

function AppWithProviders() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}

export default AppWithProviders;

const AppGrid = styled.div`
  display: grid;

  @media (min-width: 768px) {
    gap: 24px;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    gap: 48px;
    grid-template-columns: 3fr 5fr;
  }

  grid-template-columns: 1fr;
`;

const StickyContainer = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    padding-top: 20px;
    position: sticky;
    top: 0;
    height: 100vh;
  }
`;

const ErrorMessage = styled.div`
  color: var(--color-red-500);
`;
