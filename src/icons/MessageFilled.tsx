// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MessageFilledSvg from '../base/asn/MessageFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MessageFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MessageFilledSvg} />;

MessageFilled.displayName = 'MessageFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MessageFilled);