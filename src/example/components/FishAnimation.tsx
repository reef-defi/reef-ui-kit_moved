import Uik from "./../../ui-kit"
import Title from "./Title"

function Example () {
  return (
    <>
      <Title text='Fish Animation' code={code}/>

      <Uik.FishAnimation />
    </>
  )
}

const code = `<>
  <Uik.FishAnimation />
</>`

export default Example