import { CurrencyExchangeRate } from "../hooks/useCentalBankExchangeRates";
import { getCurrencyEmoji } from "../utils/getCurrencyEmoji";
import { sortCurrencyExchangeRates } from "../utils/sortCurrencyExchangeRates";
import { Table, Thead, Tr, Th, Tbody, Td, TableContainer } from "./ui/Table";

export interface CurrencyExchangeRatesTableProps {
  data: CurrencyExchangeRate[];
}

export const CurrencyExchangeRatesTable = ({
  data,
}: CurrencyExchangeRatesTableProps) => {
  // Sort data to put EMU (EUR), USD, GBP, CHF first and then the rest
  const sortedData = sortCurrencyExchangeRates(data);

  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>Country</Th>
            <Th>Currency</Th>
            <Th>Code</Th>
            <Th>Amount</Th>
            <Th>Rate(CZK)</Th>
          </Tr>
        </Thead>
        <Tbody>
          {sortedData.map((item, index) => (
            <Tr key={index}>
              <Td emphasized="true" noWrap="true">
                <span className="icon">{getCurrencyEmoji(item.code)}</span>
                {item.country}
              </Td>
              <Td>{item.currency}</Td>
              <Td>{item.code}</Td>
              <Td>{item.amount}</Td>
              <Td>{item.rate}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
