export interface Props {
  onClick?: (...args: any[]) => any,
  className?: string,
  children?: any
}

const Tr = ({
  onClick,
  children,
  className
}: Props): JSX.Element => (
  <tr
    className={`
      uik-table-row
      ${!!onClick ? 'uik-table-row--clickable' : ''}
      ${className || ''}
    `}
    onClick={onClick}
  >{ children }</tr>
)

export default Tr