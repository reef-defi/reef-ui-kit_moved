import { useState } from "react"
import Tabs from "../../atoms/Tabs"
import Manage from "./Manage"

export interface Token {
  name: string,
  symbol: string,
  image?: string,
}

export interface PoolToken extends Token {
  available: number,
  provided: number,
  ratio: number,
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
  onWithdrawInput?: CustomFunction
}

export interface Props extends Events {
  data: Data,
  tab?: "Provide" | "Withdraw" | "Trade",
  className?: string
}

const PoolActions = ({
  onTabChange,
  onProvideInput,
  onWithdrawInput,
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
          options={["Provide", "Withdraw", "Trade"]}
        />
      </div>

      {
          currentTab === "Provide" &&
          <Manage
            data={data}
            onInput={onProvideInput}
            action="provide"
          />
        }

        {
          currentTab === "Withdraw" &&
          <Manage
            data={data}
            onInput={onWithdrawInput}
            action="withdraw"
          />
        }
    </div>
  )
}

export default PoolActions