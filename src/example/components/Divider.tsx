import Uik from "./../../ui-kit"

function Example () {
  return (
    <>
      <Uik.Divider text='Divider'/>
      <div style={{ padding: "50px", width: "100%" }}>
        <Uik.Divider/>
        <Uik.Divider text='With text' />
      </div>
    </>
  )
}

export default Example