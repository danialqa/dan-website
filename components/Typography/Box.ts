import styled from 'styled-components';

const Box: any = styled.div`
  /* COLOR */
  ${({ theme, color }: any) => !!color && `color: ${theme.colors[color]}`};

  /* FONT FAMILY */
  ${({ fontFamily }: any) =>
    !!fontFamily && `font-family: ${fontFamily || 'SofiaPro'}`};

  /* DIRECTION */
  ${({ theme }: any) =>
    `direction: ${theme.language === 'fa' ? 'rtl' : 'ltr'}`};

  /* WIDTH */
  ${({ width }: any) => !!width && `width: ${width}`};
  ${({ minWidth }: any) => !!minWidth && `min-width: ${minWidth}`};
  ${({ maxWidth }: any) => !!maxWidth && `max-width: ${maxWidth}`};

  /* HEIGHT */
  ${({ height }: any) => !!height && `height: ${height}`};
  ${({ minHeight }: any) => !!minHeight && `min-height: ${minHeight}`};
  ${({ maxHeight }: any) => !!maxHeight && `max-height: ${maxHeight}`};

  /* OVERFLOW */
  ${({ overflow }: any) => !!overflow && `overflow: ${overflow}`};
  ${({ overflowx }: any) => !!overflowx && `overflow-x: ${overflowx}`};
  ${({ overflowy }: any) => !!overflowy && `overflow-y: ${overflowy}`};

  /* WHITE SPACE */
  ${({ whiteSpace }: any) => !!whiteSpace && `white-space: ${whiteSpace}`};

  /* MARGIN */
  ${({ margin }: any) => !!margin && `margin: ${margin}`};
  ${({ marginTop }: any) => !!marginTop && `margin-top: ${marginTop}`};
  ${({ marginRight }: any) =>
    !!marginRight && `margin-inline-start: ${marginRight}`};
  ${({ marginLeft }: any) =>
    !!marginLeft && `margin-inline-end: ${marginLeft}`};
  ${({ marginBottom }: any) =>
    !!marginBottom && `margin-bottom: ${marginBottom}`};

  /* PADDING */
  padding: ${({ padding }: any) => padding};
  padding-top: ${({ paddingTop }: any) => paddingTop};
  padding-inline-start: ${({ paddingRight }: any) => paddingRight};
  padding-bottom: ${({ paddingBottom }: any) => paddingBottom};
  padding-inline-end: ${({ paddingLeft }: any) => paddingLeft};

  /* DISPLAY */
  display: ${({ display }: any) => display};

  /* BACKGROUND */
  background: ${({ theme, background }: any) =>
    theme.colors[background] || background};

  /* BORDER */
  border: ${({ border }: any) => border};
  border-bottom: ${({ borderBottom }: any) => borderBottom};
  border-top: ${({ borderTop }: any) => borderTop};
  border-left: ${({ borderLeft }: any) => borderLeft};
  border-right: ${({ borderRight }: any) => borderRight};
  border-radius: ${({ borderRadius }: any) => borderRadius};
  border-color: ${({ theme, borderColor }: any) =>
    theme.colors[borderColor] || borderColor};

  /* POSITION */
  position: ${({ position }: any) => position};
  right: ${({ right }: any) => right};
  left: ${({ left }: any) => left};
  bottom: ${({ bottom }: any) => bottom};
  top: ${({ top }: any) => top};

  /* TEXT ALIGN */
  text-align: ${({ align }: any) => align};

  /* VERTICAL ALIGN */
  vertical-align: ${({ verticalAlign }: any) => verticalAlign};

  /* Z-INDEX */
  z-index: ${({ zIndex }: any) => zIndex};

  /* DESKTOP  */
  @media ${({ theme }) => theme.device.desktop} {
    color: ${({ theme, colorD }: any) => theme.colors[colorD]};
    font-family: ${({ fontFamilyD }: any) => fontFamilyD || 'SofiaPro'};

    /* WIDTH */
    width: ${({ widthD }: any) => widthD && widthD};
    min-width: ${({ minWidthD }: any) => minWidthD && minWidthD};
    max-width: ${({ maxWidthD }: any) => maxWidthD && maxWidthD};

    /* HEIGHT */
    height: ${({ heightD }: any) => heightD && heightD};
    min-height: ${({ minHeightD }: any) => minHeightD && minHeightD};
    max-height: ${({ maxHeightD }: any) => maxHeightD && maxHeightD};

    /* OVERFLOW */
    overflow: ${({ overflowD }: any) => overflowD && overflowD};
    overflow-x: ${({ overflowxD }: any) => overflowxD && overflowxD};
    overflow-y: ${({ overflowyD }: any) => overflowyD && overflowyD};

    /* WHITE SPACE */
    white-space: ${({ whiteSpaceD }: any) => whiteSpaceD && whiteSpaceD};

    /* MARGIN */
    margin: ${({ marginD }: any) => marginD};
    margin-top: ${({ marginTopD }: any) => marginTopD};
    margin-inline-start: ${({ marginRightD }: any) => marginRightD};
    margin-bottom: ${({ marginBottomD }: any) => marginBottomD};
    margin-inline-end: ${({ marginLeftD }: any) => marginLeftD};

    /* PADDING */
    padding: ${({ paddingD }: any) => paddingD};
    padding-top: ${({ paddingTopD }: any) => paddingTopD};
    padding-inline-start: ${({ paddingRightD }: any) => paddingRightD};
    padding-bottom: ${({ paddingBottomD }: any) => paddingBottomD};
    padding-inline-end: ${({ paddingLeftD }: any) => paddingLeftD};

    /* DISPLAY */
    display: ${({ displayD }: any) => displayD};

    /* BACKGROUND */
    background: ${({ theme, backgroundD }: any) =>
      theme.colors[backgroundD] || backgroundD};

    /* BORDER */
    border: ${({ borderD }: any) => borderD};
    border-bottom: ${({ borderBottomD }: any) => borderBottomD};
    border-top: ${({ borderTopD }: any) => borderTopD};
    border-left: ${({ borderLeftD }: any) => borderLeftD};
    border-right: ${({ borderRightD }: any) => borderRightD};
    border-radius: ${({ borderRadiusD }: any) => borderRadiusD};
    border-color: ${({ theme, borderColorD }: any) =>
      theme.colors[borderColorD] || borderColorD};

    /* POSITION */
    position: ${({ positionD }: any) => positionD};
    right: ${({ rightD }: any) => rightD};
    left: ${({ leftD }: any) => leftD};
    bottom: ${({ bottomD }: any) => bottomD};
    top: ${({ topD }: any) => topD};

    /* TEXT ALIGN */
    text-align: ${({ alignD }: any) => alignD};

    /* VERTICAL ALIGN */
    vertical-align: ${({ verticalAlignD }: any) => verticalAlignD};

    /* Z-INDEX */
    z-index: ${({ zIndexD }: any) => zIndexD};
  }

  /* LAPTOP  */
  @media ${({ theme }) => theme.device.laptop} {
    color: ${({ theme, colorL }: any) => theme.colors[colorL]};
    font-family: ${({ fontFamilyL }: any) => fontFamilyL || 'SofiaPro'};

    /* WIDTH */
    width: ${({ widthL }: any) => widthL && widthL};
    min-width: ${({ minWidthL }: any) => minWidthL && minWidthL};
    max-width: ${({ maxWidthL }: any) => maxWidthL && maxWidthL};

    /* HEIGHT */
    height: ${({ heightL }: any) => heightL && heightL};
    min-height: ${({ minHeightL }: any) => minHeightL && minHeightL};
    max-height: ${({ maxHeightL }: any) => maxHeightL && maxHeightL};

    /* OVERFLOW */
    overflow: ${({ overflowL }: any) => overflowL && overflowL};
    overflow-x: ${({ overflowxL }: any) => overflowxL && overflowxL};
    overflow-y: ${({ overflowyL }: any) => overflowyL && overflowyL};

    /* WHITE SPACE */
    white-space: ${({ whiteSpaceL }: any) => whiteSpaceL && whiteSpaceL};

    /* MARGIN */
    margin: ${({ marginL }: any) => marginL};
    margin-top: ${({ marginTopL }: any) => marginTopL};
    margin-inline-start: ${({ marginRightL }: any) => marginRightL};
    margin-bottom: ${({ marginBottomL }: any) => marginBottomL};
    margin-inline-end: ${({ marginLeftL }: any) => marginLeftL};

    /* PADDING */
    padding: ${({ paddingL }: any) => paddingL};
    padding-top: ${({ paddingTopL }: any) => paddingTopL};
    padding-inline-start: ${({ paddingRightL }: any) => paddingRightL};
    padding-bottom: ${({ paddingBottomL }: any) => paddingBottomL};
    padding-inline-end: ${({ paddingLeftL }: any) => paddingLeftL};

    /* DISPLAY */
    display: ${({ displayL }: any) => displayL};

    /* BACKGROUND */
    background: ${({ theme, backgroundL }: any) =>
      theme.colors[backgroundL] || backgroundL};

    /* BORDER */
    border: ${({ borderL }: any) => borderL};
    border-bottom: ${({ borderBottomL }: any) => borderBottomL};
    border-top: ${({ borderTopL }: any) => borderTopL};
    border-left: ${({ borderLeftL }: any) => borderLeftL};
    border-right: ${({ borderRightL }: any) => borderRightL};
    border-radius: ${({ borderRadiusL }: any) => borderRadiusL};
    border-color: ${({ theme, borderColorL }: any) =>
      theme.colors[borderColorL] || borderColorL};

    /* POSITION */
    position: ${({ positionL }: any) => positionL};
    right: ${({ rightL }: any) => rightL};
    left: ${({ leftL }: any) => leftL};
    bottom: ${({ bottomL }: any) => bottomL};
    top: ${({ paddingTopL }: any) => paddingTopL};

    /* TEXT ALIGN */
    text-align: ${({ alignL }: any) => alignL};

    /* VERTICAL ALIGN */
    vertical-align: ${({ verticalAlignL }: any) => verticalAlignL};

    /* Z-INDEX */
    z-index: ${({ zIndexL }: any) => zIndexL};
  }

  /* TABLET  */
  @media ${({ theme }) => theme.device.tablet} {
    color: ${({ theme, colorT }: any) => theme.colors[colorT]};
    font-family: ${({ fontFamilyT }: any) => fontFamilyT || 'SofiaPro'};

    /* WIDTH */
    width: ${({ widthT }: any) => widthT && widthT};
    min-width: ${({ minWidthT }: any) => minWidthT && minWidthT};
    max-width: ${({ maxWidthT }: any) => maxWidthT && maxWidthT};

    /* HEIGHT */
    height: ${({ heightT }: any) => heightT && heightT};
    min-height: ${({ minHeightT }: any) => minHeightT && minHeightT};
    max-height: ${({ maxHeightT }: any) => maxHeightT && maxHeightT};

    /* OVERFLOW */
    overflow: ${({ overflowT }: any) => overflowT && overflowT};
    overflow-x: ${({ overflowxT }: any) => overflowxT && overflowxT};
    overflow-y: ${({ overflowyT }: any) => overflowyT && overflowyT};

    /* WHITE SPACE */
    white-space: ${({ whiteSpaceT }: any) => whiteSpaceT && whiteSpaceT};

    /* MARGIN */
    margin: ${({ marginT }: any) => marginT};
    margin-top: ${({ marginTopT }: any) => marginTopT};
    margin-inline-start: ${({ marginRightT }: any) => marginRightT};
    margin-bottom: ${({ marginBottomT }: any) => marginBottomT};
    margin-inline-end: ${({ marginLeftT }: any) => marginLeftT};

    /* PADDING */
    padding: ${({ paddingT }: any) => paddingT};
    padding-top: ${({ paddingTopT }: any) => paddingTopT};
    padding-inline-start: ${({ paddingRightT }: any) => paddingRightT};
    padding-bottom: ${({ paddingBottomT }: any) => paddingBottomT};
    padding-inline-end: ${({ paddingLeftT }: any) => paddingLeftT};

    /* DISPLAY */
    display: ${({ displayT }: any) => displayT};

    /* BACKGROUND */
    background: ${({ theme, backgroundT }: any) =>
      theme.colors[backgroundT] || backgroundT};

    /* BORDER */
    border: ${({ borderT }: any) => borderT};
    border-bottom: ${({ borderBottomT }: any) => borderBottomT};
    border-top: ${({ borderTopT }: any) => borderTopT};
    border-left: ${({ borderLeftT }: any) => borderLeftT};
    border-right: ${({ borderRightT }: any) => borderRightT};
    border-radius: ${({ borderRadiusT }: any) => borderRadiusT};
    border-color: ${({ theme, borderColorT }: any) =>
      theme.colors[borderColorT] || borderColorT};

    /* POSITION */
    position: ${({ positionT }: any) => positionT};
    right: ${({ rightT }: any) => rightT};
    left: ${({ leftT }: any) => leftT};
    bottom: ${({ bottomT }: any) => bottomT};
    top: ${({ paddingTopT }: any) => paddingTopT};

    /* TEXT ALIGN */
    text-align: ${({ alignT }: any) => alignT};

    /* VERTICAL ALIGN */
    vertical-align: ${({ verticalAlignT }: any) => verticalAlignT};

    /* Z-INDEX */
    z-index: ${({ zIndexT }: any) => zIndexT};
  }

  /* MOBILE  */
  @media ${({ theme }) => theme.device.mobile} {
    color: ${({ theme, colorM }: any) => theme.colors[colorM]};
    font-family: ${({ fontFamilyM }: any) => fontFamilyM || 'SofiaPro'};

    /* WIDTH */
    width: ${({ widthM }: any) => widthM && widthM};
    min-width: ${({ minWidthM }: any) => minWidthM && minWidthM};
    max-width: ${({ maxWidthM }: any) => maxWidthM && maxWidthM};

    /* HEIGHT */
    height: ${({ heightM }: any) => heightM && heightM};
    min-height: ${({ minHeightM }: any) => minHeightM && minHeightM};
    max-height: ${({ maxHeightM }: any) => maxHeightM && maxHeightM};

    /* OVERFLOW */
    overflow: ${({ overflowM }: any) => overflowM && overflowM};
    overflow-x: ${({ overflowxM }: any) => overflowxM && overflowxM};
    overflow-y: ${({ overflowyM }: any) => overflowyM && overflowyM};

    /* WHITE SPACE */
    white-space: ${({ whiteSpaceM }: any) => whiteSpaceM && whiteSpaceM};

    /* MARGIN */
    margin: ${({ marginM }: any) => marginM};
    margin-top: ${({ marginTopM }: any) => marginTopM};
    margin-inline-start: ${({ marginRightM }: any) => marginRightM};
    margin-bottom: ${({ marginBottomM }: any) => marginBottomM};
    margin-inline-end: ${({ marginLeftM }: any) => marginLeftM};

    /* PADDING */
    padding: ${({ paddingM }: any) => paddingM};
    padding-top: ${({ paddingTopM }: any) => paddingTopM};
    padding-inline-start: ${({ paddingRightM }: any) => paddingRightM};
    padding-bottom: ${({ paddingBottomM }: any) => paddingBottomM};
    padding-inline-end: ${({ paddingLeftM }: any) => paddingLeftM};

    /* DISPLAY */
    display: ${({ displayM }: any) => displayM};

    /* BACKGROUND */
    background: ${({ theme, backgroundM }: any) =>
      theme.colors[backgroundM] || backgroundM};

    /* BORDER */
    border: ${({ borderM }: any) => borderM};
    border-bottom: ${({ borderBottomM }: any) => borderBottomM};
    border-top: ${({ borderTopM }: any) => borderTopM};
    border-left: ${({ borderLeftM }: any) => borderLeftM};
    border-right: ${({ borderRightM }: any) => borderRightM};
    border-radius: ${({ borderRadiusM }: any) => borderRadiusM};
    border-color: ${({ theme, borderColorM }: any) =>
      theme.colors[borderColorM] || borderColorM};

    /* POSITION */
    position: ${({ positionM }: any) => positionM};
    right: ${({ rightM }: any) => rightM};
    left: ${({ leftM }: any) => leftM};
    bottom: ${({ bottomM }: any) => bottomM};
    top: ${({ paddingTopM }: any) => paddingTopM};

    /* TEXT ALIGN */
    text-align: ${({ alignM }: any) => alignM};

    /* VERTICAL ALIGN */
    vertical-align: ${({ verticalAlignM }: any) => verticalAlignM};

    /* Z-INDEX */
    z-index: ${({ zIndexM }: any) => zIndexM};
  }
`;

export default Box;
