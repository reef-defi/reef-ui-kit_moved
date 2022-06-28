import { useState } from "react"
import Uik from "../../ui-kit"
import Title from "./Title"

function Example () {
  const [value, setValue] = useState(50)

  return (
    <>
      <Title text='Slider' code={code}/>
        
      <Uik.Card className="example-slider__card">
        <Uik.Slider
          value={value}
          onChange={e => setValue(e)}
          tooltip={value + '%'}
          helpers={[
            { position: 0, text: "0%" },
            { position: 25 },
            { position: 50, text: "50%" },
            { position: 75, },
            { position: 100, text: "100%" },
          ]}
        />
      </Uik.Card>
    </>
  )
}

const code = `const [value, setValue] = useState(50)

<>
<Uik.Slider
  value={value}
  onChange={e => setValue(e)}
  tooltip={value + '%'}
  helpers={[
    { position: 0, text: "0%" },
    { position: 25 },
    { position: 50, text: "50" },
    { position: 75, },
    { position: 100, text: "100%" },
  ]}
/>
</>`

export default Example