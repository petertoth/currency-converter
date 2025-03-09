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

export const Flex = ({
  direction,
  justify,
  align,
  gap,
  flexGrow,
  width,
  children,
}: FlexProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        gap: gap,
        flexGrow: flexGrow,
        width: width,
      }}
    >
      {children}
    </div>
  );
};

Flex.displayName = "Flex";
