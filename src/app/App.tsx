import styled from 'styled-components';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import Navigation from './Navigation';

const MyComponent = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Navigation />
            </ThemeProvider>
        </MuiThemeProvider>
    );
};

export default styled(MyComponent)``;
