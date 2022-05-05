import { useState } from 'react';
import Uik from "./../../ui-kit"
import Title from "./Title"

function Example () {
  const [ selected, setSelected ] = useState([1])

  const isSelected = (item) => {
    // @ts-ignore-next-line
    return selected.includes(item)
  }

  const select = (item, value) => {
    let list = [ ...selected ]

    // @ts-ignore-next-line
    if (value) list.push(item)
    // @ts-ignore-next-line
    else list.splice(list.indexOf(item), 1)

    setSelected(list)
  }

  return (
    <>
      <Title text='Checkbox' code={code}/>

      <Uik.Card>
        <Uik.Form>
            <Uik.Checkbox
              value={isSelected(1)}
              onChange={e => select(1, e)}
            />

            <Uik.Checkbox
              label="With label"
              value={isSelected(2)}
              onChange={e => select(2, e)}
            />

            <Uik.Checkbox
              label="Disabled checkbox"
              disabled
              value={isSelected(3)}
              onChange={e => select(3, e)}
            />
        </Uik.Form>

        <Uik.Form>
            <Uik.Label text="Example"/>

            <Uik.Checkbox
              label="First option"
              value={isSelected(4)}
              onChange={e => select(4, e)}
            />

            <Uik.Checkbox
              label="Second option"
              value={isSelected(5)}
              onChange={e => select(5, e)}
            />

            <Uik.Checkbox
              label="Third option"
              value={isSelected(6)}
              onChange={e => select(6, e)}
            />
        </Uik.Form>
      </Uik.Card>
    </>
  )
}

const code = `const [ selected, setSelected ] = useState([1])

const isSelected = (item) => {
  return selected.includes(item)
}

const select = (item, value) => {
  let list = [ ...selected ]

  if (value) list.push(item)
  else list.splice(list.indexOf(item), 1)

  setSelected(list)
}

<>
  <Uik.Checkbox
    value={isSelected(1)}
    onChange={e => select(1, e)}
  />

  <Uik.Checkbox
    label="With label"
    value={isSelected(2)}
    onChange={e => select(2, e)}
  />

  <Uik.Checkbox
    label="Disabled checkbox"
    disabled
    value={isSelected(3)}
    onChange={e => select(3, e)}
  />

  <Uik.Checkbox
    label="First option"
    value={isSelected(4)}
    onChange={e => select(4, e)}
  />

  <Uik.Checkbox
    label="Second option"
    value={isSelected(5)}
    onChange={e => select(5, e)}
  />

  <Uik.Checkbox
    label="Third option"
    value={isSelected(6)}
    onChange={e => select(6, e)}
  />
</>`

export default Example