import Uik from "./../../ui-kit"

function Example () {
  return (
    <>
      <Uik.Divider text='Copy Button'/>
        
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

export default Example