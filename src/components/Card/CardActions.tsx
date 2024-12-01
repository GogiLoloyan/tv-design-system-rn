import * as React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import type { ThemeProp } from 'src/types';

export type Props = React.ComponentPropsWithRef<typeof View> & {
  /**
   * Items inside the `CardActions`.
   */
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  theme?: ThemeProp;
};

/**
 * A component to show a list of actions inside a Card.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Card, Button } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Card>
 *     <Card.Actions>
 *       <Button>Cancel</Button>
 *       <Button>Ok</Button>
 *     </Card.Actions>
 *   </Card>
 * );
 *
 * export default MyComponent;
 * ```
 */
const CardActions = (props: Props) => {
  const justifyContent = 'flex-end';

  return (
    <View
      {...props}
      style={[styles.container, props.style, { justifyContent }]}
    >
      {React.Children.map(props.children, (child, i) => {
        return React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<any>, {
              compact: false,
              mode: child.props.mode || (i === 0 ? 'outlined' : 'contained'),
              style: [styles.button, child.props.style],
            })
          : child;
      })}
    </View>
  );
};

CardActions.displayName = 'Card.Actions';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  button: {
    marginLeft: 8,
  },
});

export default CardActions;
