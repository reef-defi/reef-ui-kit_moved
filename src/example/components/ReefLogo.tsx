import Uik from "../../ui-kit"
import Title from "./Title"

function Example () {
  return (
    <>
      <Title text='Reef Logo' code={code}/>

      <Uik.ReefLogo className='example-reef-logo'/>
    </>
  )
}

const code = `<>
  <Uik.ReefLogo />
</>`

export default Example