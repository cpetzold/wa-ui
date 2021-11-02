import type { AppProps } from "next/app";
import React from "react";
import { ThemeProvider } from "../src";
import useSound from "use-sound";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [playCantClickHere] = useSound("/cantclickhere.wav");

  return (
    <ThemeProvider>
      <div onMouseDown={() => playCantClickHere()}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
