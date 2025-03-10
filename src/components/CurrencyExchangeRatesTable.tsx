import { CurrencyExchangeRate } from "../hooks/useCentalBankExchangeRates";
import { getCurrencyEmoji } from "../utils/getCurrencyEmoji";
import { sortCurrencyExchangeRates } from "../utils/sortCurrencyExchangeRates";
import { Skeleton } from './ui/Skeleton';
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

export const CurrencyExchangeRatesTableSkeleton = () => {
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
          {Array.from({ length: 20 }).map((_, index) => (
            <Tr key={index}>
              <Td>
                <Skeleton />
              </Td>
              <Td>
                <Skeleton />
              </Td>
              <Td>
                <Skeleton />
              </Td>
              <Td>
                <Skeleton />
              </Td>
              <Td>
                <Skeleton />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

CurrencyExchangeRatesTableSkeleton.displayName = "CurrencyExchangeRatesTableSkeleton";