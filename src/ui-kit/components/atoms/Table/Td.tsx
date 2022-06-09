export interface Props {
  align?: 'left' | 'center' | 'right',
  className?: string,
  children?: any
}

const Td = ({
  align,
  children,
  className
}: Props): JSX.Element => (
  <td
    className={`
      uik-table-cell
      ${align ? `uik-table-cell--${align}` : ''}
      ${className || ''}
    `}
  >
    <div className="uik-table-cell__content">{ children }</div>
  </td>
)

export default Td