import { useState } from 'react'
import Label from './Label'
import Icon from './Icon'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export interface Props {
  value?: string
  defaultValue?: string
  type?: string,
  label?: string
  placeholder?: string
  name?: string
  className?: string
  error?: string
  textarea?: boolean
  rows?: string | number
  required?: boolean,
  disabled?: boolean,
  autoComplete?: boolean,
  readOnly?: boolean,
  maxLength?: number | string,
  min?: number | string,
  max?: number | string,
  onBlur?: (...args: any[]) => any,
  onFocus?: (...args: any[]) => any,
  onInput?: (...args: any[]) => any,
  onChange?: (...args: any[]) => any,
  onKeyDown?: (...args: any[]) => any,
  onKeyPress?: (...args: any[]) => any,
  onKeyUp?: (...args: any[]) => any
}

const Input = ({
  value,
  defaultValue,
  type,
  label,
  placeholder,
  name,
  error,
  className,
  rows,
  textarea,
  required,
  readOnly,
  disabled,
  autoComplete,
  maxLength,
  min,
  max,
  onBlur,
  onFocus,
  onInput,
  onChange,
  onKeyPress,
  onKeyDown,
  onKeyUp
}: Props): JSX.Element => {
  
  const InputTag = textarea ? 'textarea' : 'input'

  const getNumber = (str: any) => {
    if (!str) return undefined

    if (typeof str === 'number') return str

    const num = parseInt(str)
    if (isNaN(num)) return undefined

    return num
  }

  const [ displayPassword, setDisplayPassword ] = useState(false)

  const getType = () => {
    if (type === 'password' && displayPassword) return 'text'
    return type 
  }

  return (
    <div
      className={`
        uik-input
        ${!!error ? 'uik-input--error' : ''}
        ${className || ''}
      `}
    >
      {
        !!error &&
        <div className='uik-input__error'>{ error }</div>
      }
  
      <div className='uik-input__wrapper'>
          {
            !!label &&
            <Label className='uik-input__label'>{label}{required ? ' *' : ''}</Label>
          }

          <div className='uik-input__input-wrapper'>
            {
              type === 'password' &&
              <button
                className='uik-input__show-password-btn'
                type='button'
                onMouseDown={() => setDisplayPassword(true)}
                onMouseUp={() => setDisplayPassword(false)}
              >
                <Icon icon={displayPassword ? faEyeSlash : faEye}/>
              </button>
            }

            <InputTag
              className='uik-input__input'
              type={getType()}
              name={name}
              placeholder={placeholder}
              value={value}
              defaultValue={defaultValue}
              rows={getNumber(rows)}
              required={required}
              disabled={disabled}
              readOnly={readOnly}
              autoComplete={autoComplete ? 'on' : 'off'}
              maxLength={getNumber(maxLength)}
              min={min}
              max={max}
              onBlur={onBlur}
              onFocus={onFocus}
              onInput={onInput}
              onChange={onChange}
              onKeyPress={onKeyPress}
              onKeyDown={onKeyDown}
              onKeyUp={onKeyUp}
            />
          </div>
      </div>
    </div>
  )
}

export default Input