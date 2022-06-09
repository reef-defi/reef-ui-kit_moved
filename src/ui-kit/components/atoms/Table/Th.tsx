import React from "react"

export interface Props {
  align?: 'left' | 'center' | 'right',
  width?: number | string,
  className?: string,
  children?: any,
}

const Th = ({
  align,
  children,
  width,
  className
}: Props): JSX.Element => {
  const getWidth = () => {
    if (width) return { width: `${width}px` }
    return {}
  }

  return (
    <th
      style={getWidth() as React.CSSProperties}
      className={`
        uik-table-head-cell
        ${align ? `uik-table-head-cell--${align}` : ''}
        ${className || ''}
      `}
    >
      <div className="uik-table-head-cell__content">{ children }</div>
    </th>
  )
}

export default Th