import Uik from "./../../ui-kit"

function Example () {
  return (
    <>
      <Uik.Divider text='Avatar'/>

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
        <Uik.Avatar avatar="1" size="extra-large"/>
        <Uik.Avatar avatar="2" size="extra-large"/>
        <Uik.Avatar avatar="3" size="extra-large"/>
        <Uik.Avatar avatar="4" size="extra-large"/>
        <Uik.Avatar avatar="5" size="extra-large"/>
        <Uik.Avatar avatar="6" size="extra-large"/>
      </Uik.Container>
      <Uik.Container flow="spaceBetween">
        <Uik.Avatar avatar="7" size="extra-large"/>
        <Uik.Avatar avatar="8" size="extra-large"/>
        <Uik.Avatar avatar="9" size="extra-large"/>
        <Uik.Avatar avatar="10" size="extra-large"/>
        <Uik.Avatar avatar="11" size="extra-large"/>
        <Uik.Avatar avatar="12" size="extra-large"/>
      </Uik.Container>
      <Uik.Container flow="spaceBetween">
        <Uik.Avatar avatar="13" size="extra-large"/>
        <Uik.Avatar avatar="14" size="extra-large"/>
        <Uik.Avatar avatar="15" size="extra-large"/>
        <Uik.Avatar avatar="16" size="extra-large"/>
        <Uik.Avatar avatar="17" size="extra-large"/>
        <Uik.Avatar avatar="18" size="extra-large"/>
      </Uik.Container>
      <Uik.Container flow="spaceBetween">
        <Uik.Avatar avatar="19" size="extra-large"/>
        <Uik.Avatar avatar="20" size="extra-large"/>
        <Uik.Avatar avatar="21" size="extra-large"/>
        <Uik.Avatar avatar="22" size="extra-large"/>
        <Uik.Avatar avatar="23" size="extra-large"/>
        <Uik.Avatar avatar="24" size="extra-large"/>
      </Uik.Container>
      <Uik.Container flow="spaceBetween">
        <Uik.Avatar avatar="25" size="extra-large"/>
        <Uik.Avatar avatar="26" size="extra-large"/>
        <Uik.Avatar avatar="27" size="extra-large"/>
        <Uik.Avatar avatar="28" size="extra-large"/>
        <Uik.Avatar avatar="29" size="extra-large"/>
        <Uik.Avatar avatar="30" size="extra-large"/>
      </Uik.Container>
      <Uik.Container flow="spaceBetween">
        <Uik.Avatar avatar="31" size="extra-large"/>
        <Uik.Avatar avatar="32" size="extra-large"/>
        <Uik.Avatar avatar="33" size="extra-large"/>
        <Uik.Avatar avatar="34" size="extra-large"/>
        <Uik.Avatar avatar="35" size="extra-large"/>
        <Uik.Avatar avatar="36" size="extra-large"/>
      </Uik.Container>
    </>
  )
}

export default Example