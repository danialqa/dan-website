import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { Header } from 'components';

import GlobalStyle from '../theme/global.style';
import '../theme/globals.scss';

import themeVariables from 'theme';

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
