import React from 'react';
import AppTheme from './theme/AppTheme.tsx';
import { chartsCustomizations, dataGridCustomizations, datePickersCustomizations, treeViewCustomizations } from './theme/customizations/index.ts';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import SideMenu from './components/SideMenu.tsx';
import AppNavbar from './components/AppNavbar.tsx';

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
}

function App(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: 'flex' }}>
        <SideMenu />
        <AppNavbar />
      </Box>
    </AppTheme>
  );
}

export default App;
