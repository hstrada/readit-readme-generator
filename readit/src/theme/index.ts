import { DefaultTheme } from 'styled-components';

import { lightColors, darkColors } from './colors';

import units from './units';

import fonts from './fonts';

const readitLightTheme: DefaultTheme = {
  colors: lightColors,
  units: units,
  fonts: fonts,
};

const readitDarkTheme: DefaultTheme = {
  colors: darkColors,
  units: units,
  fonts: fonts,
};

export { readitLightTheme, readitDarkTheme };
