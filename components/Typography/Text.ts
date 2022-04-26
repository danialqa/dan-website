import styled from 'styled-components';

import Box from './Box';

const Text = styled(Box)`
  font-size: ${({ fontSize }: any) => fontSize};
  line-height: ${({ lineHeight }: any) => lineHeight};
  font-weight: ${({ weight }: any) => weight};

  /* DESKTOP  */
  @media ${({ theme }) => theme.device.desktop} {
    ${({ fontSizeD }) => !!fontSizeD && `font-size: ${fontSizeD}`};
    ${({ lineHeightD }) => !!lineHeightD && `line-height: ${lineHeightD}`};
    ${({ weightD }) => !!weightD && `font-weight: ${weightD}`};
  }

  /* LAPTOP  */
  @media ${({ theme }) => theme.device.laptop} {
    ${({ fontSizeL }) => !!fontSizeL && `font-size: ${fontSizeL}`};
    ${({ lineHeightL }) => !!lineHeightL && `line-height: ${lineHeightL}`};
    ${({ weightL }) => !!weightL && `font-weight: ${weightL}`};
  }

  /* TABLET  */
  @media ${({ theme }) => theme.device.tablet} {
    ${({ fontSizeT }) => !!fontSizeT && `font-size: ${fontSizeT}`};
    ${({ lineHeightT }) => !!lineHeightT && `line-height: ${lineHeightT}`};
    ${({ weightT }) => !!weightT && `font-weight: ${weightT}`};
  }

  /* MOBILE  */
  @media ${({ theme }) => theme.device.mobile} {
    ${({ fontSizeM }) => !!fontSizeM && `font-size: ${fontSizeM}`};
    ${({ lineHeightM }) => !!lineHeightM && `line-height: ${lineHeightM}`};
    ${({ weightM }) => !!weightM && `font-weight: ${weightM}`};
  }
`;

export default Text;
