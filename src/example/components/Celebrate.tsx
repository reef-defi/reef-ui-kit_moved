import Uik from "./../../ui-kit"

function Example () {
  return (
    <>
      <Uik.Divider text='Celebrate'/>

      <Uik.Container>
        <Uik.Button
          text='Drop Confetti'
          fill
          size='large'
          onClick={() => Uik.dropConfetti() }
        />

        <Uik.Button
          text='Drop Money'
          success
          size='large'
          onClick={() => Uik.dropMoney() }
        />
      </Uik.Container>
    </>
  )
}

export default Example