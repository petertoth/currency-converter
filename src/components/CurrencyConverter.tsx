import { useState } from "react";
import { CurrencyExchangeRate } from "../hooks/useCentalBankExchangeRates";
import { InputField, InputIcon, InputWithIcon } from "./ui/Input";
import { SelectGhost } from "./ui/Select";
import { Flex } from "./ui/Flex";
import styled from "styled-components";
import { getCurrencyValue } from "../utils/getCurrencyValue";
import { Label } from "./ui/Label";
import { sortCurrencyExchangeRates } from "../utils/sortCurrencyExchangeRates";
import { getCurrencyEmoji } from "../utils/getCurrencyEmoji";

export interface CurrencyConverterProps {
  currencyExchangeRates: CurrencyExchangeRate[];
}

export const CurrencyConverter = ({
  currencyExchangeRates,
}: CurrencyConverterProps) => {
  const sortedCurrencyExchangeRates = sortCurrencyExchangeRates(
    currencyExchangeRates
  );

  const [amount, setAmount] = useState<string>("");
  const [convertedAmount, setConvertedAmount] = useState<string>("");
  const [targetCurrency, setTargetCurrency] = useState<string>(
    getCurrencyValue("USD")
  );

  const realAmount = parseFloat(amount) || 0;
  const realTargetCurrency = targetCurrency.split(" ")[1];

  // Helper function to validate decimal places
  const validateDecimalPlaces = (
    value: string,
    maxDecimalPlaces: number = 3
  ): boolean => {
    const decimalPart = value.includes(".") ? value.split(".")[1] : "";
    return decimalPart.length <= maxDecimalPlaces;
  };

  // Helper function to find the selected currency
  const findSelectedCurrency = (currencyCode: string) => {
    return currencyExchangeRates.find((rate) => rate.code === currencyCode);
  };

  // Helper function to format number to fixed decimal places
  const formatNumber = (value: number, decimalPlaces: number = 3): string => {
    return Number(value.toFixed(decimalPlaces)).toString();
  };

  // Helper function to clean number string to remove trailing decimal point or comma
  function cleanNumberString(numberString: string) {
    let newNumberString = numberString;

    // Only allow numbers, comma, and dot
    if (!/^[0-9.,]*$/.test(newNumberString)) {
      newNumberString = newNumberString.replace(/[^0-9.,]/g, '');
    }

    return newNumberString;
  }

  // Helper function to get numeric value for calculation, handling trailing decimal point
  function getNumericValue(value: string): number {
    // If the string ends with a decimal point, remove it for calculation
    const valueForCalculation = value.endsWith('.') || value.endsWith(',')
      ? value.slice(0, -1)
      : value;

    return parseFloat(valueForCalculation) || 0;
  }

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = cleanNumberString(e.target.value);

    if (!validateDecimalPlaces(newAmount)) {
      return;
    }

    setAmount(newAmount);

    if (newAmount && targetCurrency) {
      const selectedCurrency = findSelectedCurrency(realTargetCurrency);

      if (selectedCurrency) {
        const numericValue = getNumericValue(newAmount);
        const result =
          (numericValue / selectedCurrency.rate) *
          selectedCurrency.amount;
        setConvertedAmount(formatNumber(result));
      }
    } else {
      setConvertedAmount("");
    }
  };

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCurrency = e.target.value;
    setTargetCurrency(newCurrency);

    if (amount && newCurrency) {
      const currencyCode = newCurrency.split(" ")[1];
      const selectedCurrency = findSelectedCurrency(currencyCode);

      if (selectedCurrency) {
        // Calculate the converted amount based on the new currency
        const numericValue = getNumericValue(amount);
        const result =
          (numericValue / selectedCurrency.rate) *
          selectedCurrency.amount;
        setConvertedAmount(formatNumber(result));
      }
    }
  };

  const handleConvertedAmountChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newConvertedAmount = cleanNumberString(e.target.value);

    if (!validateDecimalPlaces(newConvertedAmount)) {
      return;
    }

    setConvertedAmount(newConvertedAmount);

    if (newConvertedAmount && targetCurrency) {
      const selectedCurrency = findSelectedCurrency(realTargetCurrency);

      if (selectedCurrency) {
        // Reverse conversion: from target currency to CZK
        const numericValue = getNumericValue(newConvertedAmount);
        const result =
          (numericValue * selectedCurrency.rate) /
          selectedCurrency.amount;
        setAmount(formatNumber(result));
      }
    } else {
      setAmount("");
    }
  };

  const shouldShowConversionResult =
    amount && convertedAmount && targetCurrency && !isNaN(realAmount);

  return (
    <Flex gap={12} direction="column">
      <h3>How much do you want to convert?</h3>

      <Flex gap={24} direction="column">
        <Flex gap={8} direction="column">
          <Label htmlFor="amount">Convert</Label>
          <InputField>
            <InputWithIcon
              id="amount"
              placeholder="0"
              value={amount}
              onChange={handleAmountChange}
              data-testid="amount-input"
            />
            <InputIcon style={{ paddingRight: 16, paddingLeft: 16 }}>
              <CurrencyDisplay>{getCurrencyEmoji("CZK")} CZK</CurrencyDisplay>
            </InputIcon>
          </InputField>
        </Flex>

        <Flex gap={8} direction="column">
          <Label htmlFor="targetCurrency">Currency</Label>
          <InputField>
            <InputWithIcon
              id="convertedAmount"
              placeholder="0"
              value={convertedAmount}
              onChange={handleConvertedAmountChange}
              data-testid="converted-amount-input"
            />
            <InputIcon>
              <SelectGhost
                value={targetCurrency}
                onChange={handleCurrencyChange}
                id="targetCurrency"
                style={{
                  width: 112,
                }}
                data-testid="target-currency-select"
              >
                {sortedCurrencyExchangeRates.map((rate) => (
                  <option key={rate.code} value={getCurrencyValue(rate.code)}>
                    {getCurrencyValue(rate.code)}
                  </option>
                ))}
              </SelectGhost>
            </InputIcon>
          </InputField>
        </Flex>
      </Flex>

      {shouldShowConversionResult && (
        <ConversionResult>
          <ConversionText>
            <span>
              {formatNumber(realAmount)} CZK {getCurrencyEmoji("CZK")}{" "}
            </span>
            <ConversionArrow>→</ConversionArrow>
            <span>
              {formatNumber(parseFloat(convertedAmount) || 0)} {realTargetCurrency}{" "}
              {getCurrencyEmoji(realTargetCurrency)}
            </span>
          </ConversionText>
        </ConversionResult>
      )}
    </Flex>
  );
};

const CurrencyDisplay = styled.p`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
`;

const ConversionResult = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ConversionText = styled.p`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.5;
`;

const ConversionArrow = styled.span`
  margin: 0 12px;
  color: var(--color-gray-500);
`;
