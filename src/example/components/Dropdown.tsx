import { useState } from 'react';
import Uik from "./../../ui-kit"
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

function Example () {
  const [isOpen, setIsOpen] = useState(false)

  const [position, setPosition] = useState("")

  const positions = [
    { key: "", text: "Bottom" },
    { key: "top", text: "Top" },
    { key: "bottomRight", text: "Bottom right" },
    { key: "bottomLeft", text: "Bottom left" },
    { key: "topRight", text: "Top right" },
    { key: "topLeft", text: "Top left" },
  ]

  return (
    <>
      <Uik.Divider text='Dropdown'/>

      <Uik.Dropdown className='example__open-dropdown' isOpen={true} onClose={() => {}}>
          <Uik.DropdownItem icon={faArrowsRotate} text='Dropdown item' onClick={() => {}}/>
          <Uik.DropdownItem icon={faArrowsRotate} text='Dropdown item' onClick={() => {}}/>
          <Uik.DropdownItem icon={faArrowsRotate} text='Dropdown item' onClick={() => {}}/>
          <Uik.Divider/>
          <Uik.DropdownItem icon={faArrowsRotate} text='Dropdown item' onClick={() => {}}/>
          <Uik.DropdownItem icon={faArrowsRotate} text='Dropdown item' onClick={() => {}}/>
      </Uik.Dropdown>

      <Uik.Card>
        <Uik.Container flow="spaceBetween">
          {
            positions.map((pos, index) => (
              <Uik.Radio
                key={index}
                label={pos.text}
                value={position === pos.key}
                onSelect={() => setPosition(pos.key)}
              />
            ))
          }
        </Uik.Container>
      </Uik.Card>

      <Uik.Button
        size='large'
        text={ isOpen ? 'Close dropdown' : 'Test dropdown' }
        fill
        onClick={() => setIsOpen(!isOpen)}
      />

      <Uik.Dropdown
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        // @ts-ignore-next-line
        position={position}
      >
          <Uik.DropdownItem icon={faArrowsRotate} text='Dropdown item' onClick={() => {}}/>
          <Uik.DropdownItem icon={faArrowsRotate} text='Dropdown item' onClick={() => {}}/>
          <Uik.DropdownItem icon={faArrowsRotate} text='Dropdown item' onClick={() => {}}/>
          <Uik.Divider/>
          <Uik.DropdownItem icon={faArrowsRotate} text='Dropdown item' onClick={() => {}}/>
          <Uik.DropdownItem icon={faArrowsRotate} text='Dropdown item' onClick={() => {}}/>
      </Uik.Dropdown>
    </>
  )
}

export default Example