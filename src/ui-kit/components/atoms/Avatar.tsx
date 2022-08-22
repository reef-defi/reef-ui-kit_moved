export interface Props {
  image?: string,
  name?: string,
  size?: "small" | "large" | "extra-large",
  className?: string
}

const Avatar = ({
  image,
  name,
  size,
  className
}: Props): JSX.Element => {
  return (
    <div
      className={`
        uik-avatar
        ${size === 'small' ? 'uik-avatar--small' : ''}
        ${size === 'large' ? 'uik-avatar--large' : ''}
        ${size === 'extra-large' ? 'uik-avatar--extra-large' : ''}
        ${className || ''}
      `}
      title={name || ''}
    >
      <div
        className="uik-avatar__avatar"
        style={{ backgroundImage: `url(${image || ''})` }}
      />
  
      {
        !!name &&
        <div className="uik-avatar__name">{ name }</div>
      }
    </div>
  )
}

export default Avatar