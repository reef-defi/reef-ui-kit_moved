import notify, { NewNotification } from "../../functions/notify"
import Tooltip from "../atoms/Tooltip"
import Icon from "../atoms/Icon"
import { faClone } from "@fortawesome/free-regular-svg-icons"

export interface Notification extends NewNotification {
  type?: "info" | "danger" | "success"
}

export interface Props {
  value?: string,
  tooltip?: string,
  notification?: string | Notification,
  onClick?: (...args: any[]) => any,
  className?: string
}

const CopyButton = ({
  value,
  tooltip,
  notification,
  onClick,
  className
}: Props): JSX.Element => {
  
  const showNotification = () => {
    let type = "info" 
    let content = notification

    if (typeof notification === "object" && !!notification.type) {
      type = notification.type
      content = { ...notification }
      delete content.type
    }

     notify[type](content)
  }
  
  const copy = (event) => {
    if (onClick) onClick(event)

    if (!value) return

    navigator.clipboard.writeText(value).then(() => {
      if (!!notification) showNotification()
    }, () => {
      notify.danger("Cannot copy to clipboard")
    })
  }

  const Wrapper = ({ children }) => {
    if (!tooltip) return <>{ children }</>

    return (
      <Tooltip text={tooltip} className={className || ''}>
        {children}
      </Tooltip>
    )
  }

  return (
    <Wrapper>
      <button
        className={`
          uik-copy-button
          ${!tooltip ? (className || '') : ''}
        `}
        type="button"
        onClick={copy}
      >
        <Icon icon={faClone}/>
      </button>
    </Wrapper>
  )
}

export default CopyButton