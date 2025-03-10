import styled from "styled-components";

export const Button = styled.button<{ fullWidth?: boolean }>`
  background-color: var(--color-gray-900);
  color: white;
  padding: 15px 16px;
  border: none;
  border-radius: 8px;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  cursor: pointer;
  font-size: 16px;
  &:hover {
    opacity: 0.9;
  }
`;

Button.displayName = "Button";
