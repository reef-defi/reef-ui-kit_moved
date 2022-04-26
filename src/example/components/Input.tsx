import { useState } from 'react';
import Uik from "./../../ui-kit"

function Example () {
  const [ value, setValue ] = useState("")

  return (
    <>
      <Uik.Divider text='Input'/>

      <Uik.Card>
        <Uik.Form>
          <Uik.Input
            label='Input'
            value={value}
            onInput={e => setValue(e.target.value)}
          />

          {
            !!value &&
            <Uik.Text>Input value: <b>{ value }</b></Uik.Text>
          }

          <Uik.Input label='Password' type='password' required/>
          <Uik.Input label='Placeholder' placeholder='Some text ...'/>
          <Uik.Input label='Multiline' textarea/>
          <Uik.Input label='Error' error={`There's a problem with the value you entered`} defaultValue='Some text'/>
        </Uik.Form>
      </Uik.Card>
    </>
  )
}

export default Example