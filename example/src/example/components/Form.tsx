import Uik from "@reef-defi/ui-kit"
import Title from "./Title"

function Example () {
  return (
    <>
      <Title text='Form' code={code}/>
      
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

const code = `<>
  <Uik.Form>
    <Uik.Input/>
    <Uik.Container>
      <Uik.Input/>
      <Uik.Input/>
    </Uik.Container>
  </Uik.Form>
</>`

export default Example