import styled from 'styled-components';

const Box: any = styled.div`
  /* COLOR */
  ${({ theme, color }: any) => !!color && `color: ${theme.colors[color]}`};

  /* FONT FAMILY */
  ${({ fontFamily }: any) =>
    !!fontFamily && `font-family: ${fontFamily || 'HouschkaPro'}`};

  /* DIRECTION */
  ${({ theme }: any) => `direction: ${theme.isRtl ? 'rtl' : 'ltr'}`};

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
  ${({ padding }: any) => !!padding && `padding: ${padding}`};
  ${({ paddingTop }: any) => !!paddingTop && `padding-top: ${paddingTop}`};
  ${({ paddingRight }: any) =>
    !!paddingRight && `padding-inline-start: ${paddingRight}`};
  ${({ paddingLeft }: any) =>
    !!paddingLeft && `padding-inline-end: ${paddingLeft}`};
  ${({ paddingBottom }: any) =>
    !!paddingBottom && `padding-bottom: ${paddingBottom}`};

  /* DISPLAY */
  ${({ display }: any) => !!display && `display: ${display}`};

  /* BACKGROUND */
  ${({ theme, background }: any) =>
    !!background && `background: ${theme.colors[background] || background}`};

  /* BORDER */
  ${({ border }: any) => !!border && `border: ${border}`};
  ${({ borderBottom }: any) =>
    !!borderBottom && `border-bottom: ${borderBottom}`};
  ${({ borderTop }: any) => !!borderTop && `border-top: ${borderTop}`};
  ${({ borderLeft }: any) => !!borderLeft && `border-left: ${borderLeft}`};
  ${({ borderRight }: any) => !!borderRight && `border-right: ${borderRight}`};
  ${({ borderRadius }: any) =>
    !!borderRadius && `border-radius: ${borderRadius}`};
  ${({ theme, borderColor }: any) =>
    !!borderColor &&
    `border-color: ${theme.colors[borderColor] || borderColor}`};

  /* POSITION */
  ${({ position }: any) => !!position && `position: ${position}`};
  ${({ right }: any) => !!right && `right: ${right}`};
  ${({ left }: any) => !!left && `left: ${left}`};
  ${({ top }: any) => !!top && `top: ${top}`};
  ${({ bottom }: any) => !!bottom && `bottom: ${bottom}`};

  /* TEXT ALIGN */
  ${({ align }: any) => !!align && `text-align: ${align}`};

  /* VERTICAL ALIGN */
  ${({ verticalAlign }: any) =>
    !!verticalAlign && `vertical-align: ${verticalAlign}`};

  /* Z-INDEX */
  ${({ zIndex }: any) => !!zIndex && `z-index: ${zIndex}`};

  /* DESKTOP  */
  @media ${({ theme }: any) => theme.device.desktop} {
    /* COLOR */
    ${({ theme, colorD }: any) =>
      !!colorD &&
      `color: ${
        !!theme.colors[colorD] ? theme.colors[colorD] : theme.colors.white
      }`};

    /* WIDTH */
    ${({ widthD }: any) => !!widthD && `width: ${widthD}`};
    ${({ minWidthD }: any) => !!minWidthD && `min-width: ${minWidthD}`};
    ${({ maxWidthD }: any) => !!maxWidthD && `max-width: ${maxWidthD}`};

    /* HEIGHT */
    ${({ heightD }: any) => !!heightD && `height: ${heightD}`};
    ${({ minHeightD }: any) => !!minHeightD && `min-height: ${minHeightD}`};
    ${({ maxHeightD }: any) => !!maxHeightD && `max-height: ${maxHeightD}`};

    /* OVERFLOW */
    ${({ overflowD }: any) => !!overflowD && `overflow: ${overflowD}`};
    ${({ overflowxD }: any) => !!overflowxD && `overflow-x: ${overflowxD}`};
    ${({ overflowyD }: any) => !!overflowyD && `overflow-y: ${overflowyD}`};

    /* WHITE SPACE */
    ${({ whiteSpaceD }: any) => !!whiteSpaceD && `white-space: ${whiteSpaceD}`};

    /* MARGIN */
    ${({ marginD }: any) => !!marginD && `margin: ${marginD}`};
    ${({ marginTopD }: any) => !!marginTopD && `margin-top: ${marginTopD}`};
    ${({ marginRightD }: any) =>
      !!marginRightD && `margin-inline-start: ${marginRightD}`};
    ${({ marginLeftD }: any) =>
      !!marginLeftD && `margin-inline-end: ${marginLeftD}`};
    ${({ marginBottomD }: any) =>
      !!marginBottomD && `margin-bottom: ${marginBottomD}`};

    /* PADDING */
    ${({ paddingD }: any) => !!paddingD && `padding: ${paddingD}`};
    ${({ paddingTopD }: any) => !!paddingTopD && `padding-top: ${paddingTopD}`};
    ${({ paddingRightD }: any) =>
      !!paddingRightD && `padding-inline-start: ${paddingRightD}`};
    ${({ paddingLeftD }: any) =>
      !!paddingLeftD && `padding-inline-end: ${paddingLeftD}`};
    ${({ paddingBottomD }: any) =>
      !!paddingBottomD && `padding-bottom: ${paddingBottomD}`};

    /* DISPLAY */
    ${({ displayD }: any) => !!displayD && `display: ${displayD}`};

    /* BACKGROUND */
    ${({ theme, backgroundD }: any) =>
      !!backgroundD &&
      `background: ${theme.colors[backgroundD] || backgroundD}`};

    /* BORDER */
    ${({ borderD }: any) => !!borderD && `border: ${borderD}`};
    ${({ borderBottomD }: any) =>
      !!borderBottomD && `border-bottom: ${borderBottomD}`};
    ${({ borderTopD }: any) => !!borderTopD && `border-top: ${borderTopD}`};
    ${({ borderLeftD }: any) => !!borderLeftD && `border-left: ${borderLeftD}`};
    ${({ borderRightD }: any) =>
      !!borderRightD && `border-right: ${borderRightD}`};
    ${({ borderRadiusD }: any) =>
      !!borderRadiusD && `border-radius: ${borderRadiusD}`};
    ${({ theme, borderColorD }: any) =>
      !!borderColorD &&
      `border-color: ${theme.colors[borderColorD] || borderColorD}`};

    /* POSITION */
    ${({ positionD }: any) => !!positionD && `position: ${positionD}`};
    ${({ rightD }: any) => !!rightD && `right: ${rightD}`};
    ${({ leftD }: any) => !!leftD && `left: ${leftD}`};
    ${({ topD }: any) => !!topD && `top: ${topD}`};
    ${({ bottomD }: any) => !!bottomD && `bottom: ${bottomD}`};

    /* TEXT ALIGN */
    ${({ alignD }: any) => !!alignD && `text-align: ${alignD}`};

    /* VERTICAL ALIGN */
    ${({ verticalAlignD }: any) =>
      !!verticalAlignD && `vertical-align: ${verticalAlignD}`};

    /* Z-INDEX */
    ${({ zIndexD }: any) => !!zIndexD && `z-index: ${zIndexD}`};
  }

  /* LAPTOP  */
  @media ${({ theme }: any) => theme.device.laptop} {
    /* COLOR */
    ${({ theme, colorL }: any) =>
      !!colorL &&
      `color: ${
        !!theme.colors[colorL] ? theme.colors[colorL] : theme.colors.white
      }`};

    /* WIDTH */
    ${({ widthL }: any) => !!widthL && `width: ${widthL}`};
    ${({ minWidthL }: any) => !!minWidthL && `min-width: ${minWidthL}`};
    ${({ maxWidthL }: any) => !!maxWidthL && `max-width: ${maxWidthL}`};

    /* HEIGHT */
    ${({ heightL }: any) => !!heightL && `height: ${heightL}`};
    ${({ minHeightL }: any) => !!minHeightL && `min-height: ${minHeightL}`};
    ${({ maxHeightL }: any) => !!maxHeightL && `max-height: ${maxHeightL}`};

    /* OVERFLOW */
    ${({ overflowL }: any) => !!overflowL && `overflow: ${overflowL}`};
    ${({ overflowxL }: any) => !!overflowxL && `overflow-x: ${overflowxL}`};
    ${({ overflowyL }: any) => !!overflowyL && `overflow-y: ${overflowyL}`};

    /* WHITE SPACE */
    ${({ whiteSpaceL }: any) => !!whiteSpaceL && `white-space: ${whiteSpaceL}`};

    /* MARGIN */
    ${({ marginL }: any) => !!marginL && `margin: ${marginL}`};
    ${({ marginTopL }: any) => !!marginTopL && `margin-top: ${marginTopL}`};
    ${({ marginRightL }: any) =>
      !!marginRightL && `margin-inline-start: ${marginRightL}`};
    ${({ marginLeftL }: any) =>
      !!marginLeftL && `margin-inline-end: ${marginLeftL}`};
    ${({ marginBottomL }: any) =>
      !!marginBottomL && `margin-bottom: ${marginBottomL}`};

    /* PADDING */
    ${({ paddingL }: any) => !!paddingL && `padding: ${paddingL}`};
    ${({ paddingTopL }: any) => !!paddingTopL && `padding-top: ${paddingTopL}`};
    ${({ paddingRightL }: any) =>
      !!paddingRightL && `padding-inline-start: ${paddingRightL}`};
    ${({ paddingLeftL }: any) =>
      !!paddingLeftL && `padding-inline-end: ${paddingLeftL}`};
    ${({ paddingBottomL }: any) =>
      !!paddingBottomL && `padding-bottom: ${paddingBottomL}`};

    /* DISPLAY */
    ${({ displayL }: any) => !!displayL && `display: ${displayL}`};

    /* BACKGROUND */
    ${({ theme, backgroundL }: any) =>
      !!backgroundL &&
      `background: ${theme.colors[backgroundL] || backgroundL}`};

    /* BORDER */
    ${({ borderL }: any) => !!borderL && `border: ${borderL}`};
    ${({ borderBottomL }: any) =>
      !!borderBottomL && `border-bottom: ${borderBottomL}`};
    ${({ borderTopL }: any) => !!borderTopL && `border-top: ${borderTopL}`};
    ${({ borderLeftL }: any) => !!borderLeftL && `border-left: ${borderLeftL}`};
    ${({ borderRightL }: any) =>
      !!borderRightL && `border-right: ${borderRightL}`};
    ${({ borderRadiusL }: any) =>
      !!borderRadiusL && `border-radius: ${borderRadiusL}`};
    ${({ theme, borderColorL }: any) =>
      !!borderColorL &&
      `border-color: ${theme.colors[borderColorL] || borderColorL}`};

    /* POSITION */
    ${({ positionL }: any) => !!positionL && `position: ${positionL}`};
    ${({ rightL }: any) => !!rightL && `right: ${rightL}`};
    ${({ leftL }: any) => !!leftL && `left: ${leftL}`};
    ${({ topL }: any) => !!topL && `top: ${topL}`};
    ${({ bottomL }: any) => !!bottomL && `bottom: ${bottomL}`};

    /* TEXT ALIGN */
    ${({ alignL }: any) => !!alignL && `text-align: ${alignL}`};

    /* VERTICAL ALIGN */
    ${({ verticalAlignL }: any) =>
      !!verticalAlignL && `vertical-align: ${verticalAlignL}`};

    /* Z-INDEX */
    ${({ zIndexL }: any) => !!zIndexL && `z-index: ${zIndexL}`};
  }

  /* TABLET  */
  @media ${({ theme }: any) => theme.device.tablet} {
    /* COLOR */
    ${({ theme, colorT }: any) =>
      !!colorT &&
      `color: ${
        !!theme.colors[colorT] ? theme.colors[colorT] : theme.colors.white
      }`};

    /* WIDTH */
    ${({ widthT }: any) => !!widthT && `width: ${widthT}`};
    ${({ minWidthT }: any) => !!minWidthT && `min-width: ${minWidthT}`};
    ${({ maxWidthT }: any) => !!maxWidthT && `max-width: ${maxWidthT}`};

    /* HEIGHT */
    ${({ heightT }: any) => !!heightT && `height: ${heightT}`};
    ${({ minHeightT }: any) => !!minHeightT && `min-height: ${minHeightT}`};
    ${({ maxHeightT }: any) => !!maxHeightT && `max-height: ${maxHeightT}`};

    /* OVERFLOW */
    ${({ overflowT }: any) => !!overflowT && `overflow: ${overflowT}`};
    ${({ overflowxT }: any) => !!overflowxT && `overflow-x: ${overflowxT}`};
    ${({ overflowyT }: any) => !!overflowyT && `overflow-y: ${overflowyT}`};

    /* WHITE SPACE */
    ${({ whiteSpaceT }: any) => !!whiteSpaceT && `white-space: ${whiteSpaceT}`};

    /* MARGIN */
    ${({ marginT }: any) => !!marginT && `margin: ${marginT}`};
    ${({ marginTopT }: any) => !!marginTopT && `margin-top: ${marginTopT}`};
    ${({ marginRightT }: any) =>
      !!marginRightT && `margin-inline-start: ${marginRightT}`};
    ${({ marginLeftT }: any) =>
      !!marginLeftT && `margin-inline-end: ${marginLeftT}`};
    ${({ marginBottomT }: any) =>
      !!marginBottomT && `margin-bottom: ${marginBottomT}`};

    /* PADDING */
    ${({ paddingT }: any) => !!paddingT && `padding: ${paddingT}`};
    ${({ paddingTopT }: any) => !!paddingTopT && `padding-top: ${paddingTopT}`};
    ${({ paddingRightT }: any) =>
      !!paddingRightT && `padding-inline-start: ${paddingRightT}`};
    ${({ paddingLeftT }: any) =>
      !!paddingLeftT && `padding-inline-end: ${paddingLeftT}`};
    ${({ paddingBottomT }: any) =>
      !!paddingBottomT && `padding-bottom: ${paddingBottomT}`};

    /* DISPLAY */
    ${({ displayT }: any) => !!displayT && `display: ${displayT}`};

    /* BACKGROUND */
    ${({ theme, backgroundT }: any) =>
      !!backgroundT &&
      `background: ${theme.colors[backgroundT] || backgroundT}`};

    /* BORDER */
    ${({ borderT }: any) => !!borderT && `border: ${borderT}`};
    ${({ borderBottomT }: any) =>
      !!borderBottomT && `border-bottom: ${borderBottomT}`};
    ${({ borderTopT }: any) => !!borderTopT && `border-top: ${borderTopT}`};
    ${({ borderLeftT }: any) => !!borderLeftT && `border-left: ${borderLeftT}`};
    ${({ borderRightT }: any) =>
      !!borderRightT && `border-right: ${borderRightT}`};
    ${({ borderRadiusT }: any) =>
      !!borderRadiusT && `border-radius: ${borderRadiusT}`};
    ${({ theme, borderColorT }: any) =>
      !!borderColorT &&
      `border-color: ${theme.colors[borderColorT] || borderColorT}`};

    /* POSITION */
    ${({ positionT }: any) => !!positionT && `position: ${positionT}`};
    ${({ rightT }: any) => !!rightT && `right: ${rightT}`};
    ${({ leftT }: any) => !!leftT && `left: ${leftT}`};
    ${({ topT }: any) => !!topT && `top: ${topT}`};
    ${({ bottomT }: any) => !!bottomT && `bottom: ${bottomT}`};

    /* TEXT ALIGN */
    ${({ alignT }: any) => !!alignT && `text-align: ${alignT}`};

    /* VERTICAL ALIGN */
    ${({ verticalAlignT }: any) =>
      !!verticalAlignT && `vertical-align: ${verticalAlignT}`};

    /* Z-INDEX */
    ${({ zIndexT }: any) => !!zIndexT && `z-index: ${zIndexT}`};
  }

  /* MOBILE  */
  @media ${({ theme }: any) => theme.device.mobile} {
    /* COLOR */
    ${({ theme, colorM }: any) =>
      !!colorM &&
      `color: ${
        !!theme.colors[colorM] ? theme.colors[colorM] : theme.colors.white
      }`};

    /* WIDTH */
    ${({ widthM }: any) => !!widthM && `width: ${widthM}`};
    ${({ minWidthM }: any) => !!minWidthM && `min-width: ${minWidthM}`};
    ${({ maxWidthM }: any) => !!maxWidthM && `max-width: ${maxWidthM}`};

    /* HEIGHT */
    ${({ heightM }: any) => !!heightM && `height: ${heightM}`};
    ${({ minHeightM }: any) => !!minHeightM && `min-height: ${minHeightM}`};
    ${({ maxHeightM }: any) => !!maxHeightM && `max-height: ${maxHeightM}`};

    /* OVERFLOW */
    ${({ overflowM }: any) => !!overflowM && `overflow: ${overflowM}`};
    ${({ overflowxM }: any) => !!overflowxM && `overflow-x: ${overflowxM}`};
    ${({ overflowyM }: any) => !!overflowyM && `overflow-y: ${overflowyM}`};

    /* WHITE SPACE */
    ${({ whiteSpaceM }: any) => !!whiteSpaceM && `white-space: ${whiteSpaceM}`};

    /* MARGIN */
    ${({ marginM }: any) => !!marginM && `margin: ${marginM}`};
    ${({ marginTopM }: any) => !!marginTopM && `margin-top: ${marginTopM}`};
    ${({ marginRightM }: any) =>
      !!marginRightM && `margin-inline-start: ${marginRightM}`};
    ${({ marginLeftM }: any) =>
      !!marginLeftM && `margin-inline-end: ${marginLeftM}`};
    ${({ marginBottomM }: any) =>
      !!marginBottomM && `margin-bottom: ${marginBottomM}`};

    /* PADDING */
    ${({ paddingM }: any) => !!paddingM && `padding: ${paddingM}`};
    ${({ paddingTopM }: any) => !!paddingTopM && `padding-top: ${paddingTopM}`};
    ${({ paddingRightM }: any) =>
      !!paddingRightM && `padding-inline-start: ${paddingRightM}`};
    ${({ paddingLeftM }: any) =>
      !!paddingLeftM && `padding-inline-end: ${paddingLeftM}`};
    ${({ paddingBottomM }: any) =>
      !!paddingBottomM && `padding-bottom: ${paddingBottomM}`};

    /* DISPLAY */
    ${({ displayM }: any) => !!displayM && `display: ${displayM}`};

    /* BACKGROUND */
    ${({ theme, backgroundM }: any) =>
      !!backgroundM &&
      `background: ${theme.colors[backgroundM] || backgroundM}`};

    /* BORDER */
    ${({ borderM }: any) => !!borderM && `border: ${borderM}`};
    ${({ borderBottomM }: any) =>
      !!borderBottomM && `border-bottom: ${borderBottomM}`};
    ${({ borderTopM }: any) => !!borderTopM && `border-top: ${borderTopM}`};
    ${({ borderLeftM }: any) => !!borderLeftM && `border-left: ${borderLeftM}`};
    ${({ borderRightM }: any) =>
      !!borderRightM && `border-right: ${borderRightM}`};
    ${({ borderRadiusM }: any) =>
      !!borderRadiusM && `border-radius: ${borderRadiusM}`};
    ${({ theme, borderColorM }: any) =>
      !!borderColorM &&
      `border-color: ${theme.colors[borderColorM] || borderColorM}`};

    /* POSITION */
    ${({ positionM }: any) => !!positionM && `position: ${positionM}`};
    ${({ rightM }: any) => !!rightM && `right: ${rightM}`};
    ${({ leftM }: any) => !!leftM && `left: ${leftM}`};
    ${({ topM }: any) => !!topM && `top: ${topM}`};
    ${({ bottomM }: any) => !!bottomM && `bottom: ${bottomM}`};

    /* TEXT ALIGN */
    ${({ alignM }: any) => !!alignM && `text-align: ${alignM}`};

    /* VERTICAL ALIGN */
    ${({ verticalAlignM }: any) =>
      !!verticalAlignM && `vertical-align: ${verticalAlignM}`};

    /* Z-INDEX */
    ${({ zIndexM }: any) => !!zIndexM && `z-index: ${zIndexM}`};
  }
`;

export default Box;
