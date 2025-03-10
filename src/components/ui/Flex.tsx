import styled from "styled-components";

export interface FlexProps {
  direction?: "row" | "column";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
  align?: "flex-start" | "flex-end" | "center" | "stretch";
  gap?: string | number;
  flexGrow?: number;
  width?: string | number;
  children?: React.ReactNode;
}

export const Flex = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["direction", "justify", "align", "gap", "flexGrow", "width"].includes(prop),
})<FlexProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  gap: ${(props) => (props.gap && `${props.gap}px`)};
  flex-grow: ${(props) => props.flexGrow};
  width: ${(props) => props.width};
`;

Flex.displayName = "Flex";
