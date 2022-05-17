import { useRef } from 'react'
import { CSSTransition } from 'react-transition-group';
import Icon from './Icon'
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export interface Props {
  title?: string,
  isOpen: boolean,
  onClose: (...args: any[]) => any,
  onOpened?: (...args: any[]) => any,
  onClosed?: (...args: any[]) => any,
  className?: string,
  footer?: any,
  children?: any
}

const Modal = ({
  title,
  isOpen,
  onClose,
  onOpened,
  onClosed,
  children,
  footer,
  className
}: Props): JSX.Element => {
  const modal = useRef(null)
  const overlay = useRef(null)

  return (
    <div
      className={`
        uik-modal
        ${className || ''}
      `}
    >
      <CSSTransition
        in={isOpen}
        className='uik-modal__container'
        nodeRef={modal}
        timeout={200}
        unmountOnExit
        onEnter={onOpened}
        onExited={onClosed}
      >
        <div ref={modal} className='uik-modal__container'>
            <div className='uik-modal__popup'>
                <div className='uik-modal__head'>
                    <div className='uik-modal__title'>{ title }</div>
                    <button className='uik-modal__close-btn' onClick={onClose}>
                        <Icon className='uik-modal__close-btn-icon' icon={faXmark}/>
                    </button>
                </div>
    
                <div className='uik-modal__body'>{ children }</div>
    
                {
                  !!footer &&
                  <div className='uik-modal__footer'>{ footer }</div>
                }
            </div>
        </div>
      </CSSTransition>
      
  
      <CSSTransition
        in={isOpen}
        className='uik-modal__overlay'
        nodeRef={overlay}
        timeout={200}
        unmountOnExit
      >
        <div ref={overlay} className='uik-modal__overlay' onClick={onClose}/>
      </CSSTransition>
    </div>
  )
}

export default Modal