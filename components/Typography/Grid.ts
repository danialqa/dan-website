import styled from 'styled-components';

import Box from './Box';

const Grid = styled(Box)`
  display: grid;

  /* GRID */
  ${({ gridGap }: any) => !!gridGap && `grid-gap: ${gridGap}`};
  ${({ gridTemplateRows }: any) =>
    !!gridTemplateRows && `grid-template-rows: ${gridTemplateRows}`};
  ${({ gridTemplateColumns }: any) =>
    !!gridTemplateColumns && `-ms-grid-columns: ${gridTemplateColumns}`};
  ${({ gridTemplateColumns }: any) =>
    !!gridTemplateColumns && `grid-template-columns: ${gridTemplateColumns}`};
  ${({ gridTemplateAreas }: any) =>
    !!gridTemplateAreas && `grid-template-areas: ${gridTemplateAreas}`};
  ${({ gridAutoRows }: any) =>
    !!gridAutoRows && `grid-auto-rows: ${gridAutoRows}`};
  ${({ gridAutoFlow }: any) =>
    !!gridAutoFlow && `grid-auto-flow: ${gridAutoFlow}`};
  ${({ gridAutoColumns }: any) =>
    !!gridAutoColumns && `grid-auto-columns: ${gridAutoColumns}`};

  /* DESKTOP  */
  @media ${({ theme }) => theme.device.desktop} {
    ${({ gridGapD }: any) => !!gridGapD && `grid-gap: ${gridGapD}`};
    ${({ gridTemplateRowsD }: any) =>
      !!gridTemplateRowsD && `grid-template-rows: ${gridTemplateRowsD}`};
    ${({ gridTemplateColumnsD }: any) =>
      !!gridTemplateColumnsD && `-ms-grid-columns: ${gridTemplateColumnsD}`};
    ${({ gridTemplateColumnsD }: any) =>
      !!gridTemplateColumnsD &&
      `grid-template-columns: ${gridTemplateColumnsD}`};
    ${({ gridTemplateAreasD }: any) =>
      !!gridTemplateAreasD && `grid-template-areas: ${gridTemplateAreasD}`};
    ${({ gridAutoRowsD }: any) =>
      !!gridAutoRowsD && `grid-auto-rows: ${gridAutoRowsD}`};
    ${({ gridAutoFlowD }: any) =>
      !!gridAutoFlowD && `grid-auto-flow: ${gridAutoFlowD}`};
    ${({ gridAutoColumnsD }: any) =>
      !!gridAutoColumnsD && `grid-auto-columns: ${gridAutoColumnsD}`};
  }

  /* LAPTOP  */
  @media ${({ theme }) => theme.device.laptop} {
    ${({ gridGapL }: any) => !!gridGapL && `grid-gap: ${gridGapL}`};
    ${({ gridTemplateRowsL }: any) =>
      !!gridTemplateRowsL && `grid-template-rows: ${gridTemplateRowsL}`};
    ${({ gridTemplateColumnsL }: any) =>
      !!gridTemplateColumnsL && `-ms-grid-columns: ${gridTemplateColumnsL}`};
    ${({ gridTemplateColumnsL }: any) =>
      !!gridTemplateColumnsL &&
      `grid-template-columns: ${gridTemplateColumnsL}`};
    ${({ gridTemplateAreasL }: any) =>
      !!gridTemplateAreasL && `grid-template-areas: ${gridTemplateAreasL}`};
    ${({ gridAutoRowsL }: any) =>
      !!gridAutoRowsL && `grid-auto-rows: ${gridAutoRowsL}`};
    ${({ gridAutoFlowL }: any) =>
      !!gridAutoFlowL && `grid-auto-flow: ${gridAutoFlowL}`};
    ${({ gridAutoColumnsL }: any) =>
      !!gridAutoColumnsL && `grid-auto-columns: ${gridAutoColumnsL}`};
  }

  /* TABLET  */
  @media ${({ theme }) => theme.device.tablet} {
    ${({ gridGapT }: any) => !!gridGapT && `grid-gap: ${gridGapT}`};
    ${({ gridTemplateRowsT }: any) =>
      !!gridTemplateRowsT && `grid-template-rows: ${gridTemplateRowsT}`};
    ${({ gridTemplateColumnsT }: any) =>
      !!gridTemplateColumnsT && `-ms-grid-columns: ${gridTemplateColumnsT}`};
    ${({ gridTemplateColumnsT }: any) =>
      !!gridTemplateColumnsT &&
      `grid-template-columns: ${gridTemplateColumnsT}`};
    ${({ gridTemplateAreasT }: any) =>
      !!gridTemplateAreasT && `grid-template-areas: ${gridTemplateAreasT}`};
    ${({ gridAutoRowsT }: any) =>
      !!gridAutoRowsT && `grid-auto-rows: ${gridAutoRowsT}`};
    ${({ gridAutoFlowT }: any) =>
      !!gridAutoFlowT && `grid-auto-flow: ${gridAutoFlowT}`};
    ${({ gridAutoColumnsT }: any) =>
      !!gridAutoColumnsT && `grid-auto-columns: ${gridAutoColumnsT}`};
  }

  /* MOBILE  */
  @media ${({ theme }) => theme.device.mobile} {
    ${({ gridGapM }: any) => !!gridGapM && `grid-gap: ${gridGapM}`};
    ${({ gridTemplateRowsM }: any) =>
      !!gridTemplateRowsM && `grid-template-rows: ${gridTemplateRowsM}`};
    ${({ gridTemplateColumnsM }: any) =>
      !!gridTemplateColumnsM && `-ms-grid-columns: ${gridTemplateColumnsM}`};
    ${({ gridTemplateColumnsM }: any) =>
      !!gridTemplateColumnsM &&
      `grid-template-columns: ${gridTemplateColumnsM}`};
    ${({ gridTemplateAreasM }: any) =>
      !!gridTemplateAreasM && `grid-template-areas: ${gridTemplateAreasM}`};
    ${({ gridAutoRowsM }: any) =>
      !!gridAutoRowsM && `grid-auto-rows: ${gridAutoRowsM}`};
    ${({ gridAutoFlowM }: any) =>
      !!gridAutoFlowM && `grid-auto-flow: ${gridAutoFlowM}`};
    ${({ gridAutoColumnsM }: any) =>
      !!gridAutoColumnsM && `grid-auto-columns: ${gridAutoColumnsM}`};
  }
`;

export default Grid;
