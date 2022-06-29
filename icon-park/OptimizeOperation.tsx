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

export default function OptimizeOperation(props: IconProps) {
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
          viewBox="0 0 16 14"
          preserveAspectRatio="xMidYMid meet"
          fill=""
          role="presentation"
          xmlns="http://www.w3.org/2000/svg"
          className={`${className || ''} ${spin ? styles.spin : ''} ${rtl ? styles.rtl : ''}`.trim()}
          {...rest}
        >
          <g><path data-follow-fill="currentColor" d="M12.948 6.458v.96c-1.075 0-1.977.891-1.977 1.954s.902 1.955 1.977 1.955c1.06 0 1.898-.781 1.972-1.807l.005-.148h.971c0 1.612-1.318 2.915-2.948 2.915S10 10.984 10 9.372c0-1.611 1.318-2.914 2.948-2.914ZM13.077 0c1.028 0 1.846.854 1.918 1.959l.005.159v3.715A4 4 0 0 0 9.987 12l-8.064-.025c-.991 0-1.842-.854-1.918-1.959L0 9.856V2.119C0 .99.806.086 1.782.006L1.923 0h11.154ZM10.73 3.788 6.538 7.494 4.654 5.54a.469.469 0 0 0-.692 0 .538.538 0 0 0 0 .734l2.192 2.28c.077.082.23.163.346.163.115 0 .23-.04.308-.122l4.538-3.991a.53.53 0 0 0 .077-.693c-.154-.285-.461-.326-.692-.122Zm3.188 2.499c1.095 0 2 .815 2.076 1.906l.005.15v.31h-2.393V6.286h.312Zm.347.685v1.029h1.04a1.43 1.43 0 0 0-1.04-1.029ZM4.5 13h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1Z" fill={_fill}/></g>
        </svg>
    )
}
