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

export default function TreeClose(props: IconProps) {
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
          <g><path data-follow-fill="currentColor" d="M5.412 0c.858 0 1.656.462 2.07 1.154h5.206c1.3 0 2.366 1.038 2.366 2.308v.461c.562.433.946 1.096.946 1.846v6.923C16 13.962 14.935 15 13.634 15H2.366C1.065 15 0 13.962 0 12.692V2.308C0 1.038 1.065 0 2.366 0h3.046Zm2.869 10.962H3.549a.586.586 0 0 0-.592.576c0 .318.267.577.592.577h4.732c.325 0 .591-.26.591-.577a.586.586 0 0 0-.591-.576Zm4.407-8.654h-4.85l.118.346c.148.49.62.808 1.123.808h4.792c0-.635-.533-1.154-1.183-1.154Z" fill={_fill}/></g>
        </svg>
    )
}
