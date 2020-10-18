const colors = {
  blue: '#1771F7',
  eerieBlack: '#202020',
  jet: '#2B2B2B',
  gunmetal: '#31373D',
  neutral: '#ECECEC',
  platinum: '#EBEBEB',
  white: '#FFFFFF',
  transparent: 'transparent',
};

export const lightColors = {
  primary: colors.blue,
  secondary: colors.eerieBlack,
  tertiary: colors.white,
  fourth: colors.gunmetal,
  transparent: colors.transparent,
  neutral: colors.neutral,
  background: colors.white,
  logo: colors.eerieBlack,
  text: {
    title: colors.eerieBlack,
    subtitle: colors.jet,
  },
  button: {
    flat: {
      background: colors.blue,
      font: colors.white,
      border: colors.transparent,
    },
    outline: {
      background: colors.transparent,
      font: colors.eerieBlack,
      border: colors.eerieBlack,
    },
  },
  input: {
    placeholder: colors.white,
  },
};

export const darkColors = {
  primary: colors.blue,
  secondary: colors.eerieBlack,
  tertiary: colors.white,
  fourth: colors.gunmetal,
  transparent: colors.transparent,
  neutral: colors.neutral,
  background: colors.gunmetal,
  logo: colors.white,
  text: {
    title: colors.white,
    subtitle: colors.platinum,
  },
  button: {
    flat: {
      background: colors.blue,
      font: colors.white,
      border: colors.transparent,
    },
    outline: {
      background: colors.transparent,
      font: colors.white,
      border: colors.white,
    },
  },
  input: {
    placeholder: colors.gunmetal,
  },
};
