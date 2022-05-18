import React from "react"
import Icon from "./Icon"

export interface Props {
  text: string,
  icon: any,
  color?: "red" | "orange" | "yellow" | "lime" | "green" | "cyan" | "blue" | "purple" | "pink",
  onClick?: (...args: any[]) => any,
  url?: string,
  className?: string,
  children?: any
}

const ActionButton = ({
  text,
  icon,
  color,
  onClick,
  url,
  children,
  className
}: Props): JSX.Element => {
  const ButtonTag = !!url ? "a" : "button"

  const getIcon = () => {
    if (!icon) return undefined

    if (React.isValidElement(icon)) {
      return {
        ...icon,
        key: "icon"
      }
    }
    
    return <Icon className="uik-action-button__icon" icon={icon}/>
  }

  return (
    <ButtonTag
      className={`
        uik-action-button
        ${!!color ? ('uik-action-button--' + color) : ''}
        ${className || ''}
      `}
      type={ButtonTag === 'button' ? 'button' : undefined}
      target={ButtonTag === 'a' ? '_blank' : undefined}
      href={ButtonTag === 'a' ? url : undefined}
      onClick={onClick}
    >
      { getIcon() }
      <div className="uik-action-button__text">{ text }{ children }</div>
    </ButtonTag>
  )
}

export default ActionButton