import { CurrencyExchangeRate } from "../hooks/useCentalBankExchangeRates";
import { getCurrencyEmoji } from "../utils/getCurrencyEmoji";
import { Table, Thead, Tr, Th, Tbody, Td, TableContainer } from "./Table";

export interface CurrencyExchangeRatesTableProps {
  data: CurrencyExchangeRate[];
}

export const CurrencyExchangeRatesTable = ({
  data,
}: CurrencyExchangeRatesTableProps) => {
  // Sort data to put EMU (EUR), USD, GBP, CHF first and then the rest
  const sortedData = [...data].sort((a, b) => {
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

  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>Country</Th>
            <Th>Currency</Th>
            <Th>Code</Th>
            <Th>Amount(CZK)</Th>
            <Th>Rate(CZK)</Th>
          </Tr>
        </Thead>
        <Tbody>
          {sortedData.map((item, index) => (
            <Tr key={index}>
              <Td emphasized="true">
                <span className="icon">{getCurrencyEmoji(item.code)}</span>
                {item.country}
              </Td>
              <Td>{item.currency}</Td>
              <Td>{item.code}</Td>
              <Td style={{ textAlign: "center" }}>{item.amount}</Td>
              <Td>{item.rate}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
