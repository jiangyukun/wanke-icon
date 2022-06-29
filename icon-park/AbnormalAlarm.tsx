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

export default function AbnormalAlarm(props: IconProps) {
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
          viewBox="0 0 16 13"
          preserveAspectRatio="xMidYMid meet"
          fill=""
          role="presentation"
          xmlns="http://www.w3.org/2000/svg"
          className={`${className || ''} ${spin ? styles.spin : ''} ${rtl ? styles.rtl : ''}`.trim()}
          {...rest}
        >
          <g><path data-follow-fill="currentColor" d="M12.64 6.74c-1.714.166-3.02 1.586-3.023 3.285 0 .968.425 1.84 1.101 2.443H1.783a1.788 1.788 0 0 1-1.559-.905A1.738 1.738 0 0 1 .27 9.78L5.91.83A1.79 1.79 0 0 1 7.427 0a1.79 1.79 0 0 1 1.515.835L12.64 6.74ZM7.046 8.257c.066.193.197.323.394.323.196 0 .328-.13.394-.323l.263-3.56a.654.654 0 0 0-.657-.649c-.394 0-.656.324-.656.712l.262 3.497Zm.394.97c-.394 0-.656.26-.656.648s.262.647.656.647.657-.26.657-.647c0-.389-.263-.647-.657-.647ZM12.973 13a3.043 3.043 0 0 1-2.137-.87 2.96 2.96 0 0 1-.888-2.105 2.96 2.96 0 0 1 .888-2.106 3.043 3.043 0 0 1 2.137-.87 3.043 3.043 0 0 1 2.139.87A2.96 2.96 0 0 1 16 10.024a2.96 2.96 0 0 1-.888 2.106 3.043 3.043 0 0 1-2.139.869Zm-1.087-1.431.248-.26c.114.063.272.11.348.146v.369c0 .115.125.21.243.21h.425c.118 0 .243-.094.243-.21v-.37c.076-.035.234-.083.346-.147l.257.261a.211.211 0 0 0 .297 0l.3-.297a.209.209 0 0 0 0-.297l-.265-.246c.064-.11.113-.265.149-.341h.374c.118 0 .214-.122.214-.24v-.419c0-.117-.095-.238-.214-.238h-.374c-.036-.076-.086-.23-.15-.343l.266-.253a.205.205 0 0 0 0-.293l-.302-.295a.212.212 0 0 0-.301.002l-.25.26c-.113-.064-.27-.112-.347-.147v-.37c0-.115-.124-.209-.243-.209h-.424c-.12 0-.244.094-.244.21v.37c-.076.034-.234.084-.348.146l-.256-.26a.21.21 0 0 0-.297 0l-.3.297a.207.207 0 0 0 .002.296l.264.247c-.065.111-.114.266-.15.34h-.373c-.118 0-.214.122-.214.24v.42c0 .115.096.239.214.239h.375c.034.075.084.23.149.341l-.265.253a.206.206 0 0 0 0 .294l.302.295c.084.08.218.08.3-.002h.001v.001Zm1.052-2.576c.342 0 .66.18.83.472a.935.935 0 0 1 .002.946.962.962 0 0 1-.83.474.952.952 0 0 1-.96-.945c0-.522.428-.946.958-.946v-.001Z" fill={_fill}/></g>
        </svg>
    )
}
