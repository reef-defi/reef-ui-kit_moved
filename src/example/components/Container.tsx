import Uik from "../../ui-kit"
import Title from "./Title"

function Example () {
  return (
    <>
      <Title text='Container' code={code}/>

      <Uik.Card title='Default' titlePosition='center'>
        <Uik.Container>
          <Uik.Button text='Button 1'/>
          <Uik.Button text='Button 2'/>
          <Uik.Button text='Button 3'/>
        </Uik.Container>
      </Uik.Card>

      <Uik.Card title='Start' titlePosition='center'>
        <Uik.Container flow='start'>
          <Uik.Button text='Button 1'/>
          <Uik.Button text='Button 2'/>
          <Uik.Button text='Button 3'/>
        </Uik.Container>
      </Uik.Card>

      <Uik.Card title='End' titlePosition='center'>
        <Uik.Container flow='end'>
          <Uik.Button text='Button 1'/>
          <Uik.Button text='Button 2'/>
          <Uik.Button text='Button 3'/>
        </Uik.Container>
      </Uik.Card>

      <Uik.Card title='Space around' titlePosition='center'>
        <Uik.Container flow='spaceAround'>
          <Uik.Button text='Button 1'/>
          <Uik.Button text='Button 2'/>
          <Uik.Button text='Button 3'/>
        </Uik.Container>
      </Uik.Card>

      <Uik.Card title='Space between' titlePosition='center'>
        <Uik.Container flow='spaceBetween'>
          <Uik.Button text='Button 1'/>
          <Uik.Button text='Button 2'/>
          <Uik.Button text='Button 3'/>
        </Uik.Container>
      </Uik.Card>

      <Uik.Card title='Stretch' titlePosition='center'>
        <Uik.Container flow='stretch'>
          <Uik.Button text='Button 1'/>
          <Uik.Button text='Button 2'/>
          <Uik.Button text='Button 3'/>
        </Uik.Container>
      </Uik.Card>

      <Uik.Card title='Vertical' titlePosition='center'>
        <Uik.Container vertical>
          <Uik.Button text='Button 1'/>
          <Uik.Button text='Button 2'/>
          <Uik.Button text='Button 3'/>
        </Uik.Container>
      </Uik.Card>
    </>
  )
}

const code = `<>
  <Uik.Card title='Default' titlePosition='center'>
    <Uik.Container>
      <Uik.Button text='Button 1'/>
      <Uik.Button text='Button 2'/>
      <Uik.Button text='Button 3'/>
    </Uik.Container>
  </Uik.Card>

  <Uik.Card title='Start' titlePosition='center'>
    <Uik.Container flow='start'>
      <Uik.Button text='Button 1'/>
      <Uik.Button text='Button 2'/>
      <Uik.Button text='Button 3'/>
    </Uik.Container>
  </Uik.Card>

  <Uik.Card title='End' titlePosition='center'>
    <Uik.Container flow='end'>
      <Uik.Button text='Button 1'/>
      <Uik.Button text='Button 2'/>
      <Uik.Button text='Button 3'/>
    </Uik.Container>
  </Uik.Card>

  <Uik.Card title='Space around' titlePosition='center'>
    <Uik.Container flow='spaceAround'>
      <Uik.Button text='Button 1'/>
      <Uik.Button text='Button 2'/>
      <Uik.Button text='Button 3'/>
    </Uik.Container>
  </Uik.Card>

  <Uik.Card title='Space between' titlePosition='center'>
    <Uik.Container flow='spaceBetween'>
      <Uik.Button text='Button 1'/>
      <Uik.Button text='Button 2'/>
      <Uik.Button text='Button 3'/>
    </Uik.Container>
  </Uik.Card>

  <Uik.Card title='Stretch' titlePosition='center'>
    <Uik.Container flow='stretch'>
      <Uik.Button text='Button 1'/>
      <Uik.Button text='Button 2'/>
      <Uik.Button text='Button 3'/>
    </Uik.Container>
  </Uik.Card>

  <Uik.Card title='Vertical' titlePosition='center'>
    <Uik.Container vertical>
      <Uik.Button text='Button 1'/>
      <Uik.Button text='Button 2'/>
      <Uik.Button text='Button 3'/>
    </Uik.Container>
  </Uik.Card>
</>`

export default Example