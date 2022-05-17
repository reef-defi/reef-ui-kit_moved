import Label from "./Label"

export interface Props {
  value?: boolean,
  label?: string,
  onText?: string,
  offText?: string,
  disabled?: boolean,
  onClick?: (...args: any[]) => any,
  onChange?: (...args: any[]) => any,
  onInput?: (...args: any[]) => any,
  className?: string
}

const Toggle = ({
  value,
  label,
  onText,
  offText,
  disabled,
  onChange,
  onInput,
  onClick,
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
        uik-toggle
        ${value ? 'uik-toggle--active' : ''}
        ${disabled ? 'uik-toggle--disabled' : ''}
        ${className || ''}
      `}
    >
      {
        !!label &&
        <Label text={label} className='uik-toggle__label' />
      }
      <button
          className='uik-toggle__toggle'
          type='button'
          onClick={changeValue}
      >
          {
            !!onText &&
            <div className='uik-toggle__text uik-toggle__text--on'>{ onText }</div>
          }
          <div className='uik-toggle__circle'/>
          {
            !!offText &&
            <div className='uik-toggle__text uik-toggle__text--off'>{ offText }</div>
          }
      </button>
    </div>
  )
}

export default Toggle