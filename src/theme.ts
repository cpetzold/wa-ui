import type { Theme } from "theme-ui";

const theme: Theme = {
  space: {
    small: 4,
    medium: 8,
    large: 16,
  },
  fonts: {
    body: "Tahoma",
    heading: "Tahoma",
    monospace: "Menlo, monospace",
  },
  fontSizes: {
    small: 14,
    medium: 16,
    large: 24,
  },
  fontWeights: {
    body: 700,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: "#ffffff",
    background: "#000000",
    primary: "#000000",
    secondary: "#000040",
    muted: "#808080",
    border: "#808080",
    yellow: "#FFFF00",
  },
  styles: {
    root: {
      background: "linear-gradient(#000000, #030991)",
      fontFamily: "body",
      fontSize: "medium",
      minHeight: "100vh",
    },
    button: {
      fontFamily: "body",
      fontWeight: "body",
    },
  },
  buttons: {
    primary: {
      bg: "background",
      color: "muted",
      border: "3px solid",
      borderColor: "border",
      fontFamily: "body",
      fontWeight: "body",
      fontSize: "medium",
      paddingY: "small",
      paddingX: "medium",
      userSelect: "none",
      "&:hover:enabled": {
        borderColor: "white",
      },
      "&:active:enabled": {
        backgroundColor: "secondary",
        color: "white",
        borderColor: "yellow",
      },
      "&:disabled": {
        pointerEvents: "none",
        opacity: 0.5,
      },
    },
  },
};

export default theme;
