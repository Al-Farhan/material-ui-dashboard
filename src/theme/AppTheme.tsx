import * as React from "react";
import { createTheme, ThemeProvider, type ThemeOptions } from "@mui/material/styles";
import { inputsCustomizations } from './customizations/inputs.tsx';
import { dataDisplayCustomizations } from './customizations/dataDisplay.tsx';
import { feedbackCustomizations } from './customizations/feedback.tsx';
import { navigationCustomizations } from './customizations/navigation.tsx';
import { surfacesCustomizations } from './customizations/surfaces.ts';
import { colorSchemes, typography, shadows, shape } from "./themePrimitives.ts";

interface AppThemeProps {
  children: React.ReactNode;
  disableCustomTheme?: boolean;
  themeComponents?: ThemeOptions["components"];
}

export default function AppTheme(props: AppThemeProps) {
  const { children, disableCustomTheme, themeComponents } = props;
  const theme = React.useMemo(() => {
    return disableCustomTheme
      ? {}
      : createTheme({
          cssVariables: {
            colorSchemeSelector: "data-mui-color-scheme",
            cssVarPrefix: "template",
          },
          colorSchemes,
          typography,
          shadows,
          shape,
          components: {
            ...inputsCustomizations,
            ...dataDisplayCustomizations,
            ...feedbackCustomizations,
            ...navigationCustomizations,
            ...surfacesCustomizations,
            ...themeComponents,
          },
        });
  }, [disableCustomTheme, themeComponents]);
  if (disableCustomTheme) {
    return <React.Fragment>{children}</React.Fragment>;
  }
  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
        {children}
    </ThemeProvider>
  )
}