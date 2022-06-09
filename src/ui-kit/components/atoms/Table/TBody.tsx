export interface Props {
  className?: string,
  children?: any
}

const TBody = ({
  children,
  className
}: Props): JSX.Element => (
  <tbody
    className={`
      uik-table-body
      ${className || ''}
    `}
  >{ children }</tbody>
);

export default TBody