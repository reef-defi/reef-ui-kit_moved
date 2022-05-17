import Uik from "@reef-defi/ui-kit"
import Title from "./Title"

function Example () {
  return (
    <>
      <Title text='Copy Button' code={code}/>
        
      <Uik.Text>Click to copy text</Uik.Text>

      <Uik.CopyButton
        className="example-copy-btn"
        value="Copied text"
        notification="Copied text to clipboard"
        tooltip="Copy text to clipboard"
      />
    </>
  )
}

const code = `<>
  <Uik.CopyButton
    value="Copied text"
    notification="Copied text to clipboard"
    tooltip="Copy text to clipboard"
  />
</>`

export default Example