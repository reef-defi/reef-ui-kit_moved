import Uik from "./../../ui-kit"
import {
  faRightLeft,
  faPaperPlane,
  faSackDollar,
  faCoins,
  faWandMagicSparkles,
  faLock,
  faFingerprint
} from "@fortawesome/free-solid-svg-icons";

function Example () {
  return (
    <>
      <Uik.Divider text='Action Button'/>
      
      <Uik.Container flow='spaceAround'>
        <Uik.ActionButton text="Swap" icon={faRightLeft} color="green"/>
        <Uik.ActionButton text="Send" icon={faPaperPlane} color="blue" />
        <Uik.ActionButton text="Buy" icon={<Uik.ReefSign/>}/>
        <Uik.ActionButton text="Stake" icon={faCoins} color="orange"/>
      </Uik.Container>

      <Uik.Container flow='spaceAround'>
        <Uik.ActionButton text="Pool" icon={faSackDollar} color="lime"/>
        <Uik.ActionButton text="Create" icon={faWandMagicSparkles} color="cyan"/>
        <Uik.ActionButton text="Sign" icon={faFingerprint} color="purple"/>
        <Uik.ActionButton text="Lock" icon={faLock} color="red"/>
      </Uik.Container>
    </>
  )
}

export default Example