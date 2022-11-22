import styled from 'styled-components';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import Navigation from './Navigation';
import { Routes, Route } from 'react-router-dom';
import { Home, Animes } from '../pages';
import GlobalStyle from './GlobalStyle';

const App = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <GlobalStyle />
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/animes" element={<Animes />} />
                </Routes>
            </ThemeProvider>
        </MuiThemeProvider>
    );
};

export default styled(App)``;
