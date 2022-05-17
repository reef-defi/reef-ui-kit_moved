export interface Props {
  title?: string,
  titlePosition?: "center" | "right",
  condensed?: boolean,
  className?: string,
  head?: any,
  children?: any
}

const Card = ({
  title,
  titlePosition,
  condensed,
  head,
  children,
  className
}: Props): JSX.Element => (
  <div
    className={`
      uik-card
      ${condensed ? 'uik-card--condensed' : ''}
      ${className || ''}
    `}
  >
    {
      (!!head || !!title) &&
      <div className='uik-card__head'>
        {
          !!title &&
          <div
            className={`
              uik-card__title
              ${titlePosition === 'center' ? 'uik-card__title--center' : ''}
              ${titlePosition === 'right' ? 'uik-card__title--right' : ''}
            `}
          >{title}</div>
        }
        { head || '' }
      </div>
    }
    <div className='uik-card__content'>{children}</div>
  </div>
);

export default Card