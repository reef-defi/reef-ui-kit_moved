export interface Props {
  className?: string,
  children?: any
}

const Form = ({
  children,
  className
}: Props): JSX.Element => (
  <form
    className={`
      uik-form
      ${className || ''}
    `}
  >{children}</form>
);

export default Form