export type Value = string | number | boolean

export interface Option {
  value: Value,
  text: string,
  indicator?: string | number 
}

export interface Props {
  value?: Value,
  options?: Value[] | Option[],
  onChange?: (...args: any[]) => any,
  className?: string
}

const Tabs = ({
  value,
  options,
  onChange,
  className
}: Props): JSX.Element => {
  const select = (tab?: Value) => {
    if (onChange && value !== tab) onChange(tab)
  }

  const getOptions = ():Option[] => {
    if (!options) return []
    let output = []

    options.forEach(option => {
      if (typeof option === "object") {
        // @ts-ignore-next-line
        output.push(option)
      } else {
        // @ts-ignore-next-line
        output.push({ value: option, text: option })
      }
    })

    return output
  }

  return (
    <div
      className={`
        uik-tabs
        ${className || ''}
      `}
    >
      {
        getOptions().map((option:Option, index: number) => (
          <button
            key={index}
            className={`
              uik-tabs__tab
              ${ value === option.value ? 'uik-tabs__tab--selected' : ''}
              ${ !!option.indicator ? 'uik-tabs__tab--with-indicator' : ''}
            `}
            disabled={value === option.value}
            type="button"
            onClick={() => select(option.value)}
          >
            {
              !!option.indicator &&
              <div className="uik-tabs__tab-indicator">{ option.indicator }</div>
            }
            <span>{ option.text }</span>
          </button>
        ))
      }
    </div>
  )
}

export default Tabs