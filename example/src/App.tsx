import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { RNText } from 'react-native-custom-ui-components';

export default function App() {
  return (
    <View style={styles.container}>
      <RNText title={'Hello World'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
