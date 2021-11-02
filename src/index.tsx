/** @jsxImportSource theme-ui */

import {
  ButtonProps,
  Box as TUIBox,
  Button as TUIButton,
  Flex as TUIFlex,
  Heading as TUIHeading,
  HeadingProps as TUIHeadingProps,
  ThemeProvider as TUIThemeProvider,
  Themed,
} from "theme-ui";
import React, { TableHTMLAttributes } from "react";

import theme from "./theme";
import useSound from "use-sound";

export function ThemeProvider({ children }: { children?: React.ReactNode }) {
  return <TUIThemeProvider theme={theme}>{children}</TUIThemeProvider>;
}

export const Box = TUIBox;
export const Flex = TUIFlex;

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
}: {
  title: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <Flex sx={{ flexDirection: "column", flex: 1, width: "100%" }}>
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

export function Table(props: TableHTMLAttributes<HTMLTableElement>) {
  return <table {...props} sx={{ backgroundColor: "secondary" }} />;
}
