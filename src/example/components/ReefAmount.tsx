import Uik from "../../ui-kit"
import Title from "./Title"

function Example () {
  return (
    <>
      <Title text='Reef Amount' code={code}/>
        
      <Uik.ReefAmount value={1000000} />
    </>
  )
}

const code = `<>
  <Uik.ReefAmount value={1000000} />
</>`

export default Example