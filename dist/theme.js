"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var theme = {
    space: {
        small: 12,
        medium: 20,
        large: 32,
    },
    fonts: {
        body: "Tahoma",
        heading: "inherit",
        monospace: "Menlo, monospace",
    },
    fontSizes: {
        small: 20,
        medium: 26,
        large: 53,
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
            border: "2px solid",
            borderColor: "border",
            fontFamily: "body",
            fontWeight: "body",
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
exports.default = theme;
