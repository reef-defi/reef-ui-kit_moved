export interface Props {
  text?: string,
  className?: string,
  children?: any
}

const Label = ({
  text,
  children,
  className
}: Props): JSX.Element => (
  <label
    className={`
      uik-label
      ${className || ''}
    `}
  >{ text }{children}</label>
);

export default Label