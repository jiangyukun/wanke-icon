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

export default function StationMonitor(props: IconProps) {
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
          viewBox="0 0 16 16"
          preserveAspectRatio="xMidYMid meet"
          fill=""
          role="presentation"
          xmlns="http://www.w3.org/2000/svg"
          className={`${className || ''} ${spin ? styles.spin : ''} ${rtl ? styles.rtl : ''}`.trim()}
          {...rest}
        >
          <g><path data-follow-fill="currentColor" d="M7.5 0a2.5 2.5 0 0 1 2.495 2.336L10 2.5V4h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2.5A2.5 2.5 0 0 1 2.336.005L2.5 0h5Zm5.854 10.147a.5.5 0 0 0-.707-.001l-1.528 1.521-.64-.64-.07-.058a.5.5 0 0 0-.637.057l-1.125 1.12-.058.069a.5.5 0 0 0 .057.638l.069.058a.5.5 0 0 0 .638-.057l.771-.768.64.64.07.059a.5.5 0 0 0 .637-.057l1.882-1.874.058-.069a.5.5 0 0 0-.057-.638ZM5.5 10h-2l-.09.008A.5.5 0 0 0 3.5 11h2l.09-.008A.5.5 0 0 0 5.5 10Zm0-3h-2l-.09.008A.5.5 0 0 0 3.5 8h2l.09-.008A.5.5 0 0 0 5.5 7Zm2-6h-5a1.5 1.5 0 0 0-1.493 1.356L1 2.5v1.768A1.99 1.99 0 0 1 2 4h6.995L9 2.5a1.5 1.5 0 0 0-1.356-1.493L7.5 1Zm-2 1a.5.5 0 0 1 .09.992L5.5 3h-2a.5.5 0 0 1-.09-.992L3.5 2h2Z" fill={_fill}/></g>
        </svg>
    )
}
