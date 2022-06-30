import { useState } from "react"
import Tabs from "../../atoms/Tabs"
import Icon from '../../atoms/Icon'
import { faCog, faArrowUpFromBracket, faCoins } from '@fortawesome/free-solid-svg-icons';
import Manage from "./Manage"

export interface Token {
  name: string,
  image?: string,
}

export interface PoolToken extends Token {
  available: number,
  provided: number,
  ratio: number
}

export interface Fee {
  amount: number,
  token: Token
}

export interface Fees {
  provide: Fee,
  withdraw: Fee
}

export interface Data {
  firstToken: PoolToken,
  secondToken: PoolToken,
  fees: Fees
}

export type CustomFunction = (...args: any[]) => any

export interface Events {
  onTabChange?: CustomFunction,
  onSettingsOpen?: CustomFunction,
  onSettingsClose?: CustomFunction,
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
  onSettingsOpen,
  onSettingsClose,
  onProvideInput,
  onWithdrawInput,
  data,
  tab = "Provide",
  className
}: Props): JSX.Element => {
  const [ currentTab, setTab ] = useState(tab)
  const [ areSettingsOpen, setSettingsOpen ] = useState(false)

  const selectTab = (value: "Provide" | "Withdraw" | "Trade") => {
    if (onTabChange) {
      const from = currentTab
      const to = value

      onTabChange({ from, to })
    }

    setTab(value)
  }

  const toggleSettingsOpen = (value: boolean) => {
    if (value && onSettingsOpen) onSettingsOpen()
    if (!value && onSettingsClose) onSettingsClose()
    
    setSettingsOpen(value)
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

        <button
          type="button"
          className="uik-pool-actions__settings-btn"
          onClick={() => toggleSettingsOpen(true)}
        >
          <Icon icon={faCog}/>
        </button>
      </div>

      {
          currentTab === "Provide" &&
          <Manage
            data={data}
            onInput={onProvideInput}
            buttonText="Provide"
            buttonIcon={faCoins}
            maxKey="available"
          />
        }

        {
          currentTab === "Withdraw" &&
          <Manage
            data={data}
            onInput={onWithdrawInput}
            buttonText="Withdraw"
            buttonIcon={faArrowUpFromBracket}
            maxKey="provided"
          />
        }
    </div>
  )
}

export default PoolActions