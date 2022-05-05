import Uik from "./../../ui-kit"
import Title from "./Title"

function Example () {
  return (
    <>
      <Title text='Divider' code={code}/>
      
      <div style={{ padding: "50px", width: "100%" }}>
        <Uik.Divider/>
        <Uik.Divider text='With text' />
      </div>
    </>
  )
}

const code = `<>
  <Uik.Divider/>
  <Uik.Divider text='With text' />
</>`

export default Example