import { Html, Head, Main, NextScript } from "next/document";
import StyledComponentsRegistry from "@/lib/registry";

export default function Document({ children }) {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* <StyledComponentsRegistry>{children}</StyledComponentsRegistry> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
