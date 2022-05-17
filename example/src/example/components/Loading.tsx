import Uik from "@reef-defi/ui-kit"
import Title from "./Title"

function Example () {
  return (
    <>
      <Title text='Loading' code={code}/>

      <Uik.Container flow='spaceBetween'>
        <Uik.Loading/>
        <Uik.Loading color='white'/>
        <Uik.Loading color='black'/>
        <Uik.Loading size='small'/>
        <Uik.Loading text='Loading ...'/>
      </Uik.Container>
    </>
  )
}

const code = `<>
  <Uik.Loading/>
  <Uik.Loading color='white'/>
  <Uik.Loading color='black'/>
  <Uik.Loading size='small'/>
  <Uik.Loading text='Loading ...'/>
</>`

export default Example