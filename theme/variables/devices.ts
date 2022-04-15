type TDevice =
  | 'mobileS'
  | 'mobile'
  | 'mobileL'
  | 'tablet'
  | 'laptop'
  | 'desktop'
  | 'mobileMin'
  | 'tabletMin'
  | 'laptopMin';

type TBreakpoints = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'getSizeNumber';

export const breakpoints: Record<TBreakpoints, any> = {
  xs: '575px',
  s: '576px',
  m: '767px',
  l: '992px',
  xl: '1300px',
  xxl: '1600px',
  getSizeNumber: (size) => {
    switch (size) {
      case 'xs':
        return 575;
      case 's':
        return 576;
      case 'm':
        return 767;
      case 'l':
        return 992;
      case 'xl':
        return 1300;
      case 'xxl':
        return 1600;
      default:
        return '100%';
    }
  },
};

const device: Record<TDevice, string> = {
  mobileS: `only screen and (max-width: ${breakpoints.getSizeNumber('xs')}px)`,
  mobile: `only screen and (max-width: ${breakpoints.s})`,
  mobileL: `only screen and (max-width: ${breakpoints.m})`,
  tablet: `only screen and (max-width: ${breakpoints.l})`,
  laptop: `only screen and (max-width: ${breakpoints.xl})`,
  desktop: `only screen and (min-width: ${
    breakpoints.getSizeNumber('xl') + 1
  }px)`,
  mobileMin: `only screen and (min-width: ${breakpoints.s})`,
  tabletMin: `only screen and (min-width: ${breakpoints.l})`,
  laptopMin: `only screen and (min-width: ${breakpoints.xl})`,
};

export default device;
