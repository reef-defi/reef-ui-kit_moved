import Uik from "../../ui-kit"
import Title from "./Title"

function Example () {
  return (
    <>
      <Title text='Prompt' code={code}/>

      <Uik.Text>Click to show prompt</Uik.Text>

      <Uik.Container>
        <Uik.Button
          fill
          text='Default prompt'
          size='large'
          onClick={() => Uik.prompt({
            title: "Information",
            message: "This is a default prompt.",
            actions: <>
              <Uik.Button text="I understand" fill/>
              <Uik.Button text="Close"/>
            </>
          })}
        />

        <Uik.Button
          success
          text='Success prompt'
          size='large'
          onClick={() => Uik.prompt({
            type: "success",
            title: "Successfully completed",
            message: "Your action has been successfully completed.",
            actions: <>
              <Uik.Button text="Open" success/>
            </>
          })}
        />

        <Uik.Button
          danger
          text='Danger prompt'
          size='large'
          onClick={() => Uik.prompt({
            type: "danger",
            title: "Error has occurred",
            message: 'An expected error has occurred.\nPage will reload to keep everything in order.',
            actions: <Uik.Button text="Reload page" danger/>
          })}
        />
      </Uik.Container>
    </>
  )
}

const code = `<>
  <Uik.Button
    fill
    text='Default prompt'
    size='large'
    onClick={() => Uik.prompt({
      title: "Info",
      message: "This is a default prompt.",
      actions: <Uik.Button text="Close"/>
    })}
  />

  <Uik.Button
    success
    text='Success prompt'
    size='large'
    onClick={() => Uik.prompt({
      type: "success",
      title: "Successfully completed",
      message: "Your action has been successfully completed.",
      actions: <>
        <Uik.Button text="Open" fill/>
        <Uik.Button text="Close"/>
      </>
    })}
  />

  <Uik.Button
    danger
    text='Danger prompt'
    size='large'
    onClick={() => Uik.prompt({
      type: "danger",
      title: "Error has occurred",
      message: 'An expected error has occurred.\\nPage will reload to keep everything in order.',
      actions: <Uik.Button text="Reload page"/>
    })}
  />
</>`

export default Example