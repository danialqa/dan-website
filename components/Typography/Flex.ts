import styled from 'styled-components';

import Box from './Box';

const Flex = styled(Box)`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;

  /* DISPLAY */
  display: ${({ display }) => (display ? display : 'flex')};

  /* FLEX */
  -ms-flex: ${({ flexOrder }) => flexOrder};
  flex: ${({ flexOrder }) => flexOrder};
  flex: ${({ flex }) => flex};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  flex-direction: ${({ flexDirection }) => flexDirection};
  gap: ${({ flexGap }) => flexGap};

  /* DESKTOP  */
  @media ${({ theme }) => theme.device.desktop} {
    ${({ flexOrderD }) => !!flexOrderD && `-ms-flex: ${flexOrderD}`};
    ${({ flexOrderD }) => !!flexOrderD && `flex: ${flexOrderD}`};
    ${({ flexD }) => !!flexD && `flex: ${flexD}`};
    ${({ flexWrapD }) => !!flexWrapD && `flex-wrap: ${flexWrapD}`};
    ${({ justifyContentD }) =>
      !!justifyContentD && `justify-content: ${justifyContentD}`};
    ${({ alignItemsD }) => !!alignItemsD && `align-items: ${alignItemsD}`};
    ${({ flexDirectionD }) =>
      !!flexDirectionD && `flex-direction: ${flexDirectionD}`};
    ${({ flexGapD }) => !!flexGapD && `gap: ${flexGapD}`};
  }

  /* LAPTOP  */
  @media ${({ theme }) => theme.device.laptop} {
    ${({ flexOrderL }) => !!flexOrderL && `-ms-flex: ${flexOrderL}`};
    ${({ flexOrderL }) => !!flexOrderL && `flex: ${flexOrderL}`};
    ${({ flexL }) => !!flexL && `flex: ${flexL}`};
    ${({ flexWrapL }) => !!flexWrapL && `flex-wrap: ${flexWrapL}`};
    ${({ justifyContentL }) =>
      !!justifyContentL && `justify-content: ${justifyContentL}`};
    ${({ alignItemsL }) => !!alignItemsL && `align-items: ${alignItemsL}`};
    ${({ flexDirectionL }) =>
      !!flexDirectionL && `flex-direction: ${flexDirectionL}`};
    ${({ flexGapL }) => !!flexGapL && `gap: ${flexGapL}`};
  }

  /* TABLET  */
  @media ${({ theme }) => theme.device.tablet} {
    ${({ flexOrderT }) => !!flexOrderT && `-ms-flex: ${flexOrderT}`};
    ${({ flexOrderT }) => !!flexOrderT && `flex: ${flexOrderT}`};
    ${({ flexT }) => !!flexT && `flex: ${flexT}`};
    ${({ flexWrapT }) => !!flexWrapT && `flex-wrap: ${flexWrapT}`};
    ${({ justifyContentT }) =>
      !!justifyContentT && `justify-content: ${justifyContentT}`};
    ${({ alignItemsT }) => !!alignItemsT && `align-items: ${alignItemsT}`};
    ${({ flexDirectionT }) =>
      !!flexDirectionT && `flex-direction: ${flexDirectionT}`};
    ${({ flexGapT }) => !!flexGapT && `gap: ${flexGapT}`};
  }

  /* MOBILE  */
  @media ${({ theme }) => theme.device.mobile} {
    ${({ flexOrderM }) => !!flexOrderM && `-ms-flex: ${flexOrderM}`};
    ${({ flexOrderM }) => !!flexOrderM && `flex: ${flexOrderM}`};
    ${({ flexM }) => !!flexM && `flex: ${flexM}`};
    ${({ flexWrapM }) => !!flexWrapM && `flex-wrap: ${flexWrapM}`};
    ${({ justifyContentM }) =>
      !!justifyContentM && `justify-content: ${justifyContentM}`};
    ${({ alignItemsM }) => !!alignItemsM && `align-items: ${alignItemsM}`};
    ${({ flexDirectionM }) =>
      !!flexDirectionM && `flex-direction: ${flexDirectionM}`};
    ${({ flexGapM }) => !!flexGapM && `gap: ${flexGapM}`};
  }
`;

export default Flex;
