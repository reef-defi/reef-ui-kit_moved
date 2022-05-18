import Uik from "../../ui-kit"
import Title from "./Title"

function Example () {
  return (
    <>
      <Title text='Alert' code={code}/>

      <Uik.Alert
        type='info'
        text={'This is a default alert.\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis tortor nec hendrerit hendrerit.'}
      />

      <Uik.Alert
        type='danger'
        text='An error has occurred.'
      />

      <Uik.Alert
        type='success'
        text='Successfully updated.'
      />

      <Uik.Alert
        type='info'
        text='This is a default alert.'
        children={ <Uik.Button text='Undo'/> }
      />

      <Uik.Alert
        type='info'
        text={'This is a default alert.\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis tortor nec hendrerit hendrerit.'}
        children={
          <>
            <Uik.Button text='Cancel'/>
            <Uik.Button fill text='Confirm'/>
          </>
        }
      />
    </>
  )
}

const code = `<>
  <Uik.Alert
    type='info'
    text={'This is a default alert.\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis tortor nec hendrerit hendrerit.'}
  />

  <Uik.Alert
    type='danger'
    text='An error has occurred.'
  />

  <Uik.Alert
    type='success'
    text='Successfully updated.'
  />

  <Uik.Alert
    type='info'
    text='This is a default alert.'
    children={ <Uik.Button text='Undo'/> }
  />

  <Uik.Alert
    type='info'
    text={'This is a default alert.\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis tortor nec hendrerit hendrerit.'}
    children={
      <>
        <Uik.Button text='Cancel'/>
        <Uik.Button fill text='Confirm'/>
      </>
    }
  />
</>`

export default Example