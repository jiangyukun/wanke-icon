// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AlertFilledSvg from '../base/asn/AlertFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AlertFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AlertFilledSvg} />;

AlertFilled.displayName = 'AlertFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AlertFilled);