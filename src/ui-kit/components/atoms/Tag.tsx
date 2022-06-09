export interface Props {
  text?: string,
  color?: "red" | "orange" | "yellow" | "lime" | "green" | "cyan" | "blue" | "purple" | "pink",
  className?: string,
  children?: any
}

const Tag = ({
  text,
  color,
  children,
  className
}: Props): JSX.Element => (
  <div
    className={`
      uik-tag
      ${!!color ? ('uik-tag--' + color) : ''}
      ${className || ''}
    `}
  >
    <span>{ text }{children}</span>
  </div>
);

export default Tag