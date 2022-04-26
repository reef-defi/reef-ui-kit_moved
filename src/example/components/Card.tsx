import Uik from "./../../ui-kit"

function Example () {
  return (
    <>
      <Uik.Divider text='Card'/>

      <Uik.Card title='Card'>...</Uik.Card>
      <Uik.Card title='Condensed card' condensed>...</Uik.Card>
      <Uik.Card title='Center title' titlePosition='center'></Uik.Card>
      <Uik.Card title='Right title' titlePosition='right'></Uik.Card>
    </>
  )
}

export default Example