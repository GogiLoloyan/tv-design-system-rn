import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { IconButton, List, MD3Colors } from 'react-native-paper';

import ScreenWrapper from '../ScreenWrapper';

const ButtonExample = () => {
  return (
    <ScreenWrapper contentContainerStyle={styles.container}>
      <List.Section title="Default">
        <View style={styles.row}>
          <IconButton icon="camera" size={24} onPress={() => {}} />
          <IconButton icon="camera" selected size={24} onPress={() => {}} />
          <IconButton icon="camera" disabled size={24} onPress={() => {}} />
          <IconButton icon="camera" size={24} onPress={() => {}} loading />
        </View>
      </List.Section>

      <List.Section title="Contained">
        <View style={styles.row}>
          <IconButton
            icon="camera"
            mode="contained"
            size={24}
            onPress={() => {}}
          />
          <IconButton
            icon="camera"
            mode="contained"
            selected
            size={24}
            onPress={() => {}}
          />
          <IconButton
            icon="camera"
            mode="contained"
            disabled
            size={24}
            onPress={() => {}}
          />
          <IconButton
            icon=""
            mode="contained"
            selected
            loading
            size={24}
            onPress={() => {}}
          />
        </View>
      </List.Section>

      <List.Section title="Outlined">
        <View style={styles.row}>
          <IconButton
            icon="camera-outline"
            mode="outlined"
            size={24}
            onPress={() => {}}
          />
          <IconButton
            selected
            icon="camera"
            mode="outlined"
            size={24}
            onPress={() => {}}
          />
          <IconButton
            icon="camera"
            mode="outlined"
            disabled
            size={24}
            onPress={() => {}}
          />
          <IconButton
            icon=""
            mode="outlined"
            disabled
            size={24}
            onPress={() => {}}
            loading
          />
        </View>
      </List.Section>

      <List.Section title="Custom">
        <View style={styles.row}>
          <IconButton
            icon="lock"
            size={24}
            iconColor={MD3Colors.tertiary50}
            onPress={() => {}}
          />
          <IconButton
            icon="eye"
            mode="contained"
            style={styles.square}
            size={24}
            iconColor={MD3Colors.tertiary50}
            onPress={() => {}}
          />
          <IconButton icon="camera" size={36} onPress={() => {}} />
          <IconButton
            icon="lock"
            size={36}
            onPress={() => {}}
            containerColor={MD3Colors.tertiary60}
          />
          <IconButton icon="heart" size={60} onPress={() => {}} />
          <IconButton icon="" size={60} onPress={() => {}} loading />
        </View>
      </List.Section>
    </ScreenWrapper>
  );
};

ButtonExample.title = 'Icon Button';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
  square: {
    borderRadius: 0,
  },
});

export default ButtonExample;
