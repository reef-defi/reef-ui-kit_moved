import Uik from "../../ui-kit"
import Title from "./Title"

function Example () {
  return (
    <>
      <Title text='Avatar' code={code}/>

      <Uik.Container vertical>
        <Uik.Avatar
          name="John Doe"
          image="/images/profile_template.jpg"
          size="extra-large"
        />

        <Uik.Avatar
          name="John Doe"
          image="/images/profile_template.jpg"
          size="large"
        />

        <Uik.Avatar
          name="John Doe"
          image="/images/profile_template.jpg"
        />
  
        <Uik.Avatar
          name="John Doe"
          image="/images/profile_template.jpg"
          size="small"
        />
      </Uik.Container>

      <Uik.Text type="title" className='example-avatar__title'>Avatar library</Uik.Text>

      <Uik.Container flow="spaceBetween">
        <Uik.Avatar image="/images/avatars/1.png" size="extra-large"/>
        <Uik.Avatar image="/images/avatars/2.png" size="extra-large"/>
        <Uik.Avatar image="/images/avatars/3.png" size="extra-large"/>
        <Uik.Avatar image="/images/avatars/4.png" size="extra-large"/>
        <Uik.Avatar image="/images/avatars/5.png" size="extra-large"/>
        <Uik.Avatar image="/images/avatars/6.png" size="extra-large"/>
      </Uik.Container>
      <Uik.Container flow="spaceBetween">
        <Uik.Avatar image="/images/avatars/7.png" size="extra-large"/>
        <Uik.Avatar image="/images/avatars/8.png" size="extra-large"/>
        <Uik.Avatar image="/images/avatars/9.png" size="extra-large"/>
        <Uik.Avatar image="/images/avatars/10.png" size="extra-large"/>
        <Uik.Avatar image="/images/avatars/11.png" size="extra-large"/>
        <Uik.Avatar image="/images/avatars/12.png" size="extra-large"/>
      </Uik.Container>
      <Uik.Container flow="spaceBetween">
        <Uik.Avatar image="/images/avatars/13.png" size="extra-large"/>
        <Uik.Avatar image="/images/avatars/14.png" size="extra-large"/>
        <Uik.Avatar image="/images/avatars/15.png" size="extra-large"/>
        <Uik.Avatar image="/images/avatars/16.png" size="extra-large"/>
        <Uik.Avatar image="/images/avatars/17.png" size="extra-large"/>
        <Uik.Avatar image="/images/avatars/18.png" size="extra-large"/>
      </Uik.Container>
      <Uik.Container flow="spaceBetween">
        <Uik.Avatar image="/images/avatars/19.png" size="extra-large"/>
        <Uik.Avatar image="/images/avatars/20.png" size="extra-large"/>
        <Uik.Avatar image="/images/avatars/21.png" size="extra-large"/>
        <Uik.Avatar image="/images/avatars/22.png" size="extra-large"/>
        <Uik.Avatar image="/images/avatars/23.png" size="extra-large"/>
        <Uik.Avatar image="/images/avatars/24.png" size="extra-large"/>
      </Uik.Container>
      <Uik.Container flow="spaceBetween">
        <Uik.Avatar image="/images/avatars/25.png" size="extra-large"/>
        <Uik.Avatar image="/images/avatars/26.png" size="extra-large"/>
        <Uik.Avatar image="/images/avatars/27.png" size="extra-large"/>
        <Uik.Avatar image="/images/avatars/28.png" size="extra-large"/>
        <Uik.Avatar image="/images/avatars/29.png" size="extra-large"/>
        <Uik.Avatar image="/images/avatars/30.png" size="extra-large"/>
      </Uik.Container>
      <Uik.Container flow="spaceBetween">
        <Uik.Avatar image="/images/avatars/31.png" size="extra-large"/>
        <Uik.Avatar image="/images/avatars/32.png" size="extra-large"/>
        <Uik.Avatar image="/images/avatars/33.png" size="extra-large"/>
        <Uik.Avatar image="/images/avatars/34.png" size="extra-large"/>
        <Uik.Avatar image="/images/avatars/35.png" size="extra-large"/>
        <Uik.Avatar image="/images/avatars/36.png" size="extra-large"/>
      </Uik.Container>
    </>
  )
}

const code = `<>
  <Uik.Avatar
    name="John Doe"
    image="/images/profile_template.jpg"
    size="extra-large"
  />

  <Uik.Avatar
    name="John Doe"
    image="/images/profile_template.jpg"
    size="large"
  />

  <Uik.Avatar
    name="John Doe"
    image="/images/profile_template.jpg"
  />

  <Uik.Avatar
    name="John Doe"
    image="/images/profile_template.jpg"
    size="small"
  />

  <Uik.Avatar image="/images/avatars/1.png" size="extra-large"/>
  <Uik.Avatar image="/images/avatars/2.png" size="extra-large"/>
  <Uik.Avatar image="/images/avatars/3.png" size="extra-large"/>
  <Uik.Avatar image="/images/avatars/4.png" size="extra-large"/>
  <Uik.Avatar image="/images/avatars/5.png" size="extra-large"/>
  <Uik.Avatar image="/images/avatars/6.png" size="extra-large"/>
  <Uik.Avatar image="/images/avatars/7.png" size="extra-large"/>
  <Uik.Avatar image="/images/avatars/8.png" size="extra-large"/>
  <Uik.Avatar image="/images/avatars/9.png" size="extra-large"/>
  <Uik.Avatar image="/images/avatars/10.png" size="extra-large"/>
  <Uik.Avatar image="/images/avatars/11.png" size="extra-large"/>
  <Uik.Avatar image="/images/avatars/12.png" size="extra-large"/>
  <Uik.Avatar image="/images/avatars/13.png" size="extra-large"/>
  <Uik.Avatar image="/images/avatars/14.png" size="extra-large"/>
  <Uik.Avatar image="/images/avatars/15.png" size="extra-large"/>
  <Uik.Avatar image="/images/avatars/16.png" size="extra-large"/>
  <Uik.Avatar image="/images/avatars/17.png" size="extra-large"/>
  <Uik.Avatar image="/images/avatars/18.png" size="extra-large"/>
  <Uik.Avatar image="/images/avatars/19.png" size="extra-large"/>
  <Uik.Avatar image="/images/avatars/20.png" size="extra-large"/>
  <Uik.Avatar image="/images/avatars/21.png" size="extra-large"/>
  <Uik.Avatar image="/images/avatars/22.png" size="extra-large"/>
  <Uik.Avatar image="/images/avatars/23.png" size="extra-large"/>
  <Uik.Avatar image="/images/avatars/24.png" size="extra-large"/>
  <Uik.Avatar image="/images/avatars/25.png" size="extra-large"/>
  <Uik.Avatar image="/images/avatars/26.png" size="extra-large"/>
  <Uik.Avatar image="/images/avatars/27.png" size="extra-large"/>
  <Uik.Avatar image="/images/avatars/28.png" size="extra-large"/>
  <Uik.Avatar image="/images/avatars/29.png" size="extra-large"/>
  <Uik.Avatar image="/images/avatars/30.png" size="extra-large"/>
  <Uik.Avatar image="/images/avatars/31.png" size="extra-large"/>
  <Uik.Avatar image="/images/avatars/32.png" size="extra-large"/>
  <Uik.Avatar image="/images/avatars/33.png" size="extra-large"/>
  <Uik.Avatar image="/images/avatars/34.png" size="extra-large"/>
  <Uik.Avatar image="/images/avatars/35.png" size="extra-large"/>
  <Uik.Avatar image="/images/avatars/36.png" size="extra-large"/>
</>`

export default Example