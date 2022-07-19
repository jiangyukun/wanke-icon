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

export default function TreeOpen(props: IconProps) {
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
          <g><path data-follow-fill="currentColor" d="m1.167 9.36.862-2.66c.142-.444.554-.75 1.026-.75h11.87A1.079 1.079 0 0 1 16 7.029l-2.048 6.342c-.162.41-.558.688-1.007.688H1.078A1.08 1.08 0 0 1 0 12.98V1.08C0 .484.483 0 1.078 0h4.945C6.618 0 7.1.484 7.1 1.08c0 .498.404.903.9.903h4.946a1.08 1.08 0 0 1 1.078 1.08v2.072h-1.167V3.153H8A2.069 2.069 0 0 1 5.936 1.17h-4.77v8.19Z" fill={_fill}/></g>
        </svg>
    )
}
