import { useState } from "react"
import Tabs from "../../atoms/Tabs"
import Provide from "./Provide"
import Withdraw from "./Withdraw"
import Trade from "./Trade"

export interface Token {
  name: string,
  symbol: string,
  image?: string,
}

export interface PoolToken extends Token {
  available: number,
  price: number
}

export interface Data {
  firstToken: PoolToken,
  secondToken: PoolToken
}

export type CustomFunction = (...args: any[]) => any

export interface Events {
  onTabChange?: CustomFunction,
  onProvideInput?: CustomFunction,
  onWithdrawInput?: CustomFunction,
  onTradeInput?: CustomFunction,
  onProvide?: CustomFunction,
  onWithdraw?: CustomFunction,
  onTrade?: CustomFunction,
  onSwitchTokens?: CustomFunction
}

export interface Calculations {
  calcProvide?: CustomFunction,
  calcWithdraw?: CustomFunction
}

export interface Props extends Events, Calculations {
  data: Data,
  tab?: "Provide" | "Withdraw" | "Trade",
  className?: string
}

export type TokenKey = "firstToken" | "secondToken"

const PoolActions = ({
  onTabChange,
  onProvideInput,
  onWithdrawInput,
  onTradeInput,
  onProvide,
  onWithdraw,
  onTrade,
  onSwitchTokens,
  calcProvide,
  calcWithdraw,
  data,
  tab = "Trade",
  className
}: Props): JSX.Element => {
  const [ currentTab, setTab ] = useState(tab)

  const selectTab = (value: "Provide" | "Withdraw" | "Trade") => {
    if (onTabChange) {
      const from = currentTab
      const to = value

      onTabChange({ from, to })
    }

    setTab(value)
  }

  return (
    <div
      className={`
        uik-pool-actions
        ${className || ''}
      `}
    >
      <div className="uik-pool-actions__top">
        <Tabs
          value={currentTab}
          onChange={value => selectTab(value)}
          options={["Trade", "Provide", "Withdraw"]}
        />
      </div>

      {
          currentTab === "Provide" &&
          <Provide
            data={data}
            onInput={onProvideInput}
            onConfirm={onProvide}
            calcValues={calcProvide}
          />
        }

        {
          currentTab === "Withdraw" &&
          <Withdraw
            data={data}
            onInput={onWithdrawInput}
            onConfirm={onWithdraw}
            calcValues={calcWithdraw}
          />
        }

        {
          currentTab === "Trade" &&
          <Trade
            data={data}
            onInput={onTradeInput}
            onConfirm={onTrade}
            onSwitchTokens={onSwitchTokens}
          />
        }
    </div>
  )
}

export default PoolActions