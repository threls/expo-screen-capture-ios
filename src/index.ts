import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoScreenCaptureIos.web.ts
// and on native platforms to ExpoScreenCaptureIos.ts
import ExpoScreenCaptureIosModule from './ExpoScreenCaptureIosModule';
import ExpoScreenCaptureIosView from './ExpoScreenCaptureIosView';
import { ChangeEventPayload, ExpoScreenCaptureIosViewProps } from './ExpoScreenCaptureIos.types';

// Get the native constant value.
export const PI = ExpoScreenCaptureIosModule.PI;

export function hello(): string {
  return ExpoScreenCaptureIosModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoScreenCaptureIosModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoScreenCaptureIosModule ?? NativeModulesProxy.ExpoScreenCaptureIos);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoScreenCaptureIosView, ExpoScreenCaptureIosViewProps, ChangeEventPayload };
