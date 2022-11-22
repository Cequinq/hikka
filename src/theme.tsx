import { CSSProperties } from 'react';
import { createTheme } from '@mui/material';

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        framed: true;
        confirm: true;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        buttonLg: true;
        title: true;
        h7: true;
    }
}

declare module '@mui/material/Card' {
    interface CardPropsVariantOverrides {
        noLeftPadding: true;
    }
}

declare module '@mui/material/styles' {
    interface Theme {}

    interface ThemeOptions {}

    interface TypographyVariants {
        buttonLg: CSSProperties;
        title: CSSProperties;
        h7: CSSProperties;
    }

    interface TypographyVariantsOptions {
        buttonLg?: CSSProperties;
        title?: CSSProperties;
        h7?: CSSProperties;
    }

    interface CardPropsVariantOverrides {
        noLeftPadding?: CSSProperties;
    }
}

const theme = createTheme({
    typography: {
        fontFamily: "'Roboto', sans-serif, serif",
        h1: {
            fontFamily: "'Montserrat', serif",
            fontWeight: 500,
            fontSize: '5rem', //80px
        },
        h2: {
            fontFamily: "'Montserrat', serif",
            fontWeight: 700,
            fontSize: '2rem', //32px
        },
        h3: {
            fontFamily: "'Montserrat', serif",
            fontWeight: 700,
            fontSize: '1.5rem', //24px
        },
        h4: {
            fontFamily: "'Montserrat', serif",
            fontWeight: 600,
            fontSize: '1.5rem', //24px
        },
        subtitle2: {
            fontFamily: "'Montserrat', serif",
            fontWeight: 700,
            fontSize: '0.875rem', //14px
        },
    },
    palette: {
        mode: 'dark',
        // secondary: {
        //     main: '#06032d',
        //     dark: '#0a063e',
        //     light: '#3a56a2',
        //     contrastText: '#aba8d5',
        // },
        // action: {
        //     hover: 'rgba(193, 171, 109, 0.4)',
        //     // focus: 'rgba(193, 171, 109, 0.4)',
        // },
        background: {
            default: 'black',
        },
    },
});

theme.components = {
    ...theme.components,
    MuiGrid2: {
        defaultProps: {
            disableEqualOverflow: false,
        },
    },
    MuiOutlinedInput: {
        styleOverrides: {
            root: {
                background: theme.palette.background.paper,
                borderRadius: 10,
            },
        },
    },
    MuiChip: {
        styleOverrides: {
            root: {
                borderRadius: 6,
            },
        },
    },
};

export default theme;
