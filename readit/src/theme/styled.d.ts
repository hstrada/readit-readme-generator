import 'styled-components';

import colors from './colors';

import units from './units';

import fonts from './fonts';

declare module 'styled-components' {
  export interface DefaultTheme {
    units: typeof units;

    colors: typeof colors;

    fonts: typeof fonts;
  }
}
