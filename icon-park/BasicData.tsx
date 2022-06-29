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

export default function BasicData(props: IconProps) {
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
          <g><path data-follow-fill="currentColor" d="M15.314 11.064a.501.501 0 0 1 .372.932l-7.314 2.932a.988.988 0 0 1-.744 0L.314 11.994a.501.501 0 0 1 .372-.93L8 13.996ZM8 0c1.002 0 1.95.17 2.672.48C11.528.85 12 1.392 12 2.006V7.58l3.686 1.48a.5.5 0 0 1 0 .93l-7.314 2.933a.988.988 0 0 1-.744 0L.314 9.989a.5.5 0 0 1 0-.93L4 7.579V2.006C4 1.389 4.472.849 5.328.481 6.05.17 6.998 0 8 0Zm3 7.38a3.56 3.56 0 0 1-.328.16c-.722.31-1.67.48-2.672.48-1.002 0-1.95-.17-2.672-.48A3.56 3.56 0 0 1 5 7.38v.64c0 .141.227.39.722.603.592.254 1.422.4 2.278.4.856 0 1.686-.146 2.278-.4.347-.15.722-.402.722-.603Zm0-2.006a3.56 3.56 0 0 1-.328.16c-.722.31-1.67.481-2.672.481-1.002 0-1.95-.17-2.672-.48A3.56 3.56 0 0 1 5 5.374v.64c0 .141.227.39.722.603.592.254 1.422.4 2.278.4.856 0 1.686-.146 2.278-.4.347-.15.722-.402.722-.603Zm0-2.005a3.56 3.56 0 0 1-.328.16c-.722.31-1.67.481-2.672.481-1.002 0-1.95-.17-2.672-.48A3.56 3.56 0 0 1 5 3.37v.64c0 .141.227.39.722.603.592.254 1.422.4 2.278.4.856 0 1.686-.146 2.278-.4.347-.15.722-.402.722-.603ZM8 1.003c-.856 0-1.686.145-2.278.399-.347.15-.722.403-.722.603 0 .141.227.39.722.603.592.254 1.422.4 2.278.4.856 0 1.686-.146 2.278-.4.347-.15.722-.402.722-.603 0-.141-.227-.39-.722-.603-.592-.254-1.422-.4-2.278-.4Z" fill={_fill}/></g>
        </svg>
    )
}
