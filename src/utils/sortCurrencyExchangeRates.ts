import { CurrencyExchangeRate } from "../hooks/useCentalBankExchangeRates";

export const sortCurrencyExchangeRates = (rates: CurrencyExchangeRate[]) => {
  return [...rates].sort((a, b) => {
    const priorityCodes = ["EUR", "USD", "GBP", "CHF"];
    const aIndex = priorityCodes.indexOf(a.code);
    const bIndex = priorityCodes.indexOf(b.code);

    // If both are priority codes, sort by their order in priorityCodes
    if (aIndex !== -1 && bIndex !== -1) {
      return aIndex - bIndex;
    }

    // If only a is a priority code, it comes first
    if (aIndex !== -1) {
      return -1;
    }

    // If only b is a priority code, it comes first
    if (bIndex !== -1) {
      return 1;
    }

    // If neither are priority codes, maintain original order
    return 0;
  });
};
