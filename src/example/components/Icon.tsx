import Uik from "./../../ui-kit"

import {
  faShieldHalved,
  faBell,
  faBoltLightning,
  faCoins,
  faCog
} from "@fortawesome/free-solid-svg-icons";

function Example () {
  return (
    <>
      <Uik.Divider text='Icon'/>
      
      <Uik.Container className='example-icon' flow='spaceAround'>
        <Uik.Icon icon={faBoltLightning}/>
        <Uik.Icon icon={faShieldHalved}/>
        <Uik.Icon icon={faBell}/>
        <Uik.Icon icon={faCoins}/>
        <Uik.Icon icon={faCog}/>
      </Uik.Container>
    </>
  )
}

export default Example