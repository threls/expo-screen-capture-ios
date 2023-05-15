import * as React from 'react';

import { ExpoScreenCaptureIosViewProps } from './ExpoScreenCaptureIos.types';

export default function ExpoScreenCaptureIosView(props: ExpoScreenCaptureIosViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
