import { StyleSheet, Text, View } from 'react-native';

import * as ExpoScreenCaptureIos from '@threls/expo-screen-capture-ios';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoScreenCaptureIos.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
