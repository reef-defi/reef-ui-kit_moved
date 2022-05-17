import Uik from "@reef-defi/ui-kit"
import Title from "./Title"

function Example () {
  return (
    <>
      <Title text='Celebrate' code={code}/>

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

const code = `<>
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
</>`

export default Example