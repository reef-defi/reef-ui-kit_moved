import ReefIcon from "./../assets/ReefIcon"
import formatAmount from "./../../utils/formatAmount"

export interface Props {
  value?: string | number,
  className?: string,
  children?: any
}

const Amount = ({
  value,
  className,
  children
}: Props): JSX.Element => {
  return (
    <div
      className={`
        uik-reef-amount
        ${className || ''}
      `}
    >
      {
        (!!value || !!children) &&
        <ReefIcon/>
      }
      <span className="uik-reef-amount__value">{children}{formatAmount(value)}</span>
    </div>
  )
}

export default Amount