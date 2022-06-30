import Uik from "../../ui-kit"
import Title from "./Title"

const data = {
  firstToken: {
    name: 'Reef',
    image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6951.png',
    available: 1000,
    provided: 500,
    ratio: 0.001
  },
  secondToken: {
    name: 'Test',
    image: '',
    available: 1000000,
    provided: 500000,
    ratio: 1000
  },
  fees: {
    provide: {
      amount: 0.02,
      token: {
        name: 'Reef',
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6951.png'
      }
    },
    withdraw: {
      amount: 0.02,
      token: {
        name: 'Reef',
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6951.png'
      }
    }
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