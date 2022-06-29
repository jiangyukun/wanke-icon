import React, { useEffect, useRef } from 'react';
import styles from './style.css';
interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: string | number;
    width?: string | number;
    height?: string | number;
    spin?: boolean;
    rtl?: boolean;
    color?: string;
    fill?: string;
    stroke?: string;
}

export default function OperationMaintenanca(props: IconProps) {
    const root = useRef<SVGSVGElement>(null)
    const { size = '1em', width, height, spin, rtl, color, fill, stroke, className, ...rest } = props;
    const _width = width || size;
    const _height = height || size;
    const _stroke = stroke || color;
    const _fill = fill || color;
    useEffect(() => {
      if (!_fill) {
        (root.current as SVGSVGElement)?.querySelectorAll('[data-follow-fill]').forEach(item => {
          item.setAttribute('fill', item.getAttribute('data-follow-fill') || '')
        })
      }
      if (!_stroke) {
        (root.current as SVGSVGElement)?.querySelectorAll('[data-follow-stroke]').forEach(item => {
          item.setAttribute('stroke', item.getAttribute('data-follow-stroke') || '')
        })
      }
    }, [stroke, color, fill])
    return (
        <svg
          ref={root}
          width={_width} 
          height={_height}
          viewBox="0 0 16 15"
          preserveAspectRatio="xMidYMid meet"
          fill=""
          role="presentation"
          xmlns="http://www.w3.org/2000/svg"
          className={`${className || ''} ${spin ? styles.spin : ''} ${rtl ? styles.rtl : ''}`.trim()}
          {...rest}
        >
          <g><path data-follow-fill="currentColor" d="M9.22 13.421C9.967 14.384 11.114 15 12.4 15H2a.795.795 0 0 1-.803-.76.793.793 0 0 1 .743-.817l.06-.002h7.22Zm3.58-5.526c1.143 0 2.2.602 2.771 1.579a3.12 3.12 0 0 1 0 3.158A3.208 3.208 0 0 1 12.8 14.21c-1.767 0-3.2-1.414-3.2-3.158s1.433-3.158 3.2-3.158ZM13.6 0C14.925 0 16 1.06 16 2.368v5.704a4.416 4.416 0 0 0-3.2-1.361c-2.43 0-4.4 1.944-4.4 4.342 0 .557.106 1.09.3 1.579H2.4c-1.325 0-2.4-1.06-2.4-2.369V2.368C0 1.06 1.075 0 2.4 0h11.2Zm-1.2 9.868a.398.398 0 0 0-.397.349l-.003.046v1.58c0 .2.152.368.353.391l.047.003H14a.398.398 0 0 0 .399-.372.396.396 0 0 0-.352-.415L14 11.447h-1.2v-1.184a.397.397 0 0 0-.4-.395Zm1.2-8.29H2.4a.796.796 0 0 0-.798.731l-.002.06v7.894c0 .413.323.757.74.788l.06.002h4.4c0-3.23 2.619-5.854 5.874-5.92l.126-.001c.54 0 1.068.07 1.574.206l.026.007V2.368a.793.793 0 0 0-.679-.78l-.061-.007-.06-.002ZM4.712 8.812a.568.568 0 1 1 0 1.136H3.544a.568.568 0 0 1 0-1.136h1.168Zm1.552-3.707a.93.93 0 0 1 .79.41c.087.135.155.281.2.434.053.163.09.33.11.5a4.6 4.6 0 0 1 .028.537.94.94 0 0 1-.215.62.656.656 0 0 1-.521.258H3.712a.654.654 0 0 1-.52-.259.942.942 0 0 1-.216-.62 4.366 4.366 0 0 1 .03-.536c.02-.17.056-.34.109-.505a1.69 1.69 0 0 1 .201-.428.939.939 0 0 1 .79-.41 1.52 1.52 0 0 0 1.078.424c.405.005.795-.148 1.08-.425Zm-1.08-2.546a1.3 1.3 0 0 1 .936.374c.253.235.394.56.389.9.005.338-.136.664-.389.899a1.302 1.302 0 0 1-.936.373 1.302 1.302 0 0 1-.936-.373 1.203 1.203 0 0 1-.389-.9 1.203 1.203 0 0 1 .389-.9c.245-.243.584-.378.936-.373Z" fill={_fill}/></g>
        </svg>
    )
}
