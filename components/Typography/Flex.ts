import styled from 'styled-components';

import Box from './Box';

const Flex = styled(Box)`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;

  /* FLEX */
  -ms-flex: ${({ flexOrder }: any) => flexOrder};
  flex: ${({ flexOrder }: any) => flexOrder};
  flex: ${({ flex }: any) => flex};
  flex-wrap: ${({ flexWrap }: any) => flexWrap};
  justify-content: ${({ justifyContent }: any) => justifyContent || 'center'};
  align-items: ${({ alignItems }: any) => alignItems || 'center'};
  flex-direction: ${({ flexDirection }: any) => flexDirection};
  gap: ${({ flexGap }: any) => flexGap};

  /* DESKTOP  */
  @media ${({ theme }) => theme.device.desktop} {
    -ms-flex: ${({ flexOrderD }: any) => flexOrderD};
    flex: ${({ flexOrderD }: any) => flexOrderD};
    flex: ${({ flexD }: any) => flexD};
    flex-wrap: ${({ flexWrapD }: any) => flexWrapD};
    justify-content: ${({ justifyContentD }: any) =>
      justifyContentD || 'center'};
    align-items: ${({ alignItemsD }: any) => alignItemsD || 'center'};
    flex-direction: ${({ flexDirectionD }: any) => flexDirectionD};
    gap: ${({ flexGapD }: any) => flexGapD};
  }

  /* LAPTOP  */
  @media ${({ theme }) => theme.device.laptop} {
    -ms-flex: ${({ flexOrderL }: any) => flexOrderL};
    flex: ${({ flexOrderL }: any) => flexOrderL};
    flex: ${({ flexL }: any) => flexL};
    flex-wrap: ${({ flexWrapL }: any) => flexWrapL};
    justify-content: ${({ justifyContentL }: any) =>
      justifyContentL || 'center'};
    align-items: ${({ alignItemsL }: any) => alignItemsL || 'center'};
    flex-direction: ${({ flexDirectionL }: any) => flexDirectionL};
    gap: ${({ flexGapL }: any) => flexGapL};
  }

  /* TABLET  */
  @media ${({ theme }) => theme.device.tablet} {
    -ms-flex: ${({ flexOrderT }: any) => flexOrderT};
    flex: ${({ flexOrderT }: any) => flexOrderT};
    flex: ${({ flexT }: any) => flexT};
    flex-wrap: ${({ flexWrapT }: any) => flexWrapT};
    justify-content: ${({ justifyContentT }: any) =>
      justifyContentT || 'center'};
    align-items: ${({ alignItemsT }: any) => alignItemsT || 'center'};
    flex-direction: ${({ flexDirectionT }: any) => flexDirectionT};
    gap: ${({ flexGapT }: any) => flexGapT};
  }

  /* MOBILE  */
  @media ${({ theme }) => theme.device.mobile} {
    -ms-flex: ${({ flexOrderM }: any) => flexOrderM};
    flex: ${({ flexOrderM }: any) => flexOrderM};
    flex: ${({ flexM }: any) => flexM};
    flex-wrap: ${({ flexWrapM }: any) => flexWrapM};
    justify-content: ${({ justifyContentM }: any) =>
      justifyContentM || 'center'};
    align-items: ${({ alignItemsM }: any) => alignItemsM || 'center'};
    flex-direction: ${({ flexDirectionM }: any) => flexDirectionM};
    gap: ${({ flexGapM }: any) => flexGapM};
  }
`;

export default Flex;
