import styled from "styled-components";

export const Input = styled.input`
  padding: 14px 16px;
  border: 1px solid var(--color-gray-300);
  border-radius: 8px;
  color: var(--color-foreground);
  background-color: white;
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  &:focus {
    outline: 1px solid var(--color-gray-900);
  }
`;

Input.displayName = "Input";

export const InputWithIcon = styled(Input)`
  padding-right: 112px;
  width: 100%;
`;

InputWithIcon.displayName = "InputWithIcon";

export const InputField = styled.div`
  position: relative;
`;

InputField.displayName = "InputField";

export const InputIcon = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  right: 0;
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
`;

InputIcon.displayName = "InputIcon";
