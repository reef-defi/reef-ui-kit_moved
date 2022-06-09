export interface Props {
  className?: string,
  children?: any
}

const THead = ({
  children,
  className
}: Props): JSX.Element => (
  <thead
    className={`
      uik-table-head
      ${className || ''}
    `}
  >{ children }</thead>
);

export default THead