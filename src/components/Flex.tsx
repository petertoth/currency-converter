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
  children?: React.ReactNode;
}

export const Flex = ({
  direction,
  justify,
  align,
  gap,
  flexGrow,
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
      }}
    >
      {children}
    </div>
  );
};

Flex.displayName = "Flex";
