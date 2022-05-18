import Uik from "../../ui-kit"
import Title from "./Title"

function Example () {
  return (
    <>
      <Title text='Notifications' code={code}/>

      <Uik.Text>Click to show notifications</Uik.Text>

      <Uik.Container>
        <Uik.Button
          fill
          text='Default notification'
          size='large'
          onClick={() => Uik.notify.info('This is a default notification.\nIt will go away after 4 seconds.')}
        />

        <Uik.Button
          success
          text='Success notification'
          size='large'
          onClick={() => Uik.notify.success('Successfully updated.')}
        />

        <Uik.Button
          danger
          text='Danger notification'
          size='large'
          onClick={() => Uik.notify.danger('An error has occurred.')}
        />
      </Uik.Container>

      <Uik.Container>
        <Uik.Button
          text='Notification for 1 second'
          size='large'
          onClick={() => Uik.notify.info({
            message: 'This notification will disappear after 1 second.',
            aliveFor: 1
          })}
        />

        <Uik.Button
          text='Permanant notification'
          size='large'
          onClick={() => Uik.notify.info({
            message: 'This notification will remain on screen until it\'s manually closed.',
            keepAlive: true
          })}
        />
      </Uik.Container>

      <Uik.Container>
        <Uik.Button
          text='Notification with action'
          size='large'
          onClick={() => Uik.notify.success({
            message: 'You have successfully created a new wallet.',
            children: <Uik.Button success text='Open wallet'/>
          })}
        />

        <Uik.Button
          text='Prompt notification'
          size='large'
          onClick={() => Uik.notify.info({
            message: 'Use notifications as prompts.\nNotification will close if any button is clicked.',
            keepAlive: true,
            children: <>
              <Uik.Button text='Cancel'/>
              <Uik.Button text='Confirm' fill onClick={() => alert('Confirmed')}/>
            </>
          })}
        />
      </Uik.Container>
    </>
  )
}

const code = `<>
  <Uik.Button
    fill
    text='Default notification'
    size='large'
    onClick={() => Uik.notify.info('This is a default notification.\nIt will go away after 4 seconds.')}
  />

  <Uik.Button
    success
    text='Success notification'
    size='large'
    onClick={() => Uik.notify.success('Successfully updated.')}
  />

  <Uik.Button
    danger
    text='Danger notification'
    size='large'
    onClick={() => Uik.notify.danger('An error has occurred.')}
  />

  <Uik.Button
    text='Notification for 1 second'
    size='large'
    onClick={() => Uik.notify.info({
      message: 'This notification will disappear after 1 second.',
      aliveFor: 1
    })}
  />

  <Uik.Button
    text='Permanant notification'
    size='large'
    onClick={() => Uik.notify.info({
      message: 'This notification will remain on screen until it\\'s manually closed.',
      keepAlive: true
    })}
  />

  <Uik.Button
    text='Notification with action'
    size='large'
    onClick={() => Uik.notify.success({
      message: 'You have successfully created a new wallet.',
      children: <Uik.Button success text='Open wallet'/>
    })}
  />

  <Uik.Button
    text='Prompt notification'
    size='large'
    onClick={() => Uik.notify.info({
      message: 'Use notifications as prompts.\\nNotification will close if any button is clicked.',
      keepAlive: true,
      children: <>
        <Uik.Button text='Cancel'/>
        <Uik.Button
          text='Confirm'
          fill
          onClick={() => alert('Confirmed')}
        />
      </>
    })}
  />
</>`

export default Example