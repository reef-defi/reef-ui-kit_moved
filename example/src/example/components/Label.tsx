import Uik from "@reef-defi/ui-kit"
import Title from "./Title"

function Example () {
  return (
    <>
      <Title text='Label' code={code}/>
        
      <Uik.Label text='Label' />
    </>
  )
}

const code = `<>
  <Uik.Label text='Label' />
</>`

export default Example