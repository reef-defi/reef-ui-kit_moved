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
  }
}

const calcProvide = ({
  firstToken,
  secondToken,
  percentage
}: {
  firstToken?: number,
  secondToken?: number,
  percentage?: number
}): { firstToken: number, secondToken: number, percentage: number, value: number } => {
  return {
    firstToken: 0,
    secondToken: 0,
    percentage: 0,
    value: 0
  }
}

const calcWithdraw = ({
  percentage
}: {
  percentage: number
}): { firstToken: number, secondToken: number, value: number } => {
  return {
    firstToken: 0,
    secondToken: 0,
    value: 0
  }
}

const onProvide = e => console.log("Provide", e)
const onWithdraw = e => console.log("Withdraw", e)
const onTrade = e => console.log("Trade", e)

function Example () {
  return (
    <>
      <Title text='Pool Actions'/>

      <Uik.PoolActions
        className="example-pool-actions"
        data={data}

        calcWithdraw={calcWithdraw}
        calcProvide={calcProvide}
        
        onProvide={onProvide}
        onWithdraw={onWithdraw}
        onTrade={onTrade}
      />
    </>
  )
}

export default Example