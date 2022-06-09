import Uik from "../../ui-kit"
import Title from "./Title"

function Example () {
  return (
    <>
      <Title text='Tag' code={code}/>
        
      <Uik.Tag text="Default"/>
      <Uik.Tag color="red" text="Red"/>
      <Uik.Tag color="orange" text="Orange"/>
      <Uik.Tag color="yellow" text="Yellow"/>
      <Uik.Tag color="lime" text="Lime"/>
      <Uik.Tag color="green" text="Green"/>
      <Uik.Tag color="cyan" text="Cyan"/>
      <Uik.Tag color="blue" text="Blue"/>
      <Uik.Tag color="purple" text="Purple"/>
      <Uik.Tag color="pink" text="Pink"/>
    </>
  )
}

const code = `<>
  <Uik.Tag text="Default"/>
  <Uik.Tag color="red" text="Red"/>
  <Uik.Tag color="orange" text="Orange"/>
  <Uik.Tag color="yellow" text="Yellow"/>
  <Uik.Tag color="lime" text="Lime"/>
  <Uik.Tag color="green" text="Green"/>
  <Uik.Tag color="cyan" text="Cyan"/>
  <Uik.Tag color="blue" text="Blue"/>
  <Uik.Tag color="purple" text="Purple"/>
  <Uik.Tag color="pink" text="Pink"/>
</>`

export default Example