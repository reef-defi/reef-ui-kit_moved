import Container from "../helpers/Container"
import Celebrate, { Type } from "../components/atoms/Celebrate"

const container = new Container("uik-celebrate-container")

const drop = (type?: Type) => {
  container.render(
    <Celebrate
      onDestroy={container.destroy}
      type={type}
    />
  )
}

const celebrate = {
  dropConfetti: () => { drop("confetti") },
  dropMoney: () => { drop("money") }
}

export default celebrate