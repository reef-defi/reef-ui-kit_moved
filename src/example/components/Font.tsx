import Uik from "./../../ui-kit"

function Example () {
  return (
    <>
      <Uik.Divider text='Font'/>

      <Uik.Container vertical className='example-font'>
        <Uik.Text>Poppins</Uik.Text>

        <Uik.Container>
            <div className='example-font__example example-font__example--400'>400</div>

            <div className='example-font__example example-font__example--500'>500</div>

            <div className='example-font__example example-font__example--600'>600</div>

            <div className='example-font__example example-font__example--700'>700</div>
        </Uik.Container>
      </Uik.Container>
    </>
  )
}

export default Example