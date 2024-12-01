import { FlexAlignType, ColorValue, StyleSheet } from 'react-native';

import color from 'color';
import type { InternalTheme } from 'src/types';

export type Style = {
  marginLeft?: number;
  marginRight?: number;
  marginVertical?: number;
  alignSelf?: FlexAlignType;
};

export const getLeftStyles = (alignToTop: boolean, description: boolean) => {
  const commonStyles = {
    marginRight: 0,
    marginLeft: 16,
    alignSelf: (alignToTop ? 'flex-start' : 'center') as FlexAlignType,
  };

  if (!description) {
    return {
      ...styles.iconMarginLeft,
      ...styles.marginVerticalNone,
      ...commonStyles,
    };
  }

  return {
    ...styles.iconMarginLeft,
    ...commonStyles,
  };
};

export const getRightStyles = (alignToTop: boolean, description: boolean) => {
  const commonStyles = {
    marginLeft: 16,
    alignSelf: (alignToTop ? 'flex-start' : 'center') as FlexAlignType,
  };

  if (!description) {
    return {
      ...styles.iconMarginRight,
      ...styles.marginVerticalNone,
      ...commonStyles,
    };
  }

  return {
    ...styles.iconMarginRight,
    ...commonStyles,
  };
};

const styles = StyleSheet.create({
  marginVerticalNone: { marginVertical: 0 },
  iconMarginLeft: { marginLeft: 0, marginRight: 16 },
  iconMarginRight: { marginRight: 0 },
});

export const getAccordionColors = ({
  theme,
  isExpanded,
  customRippleColor,
}: {
  theme: InternalTheme;
  isExpanded?: boolean;
  customRippleColor?: ColorValue;
}) => {
  const titleColor = theme.colors.onSurface;

  const descriptionColor = theme.colors.onSurfaceVariant;

  const titleTextColor = isExpanded ? theme.colors?.primary : titleColor;

  const rippleColor =
    customRippleColor || color(titleTextColor).alpha(0.12).rgb().string();

  return {
    titleColor,
    descriptionColor,
    titleTextColor,
    rippleColor,
  };
};
