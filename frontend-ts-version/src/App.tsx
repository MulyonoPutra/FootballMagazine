/* eslint-disable linebreak-style */

import React from 'react';
import './App.css';
import NavigationRoutes from './config/routes';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        allVariants: {
            fontFamily: 'Poppins',
            textTransform: 'none',
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <NavigationRoutes />
        </ThemeProvider>
    );
}

export default App;
