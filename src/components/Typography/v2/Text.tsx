import * as React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text as NativeText,
  TextStyle,
} from 'react-native';

import type { ThemeProp } from 'src/types';

import { useInternalTheme } from '../../../core/theming';
import { forwardRef } from '../../../utils/forwardRef';

type Props = React.ComponentProps<typeof NativeText> & {
  style?: StyleProp<TextStyle>;
  /**
   * @optional
   */
  theme?: ThemeProp;
};

// @component-group Typography

/**
 * Text component which follows styles from the theme.
 *
 * @extends Text props https://reactnative.dev/docs/text#props
 */
const Text: React.ForwardRefRenderFunction<{}, Props> = (
  { style, theme: overrideTheme, ...rest }: Props,
  ref
) => {
  const root = React.useRef<NativeText | null>(null);
  const theme = useInternalTheme(overrideTheme);

  React.useImperativeHandle(ref, () => ({
    setNativeProps: (args: Object) => root.current?.setNativeProps(args),
  }));

  return (
    <NativeText
      {...rest}
      ref={root}
      style={[
        {
          color: theme.colors?.onSurface,
        },
        styles.text,
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'left',
  },
});

export default forwardRef(Text);
