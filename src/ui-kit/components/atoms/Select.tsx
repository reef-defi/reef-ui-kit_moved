import { useState } from "react"
import Label from './Label'
import Icon from "./Icon"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export type Value = string | number | boolean

export interface OptionMap {
  value?: string,
  text?: string 
}

export interface Option {
  value: Value,
  text: string
}

export interface Props {
  label?: string,
  value?: Value | Value[],
  options?: Value[] | object[],
  optionMap?: OptionMap,
  multiple?: boolean,
  disabled?: boolean,
  placeholder?: string,
  required?: boolean,
  error?: string,
  onChange?: (...args: any[]) => any,
  onOpen?: (...args: any[]) => any,
  onClose?: (...args: any[]) => any,
  className?: string
}

const Select = ({
  label,
  value,
  options,
  optionMap,
  multiple,
  disabled,
  placeholder,
  required,
  error,
  // onChange,
  // onOpen,
  // onClose,
  className
}: Props): JSX.Element => {
  const [ isOpen, setOpen ] = useState(false)
  
  console.log(isOpen)

  const toggleOpen = state => {
    if (disabled) return
    setOpen(state)
  }

  const getOptions = () => {
    let output:Option[] = []

    const map = {
      value: optionMap?.value || "value",
      text: optionMap?.text || "text"
    }

    if (options) {
      options.forEach(option => {
        if (typeof option === "object") {
          output.push({
            value: option[map.value],
            text: String(option[map.text])
          })
        } else {
          output.push({
            value: option,
            text: String(option)
          })
        }
      })
    }

    return output
  }

  const getDispayValue = () => {
    if (
      !value ||
      (Array.isArray(value) && !value.length)
    ) return ""

    const options = getOptions()

    const getTextByValue = value => {
      return options.find(option => option.value === value)?.text || ""
    } 
    
    if (multiple) {
      let output:string[] = []

      // @ts-ignore-next-line
      value.forEach((item:Value) => {
        output.push(getTextByValue(item))
      })

      return output.join(", ")
    } else {
      return getTextByValue(value) 
    }
  }

  return (
    <div
      className={`
        uik-select
        ${!!error ? 'uik-select--error' : ''}
        ${className || ''}
      `}
    >
      <div className='uik-select__wrapper'>
          {
            !!label &&
            <Label className='uik-select__label'>{label}{required ? ' *' : ''}</Label>
          }
  
          <button
            className='uik-select__field'
            type='button'
            onClick={() => toggleOpen(true)}
            disabled={disabled}
          >
            <span
              className={`
                uik-select__value
                ${!value && !!placeholder ? 'uik-select__value--placeholder' : ''}
              `}
            >{ getDispayValue() }</span>
            <Icon className="uik-select__field-icon" icon={faCaretDown}/>
          </button>
      </div>

      {
        !!error &&
        <div className='uik-select__error'>{ error }</div>
      }
    </div>
  )
}

export default Select