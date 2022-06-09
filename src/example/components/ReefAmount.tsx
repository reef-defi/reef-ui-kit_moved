import Uik from "../../ui-kit"
import Title from "./Title"

function Example () {
  return (
    <>
      <Title text='Reef Amount' code={code}/>
        
      <Uik.ReefAmount value='1,000,000.00' />
    </>
  )
}

const code = `<>
  <Uik.ReefAmount value='100,000.00' />
</>`

export default Example