import { useState } from 'react';
import Uik from "@reef-defi/ui-kit"
import Title from "./Title"

function Example () {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <Title text='Modal' code={code}/>
        
      <Uik.Modal
        className='example__open-modal'
        title='Title'
        isOpen={true}
        onClose={() => {}}
        footer={
          <>
            <Uik.Button text='Close'/>
            <Uik.Button text='Confirm' fill/>
          </>
        }
      >
        <Uik.Text>Place modal content here ...</Uik.Text>
      </Uik.Modal>

      <Uik.Button
        size='large'
        text={ isOpen ? 'Close modal' : 'Test modal' }
        fill
        onClick={() => setOpen(!isOpen)}
      />

      <Uik.Modal
        title='Title'
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        onOpened={() => {}}
        onClosed={() => {}}
        footer={
          <>
            <Uik.Button text='Close' onClick={() => setOpen(false)}/>
            <Uik.Button text='Confirm' fill onClick={() => setOpen(false)}/>
          </>
        }
      >
        <Uik.Text>Place modal content here ...</Uik.Text>
      </Uik.Modal>
    </>
  )
}

const code = `const [isOpen, setOpen] = useState(false)

<>
  <Uik.Modal
    title='Title'
    isOpen={isOpen}
    onClose={() => setOpen(false)}
    onOpened={() => {}}
    onClosed={() => {}}
    footer={
      <>
        <Uik.Button text='Close' onClick={() => setOpen(false)}/>
        <Uik.Button text='Confirm' fill onClick={() => setOpen(false)}/>
      </>
    }
  >
    <Uik.Text>Place modal content here ...</Uik.Text>
  </Uik.Modal>
</>`

export default Example