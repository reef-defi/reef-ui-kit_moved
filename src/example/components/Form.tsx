import Uik from "./../../ui-kit"

function Example () {
  return (
    <>
      <Uik.Divider text='Form'/>
      
      <Uik.Text>Wrap components to create form layout.</Uik.Text>

      <Uik.Card condensed>
        <Uik.Form>
          <Uik.Input/>
          <Uik.Container>
            <Uik.Input/>
            <Uik.Input/>
          </Uik.Container>
        </Uik.Form>
      </Uik.Card>
    </>
  )
}

export default Example