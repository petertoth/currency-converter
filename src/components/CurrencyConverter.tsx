import { useState } from "react";
import { CurrencyExchangeRate } from "../hooks/useCentalBankExchangeRates";
import { Button } from "./Button";
import { Input } from "./Input";
import { Select } from "./Select";
import { Flex } from './Flex';
import { getCurrencyValue } from '../utils/getCurrencyValue';

export interface CurrencyConverterProps {
  currencyExchangeRates: CurrencyExchangeRate[];
}

export const CurrencyConverter = ({
  currencyExchangeRates,
}: CurrencyConverterProps) => {
  const [amount, setAmount] = useState<string>("");
  const [targetCurrency, setTargetCurrency] = useState<string>(getCurrencyValue("USD"));
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);

  const realAmount = parseFloat(amount);
  const realTargetCurrency = targetCurrency.split(" ")[1];


  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTargetCurrency(e.target.value);
  };

  const handleConvert = () => {
    const selectedCurrency = currencyExchangeRates.find(
      (rate) => rate.code === realTargetCurrency
    );

    if (selectedCurrency) {
      // Convert from CZK to target currency
      // Formula: amount in CZK / rate * amount (from the exchange rate data)
      const result =
        (realAmount / selectedCurrency.rate) * selectedCurrency.amount;
      setConvertedAmount(result);
    }
  };

  return (
    <Flex gap={16} direction="column">
      <h3>How much do you want to convert?</h3>

      <Flex gap={16} direction="column">
        <Input
          placeholder="0"
          type="number"
          value={amount}
          onChange={handleAmountChange}
        />

        <Select value={targetCurrency} onChange={handleCurrencyChange}>
          <option value="">Select currency</option>
          {currencyExchangeRates.map((rate) => (
            <option key={rate.code} value={getCurrencyValue(rate.code)}>
              {getCurrencyValue(rate.code)}
            </option>
          ))}
        </Select>
      </Flex>
      <Button fullWidth onClick={handleConvert}>
        Convert
      </Button>
      {convertedAmount !== null && targetCurrency && (
        <div>
          <p>
            {amount} CZK = {convertedAmount.toFixed(2)} {targetCurrency}
          </p>
        </div>
      )}
    </Flex>
  );
};
