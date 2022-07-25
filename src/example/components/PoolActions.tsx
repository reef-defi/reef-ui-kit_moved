import Uik from "../../ui-kit"
import Title from "./Title"

const data = {
  firstToken: {
    name: 'Reef',
    symbol: "REEF",
    image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6951.png',
    price: 0.05,
    available: 10000
  },
  secondToken: {
    name: 'Test Token',
    symbol: "TEST",
    image: '',
    price: 0.025,
    available: 20000
  },
  providedLiquidity: 2000
}

function Example () {
  const onProvide = e => console.log("Provide", e)
  const onWithdraw = e => console.log("Withdraw", e)
  const onTrade = e => console.log("Trade", e)

  return (
    <>
      <Title text='Pool Actions'/>

      <Uik.PoolActions
        data={data}
        className="example-pool-actions"
        onProvide={onProvide}
        onWithdraw={onWithdraw}
        onTrade={onTrade}
      />
    </>
  )
}

export default Example