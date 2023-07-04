var tinycolor = require("tinycolor2");

/* Color functions, move to Actions/Utils */
export function getContrastColor(hexColor,COLORS={white:'#ffffff',dark:'#111111'}) {
    const bgColorObj = tinycolor(hexColor);
    return bgColorObj.isDark() ? COLORS.white : COLORS.dark;
  }

  export const lightenColor = (color) => {
    const darkColor = tinycolor(color).lighten(10); // darken the color by 10%
    return darkColor.toHexString(); // return the color as a hex string
  };

  export const darkenColor = (color) => {
    const darkColor = tinycolor(color).darken(10); // darken the color by 10%
    return darkColor.toHexString(); // return the color as a hex string
  };

  /*. END COLORS */