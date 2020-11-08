const colors = {
  blue: '#1771F7',
  lightBlue: '#F2F5FA',
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
    background: colors.lightBlue,
    color: colors.eerieBlack,
    placeholder: colors.gunmetal,
  },
  checkbox: {
    background: colors.white,
    color: colors.eerieBlack,
    border: colors.platinum,
    placeholder: colors.blue,
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
    background: colors.lightBlue,
    color: colors.eerieBlack,
    placeholder: colors.platinum,
  },
  checkbox: {
    background: colors.white,
    color: colors.eerieBlack,
    border: colors.platinum,
    placeholder: colors.blue,
  },
};
