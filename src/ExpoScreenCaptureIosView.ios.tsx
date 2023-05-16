import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';
import { ViewProps } from 'react-native';

export type Props = ViewProps;

const NativeView: React.ComponentType<Props> = requireNativeViewManager(
  'ExpoScreenCaptureIos'
);

export default function ExpoScreenCaptureIosView(props: Props) {
  return <NativeView {...props} />;
}
