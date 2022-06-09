import Uik from "../../ui-kit"
import Title from "./Title"

function Example () {
  return (
    <>
      <Title text='Trend' code={code}/>

      <Uik.Container>
        <Uik.Trend text='25.00%'/>
        <Uik.Trend type="bad" direction="down" text='25.00%'/>
      </Uik.Container>
    </>
  )
}

const code = `<>
  <Uik.Trend text='25.00%'/>
  <Uik.Trend type="bad" direction="down" text='25.00%'/>
</>`

export default Example