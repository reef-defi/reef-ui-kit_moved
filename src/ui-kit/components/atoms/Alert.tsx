import { useState, useEffect, useRef } from 'react';
import Icon from './Icon'
import {
  faXmark,
  faCircleInfo,
  faTriangleExclamation,
  faCircleCheck
} from '@fortawesome/free-solid-svg-icons';

const getIcon = (type: string) => {
  const map = { success: faCircleCheck, danger: faTriangleExclamation }
  return map[type] || faCircleInfo
}

export interface Props {
  type: "info" | "danger" | "success",
  text?: string,
  onClose?: (...args: any[]) => any,
  aliveFor?: number,
  className?: string,
  children?: any
}

const Alert = ({
  type,
  text,
  onClose,
  aliveFor,
  className,
  children
}: Props): JSX.Element => {
  const [ closing, setClosing ] = useState(false)


  const close = () => {
    if (onClose && !closing) {
      setClosing(true)
      onClose()
    }
  }

  const actions = useRef(null)
  
  useEffect(() => {
    if (actions.current) {
      // @ts-ignore-next-line
      const buttons = actions.current.children
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", close)
      }
    }

    if (onClose && aliveFor) {
      const timer = setTimeout(() => {
        close()
      }, 1000 * aliveFor);
      return () => clearTimeout(timer);
    }

    return () => {}
  }, []);

  return (
    <div
      className={`
        uik-alert
        uik-alert--${type}
        ${closing ? 'uik-alert--close' : ''}
        ${!!onClose && !!aliveFor ? 'uik-alert--autoclose' : ''}
        ${className || ''}
      `}
      style={
        (
          onClose && aliveFor ?
          { '--alive-for': `${aliveFor}s` }
          : {}
        ) as React.CSSProperties
      }
    >
        <div className='uik-alert__content'>
  
            <Icon className='uik-alert__icon' icon={getIcon(type)}/>
  
            <div className='uik-alert__text'>{ text }</div>
  
            {
              !!onClose &&
              <button className='uik-alert__close-btn' onClick={close}>
                <Icon className='uik-alert__close-btn-icon' icon={faXmark} />
              </button>
            }
        </div>
  
        {
          !!children &&
          <div
            ref={actions}
            className='uik-alert__buttons'
          >
            { children }
          </div>
        }
    </div>
  )
}

export default Alert