import Uik from "../../ui-kit"
import Title from "./Title"

function Example () {
  return (
    <>
      <Title text='Tooltip' code={code}/>

      <Uik.Tooltip text='Tooltip'>
        <Uik.Button text='Hover to show tooltip'/>
      </Uik.Tooltip>

      <Uik.Tooltip text='Bottom tooltip' position='bottom'>
        <Uik.Button text='Hover to show bottom tooltip'/>
      </Uik.Tooltip>

      <Uik.Tooltip text='Left tooltip' position='left'>
        <Uik.Button text='Hover to show left tooltip'/>
      </Uik.Tooltip>

      <Uik.Tooltip text='Right tooltip' position='right'>
        <Uik.Button text='Hover to show right tooltip'/>
      </Uik.Tooltip>

      <Uik.Tooltip text='This tooltip is shown instantly' delay={0}>
        <Uik.Button text='Hover to show tooltip without delay'/>
      </Uik.Tooltip>
    </>
  )
}

const code = `<>
  <Uik.Tooltip text='Tooltip'>
    <Uik.Button text='Hover to show tooltip'/>
  </Uik.Tooltip>

  <Uik.Tooltip text='Bottom tooltip' position='bottom'>
    <Uik.Button text='Hover to show bottom tooltip'/>
  </Uik.Tooltip>

  <Uik.Tooltip text='Left tooltip' position='left'>
    <Uik.Button text='Hover to show left tooltip'/>
  </Uik.Tooltip>

  <Uik.Tooltip text='Right tooltip' position='right'>
    <Uik.Button text='Hover to show right tooltip'/>
  </Uik.Tooltip>

  <Uik.Tooltip text='This tooltip is shown instantly' delay={0}>
    <Uik.Button text='Hover to show tooltip without delay'/>
  </Uik.Tooltip>
</>`

export default Example