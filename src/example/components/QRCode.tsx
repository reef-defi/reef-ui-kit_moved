import Uik from "./../../ui-kit"
import Title from "./Title"

function Example () {
  return (
    <>
      <Title text='QR Code' code={code}/>
        
      <Uik.QRCode value='Reef' />
    </>
  )
}

const code = `<>
  <Uik.QRCode value='Reef' />
</>`

export default Example