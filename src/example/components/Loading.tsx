import Uik from "./../../ui-kit"

function Example () {
  return (
    <>
      <Uik.Divider text='Loading'/>

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

export default Example