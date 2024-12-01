import React from 'react';
import type { ColorValue, StyleProp, ViewStyle } from 'react-native';
import { StyleSheet, Animated } from 'react-native';

import { white } from '../../styles/themes/v2/colors';
import type { InternalTheme, ThemeProp } from '../../types';

export type AppbarModes = 'small' | 'medium' | 'large' | 'center-aligned';

const borderStyleProperties = [
  'borderRadius',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderBottomRightRadius',
  'borderBottomLeftRadius',
];

export const getAppbarBackgroundColor = (
  theme: InternalTheme,
  customBackground?: ColorValue,
  elevated?: boolean
) => {
  const { colors } = theme;
  if (customBackground) {
    return customBackground;
  }

  if (elevated) {
    return theme.colors.elevation.level2;
  }

  return colors.surface;
};

export const getAppbarColor = ({
  color,
  isDark,
}: BaseProps & { color: string }) => {
  if (typeof color !== 'undefined') {
    return color;
  }

  if (isDark) {
    return white;
  }

  return undefined;
};

export const getAppbarBorders = (
  style:
    | Animated.Value
    | Animated.AnimatedInterpolation<string | number>
    | Animated.WithAnimatedObject<ViewStyle>
) => {
  const borders: Record<string, number> = {};

  for (const property of borderStyleProperties) {
    const value = style[property as keyof typeof style];
    if (value) {
      borders[property] = value;
    }
  }

  return borders;
};

type BaseProps = {
  isDark: boolean;
};

type RenderAppbarContentProps = BaseProps & {
  children: React.ReactNode;
  shouldCenterContent?: boolean;
  renderOnly?: (string | boolean)[];
  renderExcept?: string[];
  mode?: AppbarModes;
  theme?: ThemeProp;
};

export const DEFAULT_APPBAR_HEIGHT = 56;
const MD3_DEFAULT_APPBAR_HEIGHT = 64;

export const modeAppbarHeight = {
  small: MD3_DEFAULT_APPBAR_HEIGHT,
  medium: 112,
  large: 152,
  'center-aligned': MD3_DEFAULT_APPBAR_HEIGHT,
};

export const modeTextVariant = {
  small: 'titleLarge',
  medium: 'headlineSmall',
  large: 'headlineMedium',
  'center-aligned': 'titleLarge',
} as const;

export const renderAppbarContent = ({
  children,
  isDark,
  shouldCenterContent = false,
  renderOnly,
  renderExcept,
  mode = 'small',
  theme,
}: RenderAppbarContentProps) => {
  return React.Children.toArray(children as React.ReactNode | React.ReactNode[])
    .filter((child) => child != null && typeof child !== 'boolean')
    .filter((child) =>
      // @ts-expect-error: TypeScript complains about the type of type but it doesn't matter
      renderExcept ? !renderExcept.includes(child.type.displayName) : child
    )
    .filter((child) =>
      // @ts-expect-error: TypeScript complains about the type of type but it doesn't matter
      renderOnly ? renderOnly.includes(child.type.displayName) : child
    )
    .map((child, i) => {
      if (
        !React.isValidElement(child) ||
        ![
          'Appbar.Content',
          'Appbar.Action',
          'Appbar.BackAction',
          'Tooltip',
        ].includes(
          // @ts-expect-error: TypeScript complains about the type of type but it doesn't matter
          child.type.displayName
        )
      ) {
        return child;
      }

      const props: {
        color?: string;
        style?: StyleProp<ViewStyle>;
        mode?: AppbarModes;
        theme?: ThemeProp;
      } = {
        theme,
        color: getAppbarColor({ color: child.props.color, isDark }),
      };

      // @ts-expect-error: TypeScript complains about the type of type but it doesn't matter
      if (child.type.displayName === 'Appbar.Content') {
        props.mode = mode;
        props.style = [
          i === 0 && !shouldCenterContent && styles.spacing,
          shouldCenterContent && styles.centerAlignedContent,
          child.props.style,
        ];
        props.color;
      }
      return React.cloneElement(child, props);
    });
};

const styles = StyleSheet.create({
  centerAlignedContent: {
    alignItems: 'center',
  },
  spacing: {
    marginLeft: 12,
  },
});
