import { useState } from 'react';
import Uik from "./../../ui-kit"

function Example () {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Uik.Divider text='Modal'/>
        
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
        onClick={() => setIsOpen(!isOpen)}
      />

      <Uik.Modal
        title='Title'
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onOpened={() => {}}
        onClosed={() => {}}
        footer={
          <>
            <Uik.Button text='Close' onClick={() => setIsOpen(false)}/>
            <Uik.Button text='Confirm' fill onClick={() => setIsOpen(false)}/>
          </>
        }
      >
        <Uik.Text>Place modal content here ...</Uik.Text>
      </Uik.Modal>
    </>
  )
}

export default Example