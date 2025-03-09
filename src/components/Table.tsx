import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  border-radius: inherit;
  font-size: 0.875rem;
`;

export const TableContainer = styled.div`
  border-radius: 10px;
  background-color: #ffffff;
`;

export const Thead = styled.thead`
  border-radius: inherit;
`;

export const Tbody = styled.tbody`
  border-bottom: 1px solid #dddddd;
`;

export const Tr = styled.tr`
  border-bottom: 1px solid var(--color-gray-200);
`;

export const Th = styled.th`
  padding: 12px 15px;
  text-align: start;
`;

export const Td = styled.td<{ emphasized?: string }>`
  padding: 12px 15px;
  text-align: start;

  ${props => props.emphasized && `
    color: var(--color-gray-900);
    font-weight: 500;
  `}

  .icon {
    margin-right: 8px;
  }
`;


