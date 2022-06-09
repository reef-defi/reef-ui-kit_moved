import React from "react"
import Paginate, { Pagination } from "./Paginate"

export interface Props {
  className?: string,
  children?: any,
  seamless?: boolean,
  height?: number | string,
  pagination?: Pagination
}

const Table = ({
  children,
  className,
  seamless,
  height,
  pagination
}: Props): JSX.Element => {
  const getHeight = () => {
    if (height) return { maxHeight: `${height}px` }
    return {}
  }
  
  return (
    <div
      className={`
        uik-table
        ${seamless ? 'uik-table--seamless' : ''}
        ${className || ''}
      `}
    >
      <div
        className="uik-table__wrapper"
        style={getHeight() as React.CSSProperties}
      >
        <table className="uik-table__table">{ children }</table>
      </div>

      {
        !!pagination &&
        <Paginate
          current={pagination.current}
          count={pagination.count}
          onChange={pagination.onChange}
        />
      }
    </div>
  )
}

export default Table