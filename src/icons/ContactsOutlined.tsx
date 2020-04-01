// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ContactsOutlinedSvg from '../base/asn/ContactsOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ContactsOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ContactsOutlinedSvg} />;

ContactsOutlined.displayName = 'ContactsOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ContactsOutlined);