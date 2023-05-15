import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoScreenCaptureIosViewProps } from './ExpoScreenCaptureIos.types';

const NativeView: React.ComponentType<ExpoScreenCaptureIosViewProps> =
  requireNativeViewManager('ExpoScreenCaptureIos');

export default function ExpoScreenCaptureIosView(props: ExpoScreenCaptureIosViewProps) {
  return <NativeView {...props} />;
}
