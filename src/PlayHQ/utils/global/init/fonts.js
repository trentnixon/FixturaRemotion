import {
  fontFamily as heeboFontFamily,
  loadFont as loadHeeboFont,
} from '@remotion/google-fonts/Heebo';
import {
  fontFamily as robotoFontFamily,
  loadFont as loadRobotoFont,
} from '@remotion/google-fonts/RobotoCondensed';
import {
  fontFamily as alfaSlabOneFontFamily,
  loadFont as loadAlfaSlabOneFont,
} from '@remotion/google-fonts/AlfaSlabOne';

const fonts = {
  heebo: {
    fontFamily: heeboFontFamily,
    loadFont: loadHeeboFont,
    fontOptions: {
      weights: ['200', '400', '600', '800', '900'],
      subsets: ['latin'],
    },
  },
  robotoCondensed: {
    fontFamily: robotoFontFamily,
    loadFont: loadRobotoFont,
    fontOptions: {
      weights: ['300', '400', '700'],
      subsets: ['latin'],
    },
  },
  alfaSlabOne: {
    fontFamily: alfaSlabOneFontFamily,
    loadFont: loadAlfaSlabOneFont,
    fontOptions: {
      weights: ['400'],
      subsets: ['latin'],
    },
  },
  // Add more fonts here as needed
};

export default fonts;
