import Uik from "../../ui-kit"
import Title from "./Title"

const data = {
  firstToken: {
    name: 'Reef',
    symbol: "REEF",
    image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6951.png',
    available: 1000,
    provided: 500,
    price: 0.035,
    ratio: 0.001
  },
  secondToken: {
    name: 'Test Token',
    symbol: "TEST",
    image: '',
    available: 1000000,
    provided: 500000,
    price: 0.000035,
    ratio: 1000
  }
}

function Example () {
  return (
    <>
      <Title text='Pool Actions'/>

      <Uik.PoolActions
        data={data}
        className="example-pool-actions"
      />
    </>
  )
}

export default Example