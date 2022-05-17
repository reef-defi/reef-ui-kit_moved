import avatar1 from "./../../assets/avatars/1.png"
import avatar2 from "./../../assets/avatars/2.png"
import avatar3 from "./../../assets/avatars/3.png"
import avatar4 from "./../../assets/avatars/4.png"
import avatar5 from "./../../assets/avatars/5.png"
import avatar6 from "./../../assets/avatars/6.png"
import avatar7 from "./../../assets/avatars/7.png"
import avatar8 from "./../../assets/avatars/8.png"
import avatar9 from "./../../assets/avatars/9.png"
import avatar10 from "./../../assets/avatars/10.png"
import avatar11 from "./../../assets/avatars/11.png"
import avatar12 from "./../../assets/avatars/12.png"
import avatar13 from "./../../assets/avatars/13.png"
import avatar14 from "./../../assets/avatars/14.png"
import avatar15 from "./../../assets/avatars/15.png"
import avatar16 from "./../../assets/avatars/16.png"
import avatar17 from "./../../assets/avatars/17.png"
import avatar18 from "./../../assets/avatars/18.png"
import avatar19 from "./../../assets/avatars/19.png"
import avatar20 from "./../../assets/avatars/20.png"
import avatar21 from "./../../assets/avatars/21.png"
import avatar22 from "./../../assets/avatars/22.png"
import avatar23 from "./../../assets/avatars/23.png"
import avatar24 from "./../../assets/avatars/24.png"
import avatar25 from "./../../assets/avatars/25.png"
import avatar26 from "./../../assets/avatars/26.png"
import avatar27 from "./../../assets/avatars/27.png"
import avatar28 from "./../../assets/avatars/28.png"
import avatar29 from "./../../assets/avatars/29.png"
import avatar30 from "./../../assets/avatars/30.png"
import avatar31 from "./../../assets/avatars/31.png"
import avatar32 from "./../../assets/avatars/32.png"
import avatar33 from "./../../assets/avatars/33.png"
import avatar34 from "./../../assets/avatars/34.png"
import avatar35 from "./../../assets/avatars/35.png"
import avatar36 from "./../../assets/avatars/36.png"

const avatars = {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  avatar9,
  avatar10,
  avatar11,
  avatar12,
  avatar13,
  avatar14,
  avatar15,
  avatar16,
  avatar17,
  avatar18,
  avatar19,
  avatar20,
  avatar21,
  avatar22,
  avatar23,
  avatar24,
  avatar25,
  avatar26,
  avatar27,
  avatar28,
  avatar29,
  avatar30,
  avatar31,
  avatar32,
  avatar33,
  avatar34,
  avatar35,
  avatar36
}

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
    return avatars[`avatar${avatarId}`]
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