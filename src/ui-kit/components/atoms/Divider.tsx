export interface Props {
  text?: string,
  spacing?: "small" | "large",
  className?: string,
}

const Divider = ({
  text,
  spacing,
  className
}: Props): JSX.Element => {
  const getContentIdentifier = () => {
    if (!text) return ''

    const base = 'uik-divider--text-'
    return base + text.toLowerCase().replaceAll(" ", "-")
  }
  
  return (
    <div
      id={getContentIdentifier()}
      className={`
        uik-divider
        ${spacing === 'small' ? 'uik-divider--small' : ''}
        ${spacing === 'large' ? 'uik-divider--large' : ''}
        ${getContentIdentifier()}
        ${className || ''}
      `}
    >
      {
        !!text ?
        <>
          <div className="uik-divider__line"/>
          <div className="uik-divider__text">{ text }</div>
          <div className="uik-divider__line"/>
        </>
        : <div className="uik-divider__line"/>
      }
    </div>
  )
}

export default Divider