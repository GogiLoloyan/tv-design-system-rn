import { Platform } from 'react-native';

import type { Font } from '../../../types';

const ref = {
  palette: {
    primary100: 'rgba(255, 255, 255, 1)',
    primary99: 'rgba(250, 251, 255, 1)',
    primary95: 'rgba(236, 243, 254, 1)',
    primary90: 'rgba(211, 227, 253, 1)',
    primary80: 'rgba(168, 199, 250, 1)',
    primary70: 'rgba(124, 172, 248, 1)',
    primary60: 'rgba(76, 141, 246, 1)',
    primary50: 'rgba(27, 110, 243, 1)',
    primary40: 'rgba(11, 87, 208, 1)',
    primary30: 'rgba(8, 66, 160, 1)',
    primary20: 'rgba(6, 46, 111, 1)',
    primary10: 'rgba(4, 30, 73, 1)',
    primary0: 'rgba(0, 0, 0, 1)',
    secondary100: 'rgba(255, 255, 255, 1)',
    secondary99: 'rgba(250, 251, 255, 1)',
    secondary95: 'rgba(223, 243, 255, 1)',
    secondary90: 'rgba(194, 231, 255, 1)',
    secondary80: 'rgba(127, 207, 255, 1)',
    secondary70: 'rgba(90, 179, 240, 1)',
    secondary60: 'rgba(57, 152, 211, 1)',
    secondary50: 'rgba(4, 125, 183, 1)',
    secondary40: 'rgba(0, 99, 155, 1)',
    secondary30: 'rgba(0, 74, 119, 1)',
    secondary20: 'rgba(0, 51, 85, 1)',
    secondary10: 'rgba(0, 29, 53, 1)',
    secondary0: 'rgba(0, 0, 0, 1)',
    tertiary100: 'rgba(255, 255, 255, 1)',
    tertiary99: 'rgba(242, 255, 238, 1)',
    tertiary95: 'rgba(231, 248, 237, 1)',
    tertiary90: 'rgba(196, 238, 208, 1)',
    tertiary80: 'rgba(109, 213, 140, 1)',
    tertiary70: 'rgba(55, 190, 95, 1)',
    tertiary60: 'rgba(30, 164, 70, 1)',
    tertiary50: 'rgba(25, 134, 57, 1)',
    tertiary40: 'rgba(20, 108, 46, 1)',
    tertiary30: 'rgba(15, 82, 35, 1)',
    tertiary20: 'rgba(10, 56, 24, 1)',
    tertiary10: 'rgba(7, 39, 17, 1)',
    tertiary0: 'rgba(0, 0, 0, 1)',
    neutral100: 'rgba(255, 255, 255, 1)',
    neutral99: 'rgba(255, 251, 254, 1)',
    neutral95: 'rgba(244, 239, 244, 1)',
    neutral90: 'rgba(230, 225, 229, 1)',
    neutral80: 'rgba(201, 197, 202, 1)',
    neutral70: 'rgba(174, 170, 174, 1)',
    neutral60: 'rgba(147, 144, 148, 1)',
    neutral50: 'rgba(120, 117, 121, 1)',
    neutral40: 'rgba(96, 93, 98, 1)',
    neutral30: 'rgba(72, 70, 73, 1)',
    neutral20: 'rgba(49, 48, 51, 1)',
    neutral10: 'rgba(28, 27, 31, 1)',
    neutral0: 'rgba(0, 0, 0, 1)',
    error100: 'rgba(255, 255, 255, 1)',
    error99: 'rgba(255, 251, 249, 1)',
    error95: 'rgba(252, 238, 238, 1)',
    error90: 'rgba(249, 222, 220, 1)',
    error80: 'rgba(242, 184, 181, 1)',
    error70: 'rgba(236, 146, 142, 1)',
    error60: 'rgba(228, 105, 98, 1)',
    error50: 'rgba(220, 54, 46, 1)',
    error40: 'rgba(179, 38, 30, 1)',
    error30: 'rgba(140, 29, 24, 1)',
    error20: 'rgba(96, 20, 16, 1)',
    error10: 'rgba(65, 14, 11, 1)',
    error0: 'rgba(0, 0, 0, 1)',
    neutralVariant100: 'rgba(255, 255, 255, 1)',
    neutralVariant99: 'rgba(250, 251, 255, 1)',
    neutralVariant95: 'rgba(239, 242, 239, 1)',
    neutralVariant90: 'rgba(225, 227, 225, 1)',
    neutralVariant80: 'rgba(196, 199, 197, 1)',
    neutralVariant70: 'rgba(169, 172, 170, 1)',
    neutralVariant60: 'rgba(142, 145, 143, 1)',
    neutralVariant50: 'rgba(116, 119, 117, 1)',
    neutralVariant40: 'rgba(92, 95, 94, 1)',
    neutralVariant30: 'rgba(68, 71, 70, 1)',
    neutralVariant20: 'rgba(45, 49, 47, 1)',
    neutralVariant10: 'rgba(25, 29, 28, 1)',
    neutralVariant0: 'rgba(0, 0, 0, 1)',
  },

  typeface: {
    brandRegular: Platform.select({
      web: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      ios: 'System',
      default: 'sans-serif',
    }),
    weightRegular: '400' as Font['fontWeight'],

    plainMedium: Platform.select({
      web: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      ios: 'System',
      default: 'sans-serif-medium',
    }),
    weightMedium: '500' as Font['fontWeight'],
  },

  opacity: {
    level1: 0.08,
    level2: 0.12,
    level3: 0.16,
    level4: 0.38,
  },
};

const regularType = {
  fontFamily: ref.typeface.brandRegular,
  letterSpacing: 0,
  fontWeight: ref.typeface.weightRegular,
};

const mediumType = {
  fontFamily: ref.typeface.plainMedium,
  letterSpacing: 0.15,
  fontWeight: ref.typeface.weightMedium,
};

export const typescale = {
  displayLarge: {
    ...regularType,
    lineHeight: 64,
    fontSize: 57,
  },
  displayMedium: {
    ...regularType,
    lineHeight: 52,
    fontSize: 45,
  },
  displaySmall: {
    ...regularType,
    lineHeight: 44,
    fontSize: 36,
  },

  headlineLarge: {
    ...regularType,
    lineHeight: 40,
    fontSize: 32,
  },
  headlineMedium: {
    ...regularType,
    lineHeight: 36,
    fontSize: 28,
  },
  headlineSmall: {
    ...regularType,
    lineHeight: 32,
    fontSize: 24,
  },

  titleLarge: {
    ...regularType,
    lineHeight: 28,
    fontSize: 22,
  },
  titleMedium: {
    ...mediumType,
    lineHeight: 24,
    fontSize: 16,
  },
  titleSmall: {
    ...mediumType,
    letterSpacing: 0.1,
    lineHeight: 20,
    fontSize: 14,
  },

  labelLarge: {
    ...mediumType,
    letterSpacing: 0.1,
    lineHeight: 20,
    fontSize: 14,
  },
  labelMedium: {
    ...mediumType,
    letterSpacing: 0.5,
    lineHeight: 16,
    fontSize: 12,
  },
  labelSmall: {
    ...mediumType,
    letterSpacing: 0.5,
    lineHeight: 16,
    fontSize: 11,
  },

  bodyLarge: {
    ...mediumType,
    fontWeight: ref.typeface.weightRegular,
    fontFamily: ref.typeface.brandRegular,
    lineHeight: 24,
    fontSize: 16,
  },
  bodyMedium: {
    ...mediumType,
    fontWeight: ref.typeface.weightRegular,
    fontFamily: ref.typeface.brandRegular,
    letterSpacing: 0.25,
    lineHeight: 20,
    fontSize: 14,
  },
  bodySmall: {
    ...mediumType,
    fontWeight: ref.typeface.weightRegular,
    fontFamily: ref.typeface.brandRegular,
    letterSpacing: 0.4,
    lineHeight: 16,
    fontSize: 12,
  },

  default: {
    ...regularType,
  },
};

export const tokens = {
  md: {
    ref,
    sys: {
      typescale,
    },
  },
};

export const MD3Colors = ref.palette;
