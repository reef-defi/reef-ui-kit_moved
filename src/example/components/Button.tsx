import Uik from "../../ui-kit"
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import Title from "./Title"

function Example () {
  return (
    <>
      <Title text='Button' code={code}/>
          
      <Uik.Button text='Default button'/>
      <Uik.Button text='Left icon' icon={faArrowsRotate}/>
      <Uik.Button text='Right icon' icon={faArrowsRotate} iconPosition='right'/>
      <Uik.Button text='Small button' size='small'/>
      <Uik.Button text='Large button' size='large'/>
      <Uik.Button text='Filled button' fill/>
      <Uik.Button text='Danger button' danger/>
      <Uik.Button text='Success button' success/>
      <Uik.Button text='Disabled button' disabled/>
      <Uik.Button text='Rounded button' rounded fill size='large'/>
      <Uik.Button text='Nomorphism button' neomorph/>
      <Uik.Button text='Button' loading/>
      <Uik.Button text='Button' loading size='small'/>
      <Uik.Button text='Button' loading size='large'/>
      <Uik.Button text='Button' loading loader='fish'/>
      <Uik.Button text='Button' loading size='small' loader='fish'/>
      <Uik.Button text='Button' loading size='large' loader='fish'/>
      <Uik.Button icon={faArrowsRotate} size='large'/>
    </>
  )
}

const code = `<>
  <Uik.Button text='Default button'/>
  <Uik.Button text='Left icon' icon={faArrowsRotate}/>
  <Uik.Button text='Right icon' icon={faArrowsRotate} iconPosition='right'/>
  <Uik.Button text='Small button' size='small'/>
  <Uik.Button text='Large button' size='large'/>
  <Uik.Button text='Filled button' fill/>
  <Uik.Button text='Danger button' danger/>
  <Uik.Button text='Success button' success/>
  <Uik.Button text='Disabled button' disabled/>
  <Uik.Button text='Rounded button' rounded fill size='large'/>
  <Uik.Button text='Nomorphism button' neomorph/>
  <Uik.Button text='Button' loading/>
  <Uik.Button text='Button' loading size='small'/>
  <Uik.Button text='Button' loading size='large'/>
  <Uik.Button text='Button' loading loader='fish'/>
  <Uik.Button text='Button' loading size='small' loader='fish'/>
  <Uik.Button text='Button' loading size='large' loader='fish'/>
  <Uik.Button icon={faArrowsRotate} size='large'/>
</>`

export default Example