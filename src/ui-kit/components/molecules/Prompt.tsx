import { useState, useEffect, useRef } from "react";
import Modal from "../atoms/Modal";
import Icon from "../atoms/Icon";
import {
  faCircleInfo,
  faTriangleExclamation,
  faCircleCheck
} from '@fortawesome/free-solid-svg-icons';

export interface Props {
  type?: "info" | "success" | "danger" 
  title?: string,
  message?: string,
  actions?: any,
  onClose?: (...args: any[]) => any
}

const Prompt = ({
  type = "info",
  title,
  message,
  actions,
  onClose
}: Props): JSX.Element => {
  const [isOpen, setOpen] = useState(false)
  
  const icons = {
    info: faCircleInfo,
    success: faCircleCheck,
    danger: faTriangleExclamation
  }

  const close = () => {
    setOpen(false)

    setTimeout(() => {
      if (onClose) onClose()
    }, 0.2 * 1000)
  }
  
  useEffect(() => {
    if (!isOpen) setOpen(true)
    return () => {}
  }, []);
  
  const footer = useRef(null)

  const onOpened = () => {
    if (footer.current) {
      // @ts-ignore-next-line
      const buttons = footer.current.children
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", close)
      }
    }
  }

  return (
    <div className={`
      uik-prompt
      uik-prompt--${type}
    `}>
      <Modal
        className="uik-prompt__modal"
        title={title}
        isOpen={isOpen}
        onClose={close}
        onOpened={onOpened}
        footer={
          !!actions &&
          <div ref={footer} className="uik-prompt__actions">{ actions }</div>
        }
      >
        <Icon className="uik-prompt__icon" icon={icons[type]}/>
        <span className="uik-prompt__message">{ message }</span>
      </Modal>
    </div>
  )
}


export default Prompt