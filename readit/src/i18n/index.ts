import { homeEn, homePt } from './home';
import { navbarEn, navbarPt } from './navbar';

export default {
  pt: {
    translation: {
      home: {
        ...homePt,
      },
      navbar: {
        ...navbarPt,
      },
    },
  },
  en: {
    translation: {
      home: {
        ...homeEn,
      },
      navbar: {
        ...navbarEn,
      },
    },
  },
};
