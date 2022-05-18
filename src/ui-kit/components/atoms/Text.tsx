export interface Props {
  text?: string,
  type?: "headline" | "title" | "light" | "lead" | "mini",
  className?: string,
  children?: any
}

const Text = ({
  text,
  type,
  className,
  children
}: Props): JSX.Element => (
  <div
    className={`
      uik-text
      ${type === 'headline' ? 'uik-text--headline' : ''}
      ${type === 'title' ? 'uik-text--title' : ''}
      ${type === 'light' ? 'uik-text--light' : ''}
      ${type === 'lead' ? 'uik-text--lead' : ''}
      ${type === 'mini' ? 'uik-text--mini' : ''}
      ${className || ''}
    `}
  >{children}{text}</div>
);

export default Text