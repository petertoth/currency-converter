import styled from 'styled-components'

export const Button = styled.button<{ fullWidth?: boolean }>`
  background-color: var(--color-gray-900);
  color: white;
  padding: 12px 15px;
  border: none;
  border-radius: 8px;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

Button.displayName = 'Button'