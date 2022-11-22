import { createGlobalStyle, DefaultTheme } from 'styled-components';
import { Theme } from '@mui/material';

interface CompinedTheme extends DefaultTheme, Theme {}

interface GlobalStyleProps {
    theme: CompinedTheme;
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  body {
    padding-top: 80px;
  }
`;

export default GlobalStyle;
