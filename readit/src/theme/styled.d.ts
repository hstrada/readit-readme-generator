import 'styled-components';

import colors from './colors';

import units from './units';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    units: typeof units;

    colors: typeof colors;
  }
}
