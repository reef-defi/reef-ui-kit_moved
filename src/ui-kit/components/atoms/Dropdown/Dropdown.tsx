import React, { useRef } from "react"
import { CSSTransition } from 'react-transition-group';

export interface Props {
  isOpen: boolean,
  stayOpen?: boolean,
  onClose: (...args: any[]) => any,
  position?: "top" | "bottomRight" | "bottomLeft" | "topRight" | "topLeft",
  className?: string,
  children?: any
}

const Dropdown = ({
  isOpen,
  stayOpen,
  onClose,
  position,
  children,
  className
}: Props): JSX.Element => {
  const dropdown = useRef(null)

  const getChildClick = (child: any) => {
    return () => {
      if (child.props.onClick) child.props.onClick()
      if (!stayOpen) onClose()
    }
  }

  const getChildren = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        // @ts-ignore-next-line
        onClick: getChildClick(child)
      })
    }
    return child
  })

  return (
    <div
      className={`
        uik-dropdown
        ${position === 'top' ? 'uik-dropdown--top' : ''}
        ${position === 'bottomRight' ? 'uik-dropdown--bottom-right' : ''}
        ${position === 'bottomLeft' ? 'uik-dropdown--bottom-left' : ''}
        ${position === 'topRight' ? 'uik-dropdown--top-right' : ''}
        ${position === 'topLeft' ? 'uik-dropdown--top-left' : ''}
        ${className || ''}
      `}
    >
      <CSSTransition
        in={isOpen}
        className='uik-dropdown__dropdown'
        nodeRef={dropdown}
        timeout={150}
        unmountOnExit
      >
        <div
          ref={dropdown}
          className='uik-dropdown__dropdown'
        >
          { getChildren }
        </div>
      </CSSTransition>

      { isOpen && <div className='uik-dropdown__overlay' onClick={onClose}/> }
    </div>
  )
}

export default Dropdown