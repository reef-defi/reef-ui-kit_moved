import Uik from "@reef-defi/ui-kit"
import Title from "./Title"

function Example () {
  return (
    <>
      <Title text='Card' code={code}/>

      <Uik.Card title='Card'>...</Uik.Card>
      <Uik.Card title='Condensed card' condensed>...</Uik.Card>
      <Uik.Card title='Center title' titlePosition='center'></Uik.Card>
      <Uik.Card title='Right title' titlePosition='right'></Uik.Card>
    </>
  )
}

const code = `<>
  <Uik.Card title='Card'>...</Uik.Card>
  <Uik.Card title='Condensed card' condensed>...</Uik.Card>
  <Uik.Card title='Center title' titlePosition='center'></Uik.Card>
  <Uik.Card title='Right title' titlePosition='right'></Uik.Card>
</>`

export default Example