import ReefIcon from "./../assets/ReefIcon"

export interface Props {
  value?: string | number,
  className?: string,
  children?: any
}

const Amount = ({
  value,
  className,
  children
}: Props): JSX.Element => (
  <div
    className={`
      uik-reef-amount
      ${className || ''}
    `}
  >
    <ReefIcon/>
    <span className="uik-reef-amount__value">{children}{value}</span>
  </div>
);

export default Amount