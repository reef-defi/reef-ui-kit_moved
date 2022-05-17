import Uik from "@reef-defi/ui-kit"
import Title from "./Title"

function Example () {
  return (
    <>
      <Title text='Reef Sign' code={code}/>

      <Uik.ReefSign className='example-reef-sign'/>
    </>
  )
}

const code = `<>
  <Uik.ReefSign />
</>`

export default Example