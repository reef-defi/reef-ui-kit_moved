import { useState } from 'react';
import Uik from "./../../ui-kit"

function Example () {
  const [ firstSelected, setFirstSelected ] = useState(1)
  const [ secondSelected, setSecondSelected ] = useState(1)

  return (
    <>
      <Uik.Divider text='Radio'/>

      <Uik.Card>
        <Uik.Form>
            <Uik.Radio
              value={firstSelected === 1}
              onSelect={() => setFirstSelected(1)}
            />

            <Uik.Radio
              label="With label"
              value={firstSelected === 2}
              onSelect={() => setFirstSelected(2)}
            />

            <Uik.Radio
              label="Disabled radio"
              disabled
              value={firstSelected === 3}
              onSelect={() => setFirstSelected(3)}
            />
        </Uik.Form>

        <Uik.Form>
          <Uik.Label text="Example"/>

          <Uik.Radio
            label="First option"
            value={secondSelected === 1}
            onSelect={() => setSecondSelected(1)}
          />

          <Uik.Radio
            label="Second option"
            value={secondSelected === 2}
            onSelect={() => setSecondSelected(2)}
          />

          <Uik.Radio
            label="Third option"
            value={secondSelected === 3}
            onSelect={() => setSecondSelected(3)}
          />
        </Uik.Form>
      </Uik.Card>
    </>
  )
}

export default Example