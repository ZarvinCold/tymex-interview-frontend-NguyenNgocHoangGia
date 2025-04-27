import React, { ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import theme from "./theme";

interface Props {
  children: ReactNode;
}

const ThemeProvider = ({ children }: Props) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);

export default ThemeProvider;