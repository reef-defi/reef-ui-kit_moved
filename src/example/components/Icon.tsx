import Uik from "../../ui-kit"
import Title from "./Title"

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
      <Title text='Icon' code={code}/>
      
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

const code = `import {
  faShieldHalved,
  faBell,
  faBoltLightning,
  faCoins,
  faCog
} from "@fortawesome/free-solid-svg-icons";

<>
  <Uik.Icon icon={faBoltLightning}/>
  <Uik.Icon icon={faShieldHalved}/>
  <Uik.Icon icon={faBell}/>
  <Uik.Icon icon={faCoins}/>
  <Uik.Icon icon={faCog}/>
</>`

export default Example