import styled from 'styled-components';

import Box from './Box';

const Text = styled(Box)`
  font-size: ${({ fontSize }: any) => fontSize || '14px'};
  line-height: ${({ lineHeight }: any) => lineHeight || '24px'};
  font-weight: ${({ weight }: any) => weight};

  /* DESKTOP  */
  @media ${({ theme }) => theme.device.desktop} {
    font-size: ${({ fontSizeD }: any) => fontSizeD || '14px'};
    line-height: ${({ lineHeightD }: any) => lineHeightD || '24px'};
    font-weight: ${({ weightD }: any) => weightD};
  }

  /* LAPTOP  */
  @media ${({ theme }) => theme.device.desktop} {
    font-size: ${({ fontSizeL }: any) => fontSizeL || '14px'};
    line-height: ${({ lineHeightL }: any) => lineHeightL || '24px'};
    font-weight: ${({ weightL }: any) => weightL};
  }

  /* TABLET  */
  @media ${({ theme }) => theme.device.tablet} {
    font-size: ${({ fontSizeT }: any) => fontSizeT || '14px'};
    line-height: ${({ lineHeightT }: any) => lineHeightT || '24px'};
    font-weight: ${({ weightT }: any) => weightT};
  }

  /* MOBILE  */
  @media ${({ theme }) => theme.device.mobile} {
    font-size: ${({ fontSizeM }: any) => fontSizeM || '14px'};
    line-height: ${({ lineHeightM }: any) => lineHeightM || '24px'};
    font-weight: ${({ weightM }: any) => weightM};
  }
`;

export default Text;
