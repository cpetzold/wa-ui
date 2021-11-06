/** @jsxImportSource theme-ui */
import { ButtonProps, HeadingProps as TUIHeadingProps, ThemeUIStyleObject } from "theme-ui";
import React, { TableHTMLAttributes } from "react";
export declare function ThemeProvider({ children }: {
    children?: React.ReactNode;
}): import("theme-ui/jsx-runtime").JSX.Element;
export declare const Box: import("@emotion/styled").StyledComponent<import("theme-ui").BoxOwnProps, import("theme-ui").BoxProps, {}>;
export declare const Flex: import("@emotion/styled").StyledComponent<import("theme-ui").BoxOwnProps, import("theme-ui").BoxProps, {}>;
export declare const Grid: import("theme-ui").ForwardRef<HTMLDivElement, import("theme-ui").GridProps>;
export declare const Input: import("theme-ui").ForwardRef<HTMLInputElement, import("theme-ui").InputProps>;
export declare function Foo(): import("theme-ui/jsx-runtime").JSX.Element;
declare type HeadingSize = "small" | "medium" | "large";
interface HeadingProps extends TUIHeadingProps {
    size?: HeadingSize;
}
export declare function Heading({ size, sx, ...props }: HeadingProps): import("theme-ui/jsx-runtime").JSX.Element;
export declare function Button(props: ButtonProps): import("theme-ui/jsx-runtime").JSX.Element;
export declare function Frame({ title, children, sx, }: {
    title: React.ReactNode;
    children?: React.ReactNode;
    sx?: ThemeUIStyleObject;
}): import("theme-ui/jsx-runtime").JSX.Element;
export declare function Panel({ children, sx, }: {
    children?: React.ReactNode;
    sx?: ThemeUIStyleObject;
}): import("theme-ui/jsx-runtime").JSX.Element;
interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
    headers: string[];
    sx?: ThemeUIStyleObject;
}
export declare function GridCell({ children, sx, className, }: {
    children: React.ReactNode;
    sx?: ThemeUIStyleObject;
    className?: string;
}): import("theme-ui/jsx-runtime").JSX.Element;
export declare function Table({ sx, headers, children, ...props }: TableProps): import("theme-ui/jsx-runtime").JSX.Element;
export {};
