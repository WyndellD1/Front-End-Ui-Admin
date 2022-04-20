const colors = {
  lightGray: '#e8e8e8',
  white1: '#f3f1f1',
  secondary: '#6975a7',
  primary: '#823c53',
  primary02: '#883A4F',
  black01: '#444444',
};

// Sample usage: @media ${theme.breakpoints.mobileAndTablet} { ...styling }
const breakpoints = {
  mobile: '(min-width: 320px) and (max-width: 671px)',
  tablet: '(min-width: 672px) and (max-width: 1055px)',
  pc: '(min-width: 1056px)',
  wideScreen: '(min-width: 1400px)',
  mobileAndTablet: '(min-width: 320px) and (max-width: 1055px)',
  landscape: {
    mobile: '(min-height: 320px) and (max-height: 671px)',
    tablet: '(min-height: 672px) and (max-height: 1055px)',
    pc: '(min-height: 1056px)',
    mobileAndTablet: '(min-height: 320px) and (max-height: 1055px)',
  },
};

export default {
  colors,
  breakpoints,
};
