import * as ExpoScreenCaptureIos from '@threls/expo-screen-capture-ios';
import { ScrollView, View, Text, TextInput } from 'react-native';

export default function App() {
  return (
    <ExpoScreenCaptureIos.ExpoScreenCaptureIosView
      style={{
        display: 'flex',
        flex: 1,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}
    >
      <ScrollView
        style={{
          display: 'flex',
          flex: 1,
          width: '100%',
          backgroundColor: 'orange',
        }}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flex: 1,
        }}
        horizontal
        alwaysBounceVertical
      >
        <View>
          <Text>Hello world</Text>
          <TextInput placeholder='TEXT' />
        </View>
      </ScrollView>
    </ExpoScreenCaptureIos.ExpoScreenCaptureIosView>
  );
}
