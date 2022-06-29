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

export default function MonographicAnalysis(props: IconProps) {
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
          <g><path data-follow-fill="currentColor" d="M8.452 0v6.68l4.73-4.724A6.671 6.671 0 0 0 8.451 0Zm6.66 7.925a6.235 6.235 0 0 0-1.588-4.173L9.306 7.934l4.18 4.206a6.217 6.217 0 0 0 1.627-4.215Zm.888 0a7.111 7.111 0 0 1-2.204 5.17l-.314.301L8.05 7.93l5.481-5.436.312.306A7.125 7.125 0 0 1 16 7.925Zm-8.769.943 5.11 4.995A7.193 7.193 0 0 1 7.214 16C3.232 16 0 12.773 0 8.794c0-3.98 3.232-7.206 7.22-7.206h.011v7.28Z" fill={_fill}/></g>
        </svg>
    )
}
