export interface Props {
  value?: boolean,
  label?: string,
  disabled?: boolean,
  onClick?: (...args: any[]) => any,
  onChange?: (...args: any[]) => any,
  onInput?: (...args: any[]) => any,
  className?: string
}

const Checkbox = ({
  value,
  label,
  disabled,
  onClick,
  onChange,
  onInput,
  className
}: Props): JSX.Element => {
  const changeValue = (event: React.MouseEvent) => {
    if (disabled) return

    if (onChange) onChange(!value, event)
    if (onInput) onInput(!value, event)
    if (onClick) onClick(!value, event)
  }
  
  return (
    <div
      className={`
        uik-checkbox
        ${value ? 'uik-checkbox--checked' : ''}
        ${disabled ? 'uik-checkbox--disabled' : ''}
        ${className || ''}
      `}
    >
      <button
        className="uik-checkbox__wrapper"
        type='button'
        onClick={changeValue}
      >
        <div className="uik-checkbox__checkbox">
          {
            value &&
            <div className="uik-checkbox__check-icon"/>
          }
        </div>

        {
          !!label &&
          <div className="uik-checkbox__label">{ label }</div>
        }
      </button>
    </div>
  )
}

export default Checkbox