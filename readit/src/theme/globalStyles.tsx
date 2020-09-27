import { createGlobalStyle } from 'styled-components';

import FiraSans from '../assets/fonts/FiraSans-Regular.ttf';
import Poppins from '../assets/fonts/Poppins-Bold.ttf';
import PoppinsSemiBold from '../assets/fonts/Poppins-SemiBold.ttf';

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Poppins';
    font-style: bold;
    font-weight: 400;
    src: local('Poppins'), local('Poppins'),
      /* Modern Browsers */ url(${Poppins})
        format('truetype');
  }

  @font-face {
    font-family: 'Poppins-SemiBold';
    font-style: bold;
    font-weight: 400;
    src: local('Poppins-SemiBold'), local('Poppins-SemiBold'),
      /* Modern Browsers */ url(${PoppinsSemiBold})
        format('truetype');
  }

  @font-face {
    font-family: 'FiraSans';
    font-style: bold;
    font-weight: 400;
    src: local('FiraSans'), local('FiraSans'),
      /* Modern Browsers */ url(${FiraSans})
        format('truetype');
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins-SemiBold';
    background: #FFF;
    height: 100vh;
  }
`;

export default GlobalStyle;
