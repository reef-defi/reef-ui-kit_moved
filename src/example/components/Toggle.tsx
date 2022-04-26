import { useState } from 'react';
import Uik from "./../../ui-kit"

function Example () {
  const [ firstValue, setFirstValue ] = useState(true)
  const [ secondValue, setSecondValue ] = useState(true)
  const [ thirdValue, setThirdValue ] = useState(false)
  const [ fourthValue, setFourthValue ] = useState(false)

  return (
    <>
      <Uik.Divider text='Toggle'/>

      <Uik.Card>
        <Uik.Form>
            <Uik.Container>
              <Uik.Toggle
                value={firstValue}
                onChange={e => setFirstValue(e)}
              />

              <Uik.Toggle
                onText='Enabled'
                offText='Disabled'
                value={secondValue}
                onChange={e => setSecondValue(e)}
              />
            </Uik.Container>

            <Uik.Container>
              <Uik.Toggle
                label='With label'
                value={thirdValue}
                onChange={e => setThirdValue(e)}
              />

              <Uik.Toggle
                label='Disabled toggle'
                disabled
                value={fourthValue}
                onChange={e => setFourthValue(e)}
              />
            </Uik.Container>
        </Uik.Form>
      </Uik.Card>
    </>
  )
}

export default Example