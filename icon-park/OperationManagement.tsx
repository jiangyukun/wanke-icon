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

export default function OperationManagement(props: IconProps) {
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
          <g><path data-follow-fill="currentColor" d="M8 0 5.715 1.155v3.46L8 5.77l2.285-1.153V1.155L8 0Zm3.428 3.243v1.273l1.143.539v2.322l.638-.318.506-.252v-1.75c0-.447-.256-.853-.656-1.044l-1.631-.77Zm-6.857.055-1.607.726a1.151 1.151 0 0 0-.676 1.052v1.731l.504.252.639.318v-2.3l1.142-.516-.002-1.263ZM2.285 8.093 0 9.232v3.46l2.285 1.17 2.286-1.17v-3.46l-2.286-1.14Zm11.43 0-2.287 1.139v3.46l2.287 1.17L16 12.692v-3.46l-2.285-1.14Zm-8 4.692v.616l-.628.321-.075.04 2.599 1.17c.251.09.526.09.777 0l2.608-1.172-.083-.043-.628-.322v-.61L8 13.846l-2.285-1.06Z" fill={_fill}/></g>
        </svg>
    )
}
