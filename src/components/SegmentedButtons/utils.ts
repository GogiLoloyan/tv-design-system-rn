import { ViewStyle } from 'react-native';

import type { InternalTheme } from '../../types';

type BaseProps = {
  theme: InternalTheme;
  disabled?: boolean;
  checked: boolean;
};

type SegmentedButtonProps = {
  checkedColor?: string;
  uncheckedColor?: string;
} & BaseProps;

const DEFAULT_PADDING = 9;

export const getSegmentedButtonDensityPadding = ({
  density,
}: {
  density?: 'regular' | 'small' | 'medium' | 'high';
}) => {
  let padding = DEFAULT_PADDING;

  switch (density) {
    case 'small':
      return padding - 2;
    case 'medium':
      return padding - 4;
    case 'high':
      return padding - 8;
    default:
      return padding;
  }
};

export const getDisabledSegmentedButtonStyle = ({
  index,
  buttons,
}: {
  buttons: { disabled?: boolean }[];
  index: number;
}): ViewStyle => {
  const width = getSegmentedButtonBorderWidth();
  const isDisabled = buttons[index]?.disabled;
  const isNextDisabled = buttons[index + 1]?.disabled;

  if (!isDisabled && isNextDisabled) {
    return {
      borderRightWidth: width,
    };
  }
  return {};
};

export const getSegmentedButtonBorderRadius = ({
  segment,
}: {
  segment?: 'first' | 'last';
}): ViewStyle => {
  if (segment === 'first') {
    return {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      borderRightWidth: 0,
    };
  } else if (segment === 'last') {
    return {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    };
  } else {
    return {
      borderRadius: 0,
      borderRightWidth: 0,
    };
  }
};

const getSegmentedButtonBackgroundColor = ({ checked, theme }: BaseProps) => {
  if (checked) {
    return theme.colors.secondaryContainer;
  }
  return 'transparent';
};

const getSegmentedButtonBorderColor = ({ theme, disabled }: BaseProps) => {
  if (disabled) {
    return theme.colors.surfaceDisabled;
  }
  return theme.colors.outline;
};

const getSegmentedButtonBorderWidth = () => {
  return 1;
};

const getSegmentedButtonTextColor = ({
  theme,
  disabled,
  checked,
  checkedColor,
  uncheckedColor,
}: SegmentedButtonProps) => {
  if (disabled) {
    return theme.colors.onSurfaceDisabled;
  }
  if (checked) {
    return checkedColor ?? theme.colors.onSecondaryContainer;
  }
  return uncheckedColor ?? theme.colors.onSurface;
};

export const getSegmentedButtonColors = ({
  theme,
  disabled,
  checked,
  checkedColor,
  uncheckedColor,
}: SegmentedButtonProps) => {
  const backgroundColor = getSegmentedButtonBackgroundColor({
    theme,
    checked,
  });
  const borderColor = getSegmentedButtonBorderColor({
    theme,
    disabled,
    checked,
  });
  const textColor = getSegmentedButtonTextColor({
    theme,
    disabled,
    checked,
    checkedColor,
    uncheckedColor,
  });
  const borderWidth = getSegmentedButtonBorderWidth();

  return { backgroundColor, borderColor, textColor, borderWidth };
};
