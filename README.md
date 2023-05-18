# @threls/expo-screen-capture-ios

A simple expo module used to prevent screen capture on iOS devices.
It does this by layering a transparent Secure UITextField over the application, then by design a secure textfield does not get captured in a screenshot, instead it creates a white foreground.
This means that the content of the app is blocked from the screenshot.

# Add the package to your npm dependencies

```
npm install @threls/expo-screen-capture-ios
```
or 
```
yarn add @threls/expo-screen-capture-ios
```

Then you will need to wrap any component that you do not want to allow screenshots, within the `ExpoScreenCaptureIosView` component.

```ts
import { ExpoScreenCaptureIosView } from '@threls/expo-screen-capture-ios';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <ExpoScreenCaptureIosView
      style={{
        display: 'flex',
        flex: 1,
      }}
    >
        <View>
          <Text>Hello world</Text>
        </View>
    </ExpoScreenCaptureIosView>
  );
}
```

# Contributing

Any contribution or improvement of the code is greatly appreciated. 
The steps taken to create our module can be followed on the [Expo Modules API Documentation](https://docs.expo.dev/modules/get-started/).

Please follow the below steps to setup your project for development or debugging and issue you may find.

## Prerequisites

To be able to run this project, you'll need to have node installed, together with Cocoapods.
In order to build the example, you will need and active Apple development team account.

## 📦 Download and Setup

First go ahead and clone the repository, then to get things start

```
git clone https://github.com/threls/expo-screen-capture-ios
```

Then you can proceed to the example folder to install, build and start our example project.

Lets move into the example folder and install the example's iOS dependencies using pods.

```
cd ./expo-screen-capture-ios/example
npx pod-install
```

From there you can then either modify the example or module's code in your favourite IDE or you can open the [exposcreencaptureiosexample.xcworkspace](./example/ios/exposcreencaptureiosexample.xcworkspace) file in Xcode. There you should be able to easily build and run the application on your device.