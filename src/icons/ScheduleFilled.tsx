// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ScheduleFilledSvg from '../base/asn/ScheduleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ScheduleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ScheduleFilledSvg} />;

ScheduleFilled.displayName = 'ScheduleFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ScheduleFilled);