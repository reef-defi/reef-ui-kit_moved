import { useState, useMemo } from "react"
import Tabs from "../../atoms/Tabs"
import Provide from "./Provide"
import Withdraw from "./Withdraw"

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
  secondToken: PoolToken,
  providedLiquidity?: number
}

export type CustomFunction = (...args: any[]) => any

export interface Events {
  onTabChange?: CustomFunction,
  onProvideInput?: CustomFunction,
  onWithdrawInput?: CustomFunction,
  onTradeInput?: CustomFunction,
  onProvide?: CustomFunction,
  onWithdraw?: CustomFunction,
  onTrade?: CustomFunction
}

export interface Props extends Events {
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
  data,
  tab = "Provide",
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

  const getTabs = useMemo(() => {
    if (data.providedLiquidity) return ["Provide", "Withdraw", "Trade"]
    else return ["Provide", "Trade"]
  }, [ data.providedLiquidity ])

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
          options={getTabs}
        />
      </div>

      {
          currentTab === "Provide" &&
          <Provide
            data={data}
            onInput={onProvideInput}
            onConfirm={onProvide}
          />
        }

        {
          currentTab === "Withdraw" &&
          <Withdraw
            data={data}
            onInput={onWithdrawInput}
            onConfirm={onWithdraw}
          />
        }
    </div>
  )
}

export default PoolActions