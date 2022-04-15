import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { Header } from 'components';

import GlobalStyle from './global.style';

import themeVariables from 'theme/variables/index';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themeVariables('dark', 'en')}>
      <GlobalStyle />

      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
