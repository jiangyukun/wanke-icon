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

export default function FmMonitoring(props: IconProps) {
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
          viewBox="0 0 14 16"
          preserveAspectRatio="xMidYMid meet"
          fill=""
          role="presentation"
          xmlns="http://www.w3.org/2000/svg"
          className={`${className || ''} ${spin ? styles.spin : ''} ${rtl ? styles.rtl : ''}`.trim()}
          {...rest}
        >
          <g><path data-follow-fill="currentColor" d="m7.427 9.406.086.074 5.204 5.138c.268.256.326.67.138.992a.77.77 0 0 1-.811.376l-.105-.028L7 14.53l-4.978 1.428-.105.008-.21-.014a.781.781 0 0 1-.62-.49.815.815 0 0 1 .102-.786l.079-.09L6.432 9.48a.763.763 0 0 1 .995-.074ZM14 6.91a6.822 6.822 0 0 1-.653 2.944.779.779 0 0 1-.646.468.771.771 0 0 1-.711-.353.815.815 0 0 1-.043-.81 5.2 5.2 0 0 0 .497-2.25C12.368 3.904 9.932 1.527 7 1.598a5.434 5.434 0 0 0-3.889 1.596 5.244 5.244 0 0 0-1.555 3.742c0 .759.164 1.508.482 2.194.144.26.134.58-.025.83a.771.771 0 0 1-.73.358.78.78 0 0 1-.645-.502A6.822 6.822 0 0 1 0 6.943a6.844 6.844 0 0 1 2.038-4.915A6.96 6.96 0 0 1 7 0c3.791-.071 6.923 3.02 7 6.91ZM7 2.626c2.333-.018 4.246 1.892 4.293 4.285a4.274 4.274 0 0 1-.513 2.05.782.782 0 0 1-.466.38.76.76 0 0 1-.592-.069.81.81 0 0 1-.28-1.085c.212-.387.322-.824.32-1.268C9.718 5.394 8.485 4.19 7 4.222a2.777 2.777 0 0 0-2.007.806 2.65 2.65 0 0 0-.777 1.899c-.001.423.1.84.295 1.212a.828.828 0 0 1-.033.81.784.784 0 0 1-.7.375.788.788 0 0 1-.667-.435c-.863-1.66-.545-3.707.778-5.01A4.304 4.304 0 0 1 7 2.626ZM6.94 6.08c.518 0 .937.43.937.96S7.457 8 6.94 8a.948.948 0 0 1-.936-.96c0-.53.419-.96.936-.96Z" fill={_fill}/></g>
        </svg>
    )
}
