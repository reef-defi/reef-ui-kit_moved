export interface Props {
  type?: "good" | "bad",
  direction?: "up" | "down",
  text?: string,
  className?: string,
  children?: any
}

const Trend = ({
  type = "good",
  direction = "up",
  text,
  children,
  className
}: Props): JSX.Element => (
  <div
    className={`
      uik-trend
      uik-trend--${type}
      uik-trend--${direction}
      ${className || ''}
    `}
  >
    <div className="uik-trend__arrow"/>
    {
      !!text &&
      <span className="uik-trend__content">{ text }{children}</span>
    }
  </div>
);

export default Trend