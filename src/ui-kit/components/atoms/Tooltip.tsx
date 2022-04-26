export interface Props {
  text?: string,
  position?: "bottom" | "left" | "right",
  delay?: number,
  className?: string,
  children?: any
}

const Card = ({
  text,
  position,
  children,
  delay,
  className
}: Props): JSX.Element => (
  <div
  className={`
      uik-tooltip
      ${position === 'bottom' ? 'uik-tooltip--bottom' : ''}
      ${position === 'left' ? 'uik-tooltip--left' : ''}
      ${position === 'right' ? 'uik-tooltip--right' : ''}
      ${className || ''}
    `}
  >
    { children }
    <div
      className="uik-tooltip__tooltip-wrapper"
      style={{
        '--delay': `${delay !== undefined ? delay : 0.5}s`
      } as React.CSSProperties}
    >
        <div className="uik-tooltip__tooltip">
            <div className="uik-tooltip__tooltip-text">{ text }</div>
        </div>
    </div>
  </div>
);

export default Card