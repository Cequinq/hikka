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

declare module '@mui/material/styles' {
    interface Theme {
        card: {
            yellow: CSSProperties['color'];
            green: CSSProperties['color'];
            red: CSSProperties['color'];
            blue: CSSProperties['color'];
            yellowLv2: CSSProperties['color'];
            greenLv2: CSSProperties['color'];
            redLv2: CSSProperties['color'];
            blueLv2: CSSProperties['color'];
            lv3: CSSProperties['color'];
            lv4: CSSProperties['color'];
            lv5: CSSProperties['color'];
            white: CSSProperties['color'];
            black: CSSProperties['color'];
        };
    }

    interface ThemeOptions {
        card: {
            yellow: CSSProperties['color'];
            green: CSSProperties['color'];
            red: CSSProperties['color'];
            blue: CSSProperties['color'];
            yellowLv2: CSSProperties['color'];
            greenLv2: CSSProperties['color'];
            redLv2: CSSProperties['color'];
            blueLv2: CSSProperties['color'];
            lv3: CSSProperties['color'];
            lv4: CSSProperties['color'];
            lv5: CSSProperties['color'];
            white: CSSProperties['color'];
            black: CSSProperties['color'];
        };
    }

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
}

const theme = createTheme({
    card: {
        yellow: '#e1ac67',
        green: '#47cb85',
        red: '#eb6868',
        blue: '#3ed5bb',
        yellowLv2: 'linear-gradient(to bottom, #e1ac67, #67e1c0)',
        greenLv2: 'linear-gradient(to bottom, #53c981, #cebc62)',
        redLv2: 'linear-gradient(to bottom, #eb6868, #6c68eb)',
        blueLv2: 'linear-gradient(to bottom, #3ed5bb, #3e9ed5)',
        lv3: 'linear-gradient(135deg, #BBA99C 20%, #6A5F4D 75%, #675E51 150%, #5D504A)',
        lv4: 'linear-gradient(135deg, #D2D2D2 20%, #676767 75%, #585858 150%, #616161)',
        lv5: 'linear-gradient(135deg, #F3D18D 20%, #7A5A1B 75%, #826425 150%, #7A6947)',
        white: 'linear-gradient(to bottom, #e5e5e5, #ccc)',
        black: '#000',
    },
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
            fontSize: '1.5rem', //24px
        },
        title: {
            fontFamily: 'Montserrat',
            fontWeight: 900,
            fontSize: '2rem', //32px
        },
    },
    palette: {
        primary: {
            main: '#FFFFFF',
            dark: '#979797',
        },
        // secondary: {
        //     main: '#06032d',
        //     dark: '#0a063e',
        //     light: '#3a56a2',
        //     contrastText: '#aba8d5',
        // },
        text: {
            primary: '#fff',
        },
        // action: {
        //     hover: 'rgba(193, 171, 109, 0.4)',
        //     // focus: 'rgba(193, 171, 109, 0.4)',
        // },
        background: {
            default: 'black',
        },
    },
});

export default theme;
