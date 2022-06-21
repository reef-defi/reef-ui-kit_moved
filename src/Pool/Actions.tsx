import Uik from "../ui-kit";
import "./actions.css";

const data = {
  firstToken: {
    name: "Reef",
    image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6951.png',
    availableAmount: 1000,
    providedAmount: 500,
    ratio: {
      provide: 50
    }
  },
  secondToken: {
    name: "Test",
    image: "",
    availableAmount: 1000000,
    providedAmount: 500000,
    ratio: {
      provide: 50
    }
  },
  fees: {
    provide: {
      amount: 0.02,
      token: {
        name: "Reef",
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6951.png',
      }
    }
  }
}

const Actions = () => (
  <div className="pool-actions">
    <Uik.PoolActions data={data}/>
  </div>
);

export default Actions