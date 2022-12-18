import React, { FC } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import { GlobalStyle, Navigation } from '../layout/common';
import axios from 'axios';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppProps } from 'next/app';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/montserrat/900.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/500.css';

axios.defaults.baseURL = 'https://api.hikka.io';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 10000,
            cacheTime: 5000,
        },
    },
});

const App: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <MuiThemeProvider theme={theme}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <GlobalStyle />
                        <Navigation />
                        <Component {...pageProps} />
                    </ThemeProvider>
                </MuiThemeProvider>
            </Hydrate>
        </QueryClientProvider>
    );
};

export default styled(App)``;
