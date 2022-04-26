import colors from './colors';
import device, { breakpoints } from './devices';

const Variables = (theme, language) => {
  return {
    colors: colors(theme),
    device: device,
    breakpoints: breakpoints,
    language: language,
  };
};

export default Variables;
