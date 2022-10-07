import styled from 'styled-components';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import Navigation from './Navigation';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages';

const App = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </ThemeProvider>
        </MuiThemeProvider>
    );
};

export default styled(App)``;
