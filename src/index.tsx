/** @jsxImportSource theme-ui */

import {
  ButtonProps,
  Box as TUIBox,
  Button as TUIButton,
  Flex as TUIFlex,
  Grid as TUIGrid,
  Heading as TUIHeading,
  HeadingProps as TUIHeadingProps,
  Input as TUIInput,
  ThemeProvider as TUIThemeProvider,
  ThemeUIStyleObject,
} from "theme-ui";
import React, { TableHTMLAttributes } from "react";

import theme from "./theme";
import useSound from "use-sound";

export function ThemeProvider({ children }: { children?: React.ReactNode }) {
  return <TUIThemeProvider theme={theme}>{children}</TUIThemeProvider>;
}

export const Box = TUIBox;
export const Flex = TUIFlex;
export const Grid = TUIGrid;
export const Input = TUIInput;

export function Foo() {
  return <TUIHeading>Foo!</TUIHeading>;
}

type HeadingSize = "small" | "medium" | "large";

interface HeadingProps extends TUIHeadingProps {
  size?: HeadingSize;
}

export function Heading({ size = "medium", sx, ...props }: HeadingProps) {
  return <TUIHeading sx={{ fontSize: size, ...sx }} {...props} />;
}

export function Button(props: ButtonProps) {
  const [playHover] = useSound("/hover.wav");
  const [playClick] = useSound("/click.wav");

  return (
    <TUIButton
      {...props}
      onMouseEnter={() => playHover()}
      onMouseDown={(e) => {
        e.stopPropagation();
        playClick();
      }}
    />
  );
}

export function Frame({
  title,
  children,
  sx,
}: {
  title: React.ReactNode;
  children?: React.ReactNode;
  sx?: ThemeUIStyleObject;
}) {
  return (
    <Flex sx={{ flexDirection: "column", flex: 1, width: "100%", ...sx }}>
      <Flex sx={{ alignItems: "center", gap: 4, marginBottom: -16 }}>
        <Box sx={{ flex: 1, height: 3, backgroundColor: "border" }} />
        <Heading sx={{ color: "muted" }}>{title}</Heading>
        <Box sx={{ flex: 1, height: 3, backgroundColor: "border" }} />
      </Flex>

      <Flex>
        <Box sx={{ width: 3, backgroundColor: "border" }} />
        <Box sx={{ flex: 1, padding: "medium" }}>{children}</Box>
        <Box sx={{ width: 3, backgroundColor: "border" }} />
      </Flex>

      <Box sx={{ height: 3, backgroundColor: "border" }} />
    </Flex>
  );
}

export function Panel({
  children,
  sx,
}: {
  children?: React.ReactNode;
  sx?: ThemeUIStyleObject;
}) {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        flex: 1,
        width: "100%",
        backgroundColor: "secondary",
        border: "2px solid",
        borderColor: "border",
        padding: "small",
        ...sx,
      }}
    >
      {children}
    </Flex>
  );
}

interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  headers: string[];
  sx?: ThemeUIStyleObject;
}

export function GridCell({
  children,
  sx,
  className,
}: {
  children: React.ReactNode;
  sx?: ThemeUIStyleObject;
  className?: string;
}) {
  return (
    <Box sx={{ padding: "small", ...sx }} className={className}>
      {children}
    </Box>
  );
}

export function Table({ sx, headers, children, ...props }: TableProps) {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        backgroundColor: "secondary",
        border: "2px solid",
        borderColor: "border",
        ...sx,
      }}
      {...props}
    >
      <Grid
        sx={{
          gridTemplateColumns: `repeat(${headers.length}, 1fr)`,
          backgroundColor: "black",
          color: "muted",
          borderBottom: "2px solid",
          borderColor: "border",
          gap: 0,
          fontSize: "small",
        }}
      >
        {headers.map((header) => (
          <GridCell
            key={header}
            sx={{
              ":not(:last-child)": {
                borderRight: "2px solid",
                borderColor: "border",
              },
            }}
          >
            {header}
          </GridCell>
        ))}
      </Grid>
      <Grid
        sx={{
          gridTemplateColumns: `repeat(${headers.length}, 1fr)`,
          gap: 0,
          overflow: "auto",
        }}
      >
        {children}
      </Grid>
    </Flex>
  );
}
