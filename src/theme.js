import {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider,
} from 'styled-components';

const theme = {
  color: {
    primary: '#5352ed',
    darkPrimary: '#4241dc',
    white: '#efefef',
  },
  fontSize: {},
  fontWeight: {
    regular: '400',
    bold: '700',
  },
};

const GlobalStyles = createGlobalStyle`
    *,*::after,*::before{
        box-sizing: border-box;
    }

    body{
        font-family: 'Open Sans', sans-serif;
        margin:20px;
        font-size:15px;   
    }
`;

export const ThemeProvider = ({ children }) => (
  <StyledThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </StyledThemeProvider>
);
