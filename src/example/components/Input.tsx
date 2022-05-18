import { useState } from 'react';
import Uik from "../../ui-kit"
import Title from "./Title"

function Example () {
  const [ value, setValue ] = useState("")

  return (
    <>
      <Title text='Input' code={code}/>

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
          <Uik.Input label='Error' error="There's a problem with the value you entered" defaultValue='Some text'/>
        </Uik.Form>
      </Uik.Card>
    </>
  )
}

const code = `const [ value, setValue ] = useState("")

<>
  <Uik.Input
    label='Input'
    value={value}
    onInput={e => setValue(e.target.value)}
  />

  <Uik.Input label='Password' type='password' required />
  <Uik.Input label='Placeholder' placeholder='Some text ...' />
  <Uik.Input label='Multiline' textarea />
  <Uik.Input
    label='Error'
    defaultValue='Some text'
    error="There's a problem with the value you entered"
  />
</>`

export default Example