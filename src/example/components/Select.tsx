import { useState } from 'react';
import Uik from "./../../ui-kit"

function Example () {
  const [value, setValue] = useState("option1")

  const options = ["option1", "option2", "option3"]

  return (
    <>
      <Uik.Divider text='Select'/>
        
      <Uik.Card>
        <Uik.Select
          label="Select"
          value={value}
          options={options}
          onChange={value => setValue(value)}
        />
      </Uik.Card>
    </>
  )
}

export default Example