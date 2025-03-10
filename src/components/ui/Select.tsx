import styled from "styled-components";

export const Select = styled.select`
  width: 100%;
  padding: 12px 14px;
  border: 1px solid var(--color-gray-300);
  border-radius: 8px;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-foreground);
  appearance: none;
  background-color: white;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAMAAACtdX32AAAAdVBMVEUAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhMdQaAAAAJ3RSTlMAAAECAwQGBwsOFBwkJTg5RUZ4eYCHkJefpaytrsXGy8zW3+Do8vNn0bsyAAAAYElEQVR42tXROwJDQAAA0Ymw1p9kiT+L5P5HVEi3qJn2lcPjtIuzUIJ/rhIGy762N3XaThqMN1ZPALsZPEzG1x8LrFL77DHBnEMxBewz0fJ6LyFHTPL7xhwzWYrJ9z22AqmQBV757MHfAAAAAElFTkSuQmCC);
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: calc(100% - 2px) center;

  &:focus {
    outline: 1px solid var(--color-gray-900);
  }
`;

Select.displayName = "Select";

export const SelectGhost = styled(Select)`
  background-color: transparent;
  border: 1px solid transparent;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

SelectGhost.displayName = "SelectGhost";
