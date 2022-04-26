export interface Props {
  vertical?: boolean,
  className?: string,
  flow?: "start" | "end" | "spaceAround" | "spaceBetween" | "stretch",
  children?: any
}

const Container = ({
  vertical,
  className,
  children,
  flow
}: Props): JSX.Element => (
  <div
    className={`
      uik-container
      ${!!vertical ? 'uik-container--vertical' : ''}
      ${flow === 'start' ? 'uik-container--flow-start' : ''}
      ${flow === 'end' ? 'uik-container--flow-end' : ''}
      ${flow === 'spaceAround' ? 'uik-container--flow-space-around' : ''}
      ${flow === 'spaceBetween' ? 'uik-container--flow-space-between' : ''}
      ${flow === 'stretch' ? 'uik-container--flow-stretch' : ''}
      ${className || ''}
    `}
  >
    { children }
  </div>
)

export default Container