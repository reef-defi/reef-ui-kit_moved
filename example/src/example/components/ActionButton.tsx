import Uik from "@reef-defi/ui-kit"
import {
  faRightLeft,
  faPaperPlane,
  faSackDollar,
  faCoins,
  faWandMagicSparkles,
  faLock,
  faFingerprint
} from "@fortawesome/free-solid-svg-icons";
import Title from "./Title"

function Example () {
  return (
    <>
      <Title text='Action Button' code={code}/>
      
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

const code = `<>
  <Uik.ActionButton text="Swap" icon={faRightLeft} color="green"/>
  <Uik.ActionButton text="Send" icon={faPaperPlane} color="blue" />
  <Uik.ActionButton text="Buy" icon={<Uik.ReefSign/>}/>
  <Uik.ActionButton text="Stake" icon={faCoins} color="orange"/>
  <Uik.ActionButton text="Pool" icon={faSackDollar} color="lime"/>
  <Uik.ActionButton text="Create" icon={faWandMagicSparkles} color="cyan"/>
  <Uik.ActionButton text="Sign" icon={faFingerprint} color="purple"/>
  <Uik.ActionButton text="Lock" icon={faLock} color="red"/>
</>`

export default Example