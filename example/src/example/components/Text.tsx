import Uik from "@reef-defi/ui-kit"
import Title from "./Title"

function Example () {
  return (
    <>
      <Title text='Text' code={code}/>

      <Uik.Text text='Headline text' type='headline'/>
      <Uik.Text text='Title text' type='title'/>
      <Uik.Text text='Default text'/>
      <Uik.Text text='Light text' type='light'/>
      <Uik.Text text='Lead text' type='lead'/>
      <Uik.Text text='Mini text' type='mini'/>
    </>
  )
}

const code = `<>
  <Uik.Text text='Headline text' type='headline'/>
  <Uik.Text text='Title text' type='title'/>
  <Uik.Text text='Default text'/>
  <Uik.Text text='Light text' type='light'/>
  <Uik.Text text='Lead text' type='lead'/>
  <Uik.Text text='Mini text' type='mini'/>
</>`

export default Example