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
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1300,
        },
    },
    typography: {
        fontFamily: "'Roboto', sans-serif, serif",
        h1: {
            fontWeight: 500,
            fontSize: '5rem', //80px
        },
        h2: {
            fontWeight: 700,
            fontSize: '2rem', //32px
        },
        h3: {
            fontWeight: 700,
            fontSize: '1.5rem', //24px
        },
        h4: {
            fontWeight: 600,
            fontSize: '1.5rem', //24px
        },
        h5: {
            fontWeight: 700,
            fontSize: '1.25rem', //20px
        },
        subtitle2: {
            fontWeight: 700,
            fontSize: '0.875rem', //14px
        },
        button: {
            fontSize: '1rem', //16px
            textTransform: 'none',
        },
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#FFF',
        },
        secondary: {
            main: '#121212',
            light: '#292929',
        },
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
    shape: {
        borderRadius: 10,
    },
});

theme.components = {
    ...theme.components,
    MuiButton: {
        styleOverrides: {
            text: {
                padding: theme.spacing(0.75, 2),
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: 'transparent',
            },
            textSecondary: {
                color: theme.palette.text.secondary,
            },
            containedSecondary: {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.main,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: theme.palette.secondary.light,
            },
            outlinedSecondary: {
                color: theme.palette.text.primary,
                borderColor: theme.palette.secondary.light,
            },
        },
    },
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
            filled: {
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: theme.palette.secondary.light,
            },
            outlined: {
                borderColor: theme.palette.secondary.light,
            },
        },
    },
};

export default theme;
