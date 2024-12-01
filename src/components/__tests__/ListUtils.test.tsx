import { StyleSheet } from 'react-native';

import { getLeftStyles, getRightStyles } from '../List/utils';

const styles = StyleSheet.create({
  leftItem: {
    marginLeft: 0,
    marginRight: 16,
  },
  leftItemV3: {
    marginLeft: 16,
    marginRight: 0,
    alignSelf: 'center',
  },
  rightItem: {
    marginRight: 0,
  },
  rightItemV3: {
    marginLeft: 16,
    marginRight: 0,
    alignSelf: 'center',
  },
});

/**
 * ********************** getLeftStyles ********************** *
 */

it('returns styles for left item without description for V3', () => {
  const style = getLeftStyles(false, false);
  expect(style).toStrictEqual({ ...styles.leftItemV3, marginVertical: 0 });
});

it('returns styles for left item w/ desctiption for V3', () => {
  const style = getLeftStyles(true, true);
  expect(style).toStrictEqual({
    ...styles.leftItemV3,
    alignSelf: 'flex-start',
  });
});

/**
 * ********************** getRightStyles ********************** *
 */

it('returns styles for right item without description for V3', () => {
  const style = getRightStyles(false, false);
  expect(style).toStrictEqual({ ...styles.rightItemV3, marginVertical: 0 });
});

it('returns styles for right item w/ desctiption for V3', () => {
  const style = getRightStyles(true, true);
  expect(style).toStrictEqual({
    ...styles.rightItemV3,
    alignSelf: 'flex-start',
  });
});
