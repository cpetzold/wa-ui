import * as tui from "theme-ui";

import React from "react";
import theme from "./theme";
import useSound from "use-sound";

export { Box } from "theme-ui";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <tui.ThemeProvider theme={theme}>{children}</tui.ThemeProvider>;
}

export function Button({ disabled, ...rest }: tui.ButtonProps) {
  const [playHover] = useSound("/hover.wav");
  const [playClick] = useSound("/click.wav");

  return (
    <tui.Button
      disabled={disabled}
      {...rest}
      onMouseEnter={() => playHover()}
      onMouseDown={(e) => {
        e.stopPropagation();
        playClick();
      }}
    />
  );
}
