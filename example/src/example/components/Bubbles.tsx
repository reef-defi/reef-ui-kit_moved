import Uik from "@reef-defi/ui-kit"
import Title from "./Title"

function Example () {
  return (
    <>
      <Title text='Bubbles' code={code}/>
      
      <Uik.Card className='example-bubbles'>
        <Uik.Bubbles/>
      </Uik.Card>
    </>
  )
}

const code = `<>
  <Uik.Bubbles/>
</>`

export default Example