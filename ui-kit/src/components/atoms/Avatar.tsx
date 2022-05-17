export interface Props {
  image?: string,
  avatar?: string,
  name?: string,
  size?: "small" | "large" | "extra-large",
  className?: string
}

const Avatar = ({
  image,
  avatar,
  name,
  size,
  className
}: Props): JSX.Element => {
  const getImage = () => {
    if (image) return image
    const avatarId = avatar || "6"
    // return require(`./../../assets/avatars/${avatarId}.png`)
  }

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
        className={`
          uik-avatar__avatar
          ${!!avatar ? ('uik-avatar__avatar--' + avatar) : ''}
        `}
        style={{ backgroundImage: `url(${getImage()})` }}
      />
  
      {
        !!name &&
        <div className="uik-avatar__name">{ name }</div>
      }
    </div>
  )
}

export default Avatar