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

export default function Home(props: IconProps) {
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
          <g><path data-follow-fill="currentColor" d="m9.246.508 6.45 6.263a1 1 0 0 1-.695 1.718H13.99v4.5a2 2 0 0 1-1.999 2H3.997a2 2 0 0 1-1.998-2v-4.5h-1A1 1 0 0 1 .304 6.77L6.742.508a1.798 1.798 0 0 1 2.504 0Zm-.486 6.02h-.836c-.07 0-.174.078-.174.153L6.775 9.49c-.034.077 0 .152.034.192a.188.188 0 0 0 .174.115h1.011l-.904 2.654c0 .037 0 .077.034.077h.104l2.473-3.461c.07-.078.07-.153.034-.23-.07-.116-.14-.156-.211-.156H8.341l.628-1.845c.034-.077 0-.152-.034-.192a.188.188 0 0 0-.175-.116Z" fill={_fill}/></g>
        </svg>
    )
}
