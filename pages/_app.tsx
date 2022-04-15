import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { Header } from 'components';

import GlobalStyle from './global.style';

import variables from 'theme/variables';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={variables('dark', 'en')}>
      <GlobalStyle />

      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
