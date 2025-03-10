import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: inherit;
  font-size: 0.875rem;
  overflow: hidden;
`;

Table.displayName = "Table";

export const TableContainer = styled.div`
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  border: 1px solid var(--color-gray-200);
  width: 100%;
  overflow: auto;
  margin: 32px 0;
`;

TableContainer.displayName = "TableContainer";

export const Thead = styled.thead`
  border-radius: inherit;
  background-color: var(--color-gray-50);
`;

Thead.displayName = "Thead";

export const Tbody = styled.tbody`
  border-top: 1px solid var(--color-gray-300);
`;

Tbody.displayName = "Tbody";

export const Tr = styled.tr`
  border-bottom: 1px solid var(--color-gray-200);
  &:last-child {
    border-bottom: none;
  }
`;

Tr.displayName = "Tr";

export const Th = styled.th`
  padding: 12px 15px;
  text-align: start;
`;

Th.displayName = "Th";

export const Td = styled.td.withConfig({
  shouldForwardProp: (prop) => !["emphasized", "noWrap"].includes(prop),
})<{ emphasized?: string; noWrap?: string }>`
  padding: 12px 15px;
  text-align: start;

  ${(props) =>
    props.emphasized &&
    `
    color: var(--color-gray-900);
    font-weight: 500;
  `}

  ${(props) =>
    props.noWrap &&
    `
    white-space: nowrap;
  `}

  .icon {
    margin-right: 8px;
  }
`;

Td.displayName = "Td";
