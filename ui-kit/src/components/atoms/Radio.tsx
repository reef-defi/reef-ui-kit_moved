export interface Props {
  value?: Boolean,
  label?: string,
  disabled?: boolean,
  onClick?: (...args: any[]) => any,
  onSelect?: (...args: any[]) => any,
  className?: string
}

const Radio = ({
  value,
  label,
  disabled,
  onClick,
  onSelect,
  className
}: Props): JSX.Element => {
  const select = (event: React.MouseEvent) => {
    if (disabled) return

    if (onSelect) onSelect(!value, event)
    if (onClick) onClick(!value, event)
  }
  
  return (
    <div
      className={`
        uik-radio
        ${value ? 'uik-radio--selected' : ''}
        ${disabled ? 'uik-radio--disabled' : ''}
        ${className || ''}
      `}
    >
      <button
        className="uik-radio__wrapper"
        type='button'
        onClick={select}
      >
        <div className="uik-radio__radio"/>

        {
          !!label &&
          <div className="uik-radio__label">{ label }</div>
        }
      </button>
    </div>
  )
}

export default Radio