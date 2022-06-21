import { useState } from "react"

import Tabs from "../../atoms/Tabs"
import Icon from '../../atoms/Icon'
import Button from '../../atoms/Button'

import formatAmount from "../../../utils/formatAmount"

import { faCog, faArrowUpFromBracket, faCoins } from '@fortawesome/free-solid-svg-icons';

/**
 * Typescript declerations
 */

export interface Token {
  name: string,
  image?: string,
}

export interface Ratios {
  provide: number
}

export interface PoolToken extends Token {
  availableAmount: number,
  providedAmount: number,
  ratio: Ratios
}

export interface Fee {
  amount: number,
  token: Token
}

export interface Fees {
  provide: Fee
}

export interface Data {
  firstToken: PoolToken,
  secondToken: PoolToken,
  fees: Fees
}

export type CustomFunction = (...args: any[]) => any

export interface Events {
  onTabChange?: CustomFunction,
  onSubTabChange?: CustomFunction,
  onSettingsOpen?: CustomFunction,
  onSettingsClose?: CustomFunction,
  onProvideInput?: CustomFunction
}

export interface Props extends Events {
  data: Data,
  tab?: "Manage" | "Trade",
  subTab?: "Provide" | "Withdraw",
  className?: string
}

/**
 * Token component in Manage tab
 */

export const ManageToken = ({
  data,
  onInput
}: {
  data: PoolToken,
  onInput: CustomFunction
}): JSX.Element => (
  <div className="uik-pool-actions-manage-token">

    <div className="uik-pool-actions-manage-token__token">
      <div
        className="uik-pool-actions-manage-token__image"
        style={{
          backgroundImage: `url(${data.image})`
        }}
      />

      <div className="uik-pool-actions-manage-token__info">
        <div className="uik-pool-actions-manage-token__name">{ data.name }</div>
        <div className="uik-pool-actions-manage-token__amount">Available.: { formatAmount(data.availableAmount) }</div>
      </div>

    </div>

    <div className="uik-pool-actions-manage-token__value">
      <input
        size={1}
        placeholder="0.0"
        onInput={onInput}
      />
    </div>
  </div>
)

/**
 * Provide content
 */

 export const Provide = ({
  onProvideInput,
  data
}: {
  onProvideInput?: CustomFunction,
  data: Data
}): JSX.Element => {
  // const [firstTokenAmount, setFirstTokenAmount] = useState(0)
  // const [secondTokenAmount, setSecondTokenAmount] = useState(0)

  // const setAmount = (token: "first" | "second", value: number) => {
  //   const map = {
  //     first: {
  //       token: data.firstToken,
  //       setAmount: setFirstTokenAmount
  //     },
  //     second: {
  //       token: data.secondToken,
  //       setAmount: setSecondTokenAmount
  //     }
  //   }

  //   if (onProvideInput) {
  //     onProvideInput({
  //       token: map[token].token,
        
  //     })
  //   }

  //   map[token].setAmount(value)
  // }

  return (
    <>
      <>
        <div className="uik-pool-actions-manage__tokens">
          <ManageToken
            data={data.firstToken}
            onInput={value => setAmount('first', value)}
          />
          <ManageToken
            data={data.secondToken}
            onInput={value => setAmount('second', value)}
          />
        </div>

        <Button
          className="uik-pool-actions-manage__cta"
          fill
          icon={faCoins}
          text="Provide"
          size="large"
        />
      </>
    </>
  )
}

/**
 * Withdraw content
 */

 export const Withdraw = ({
  data
}: {
  data: Data
}): JSX.Element => {
  return (
    <>
      <>
        <Button
          className="uik-pool-actions-manage__cta"
          fill
          icon={faArrowUpFromBracket}
          text="Withdraw"
          size="large"
        />
      </>
    </>
  )
}

/**
 * Manage tab content
 */

export const Manage = ({
  onTabChange,
  onProvideInput,
  tab,
  data
}: {
  onTabChange?: CustomFunction,
  onProvideInput?: CustomFunction
  tab?: string,
  data: Data
}): JSX.Element => {
  const [ currentTab, setTab ] = useState(tab)

  const selectTab = (value: string) => {
    if (onTabChange) {
      const from = currentTab
      const to = value

      onTabChange({ from, to })
    }

    setTab(value)
  }

  return (
    <>
      <div className="uik-pool-actions-manage">
        <Tabs
          value={currentTab}
          onChange={value => selectTab(value)}
          options={["Provide", "Withdraw"]}
        />

        {
          currentTab === "Provide" &&
          <Provide
            data={data}
            onProvideInput={onProvideInput}
          />
        }

        {
          currentTab === "Withdraw" &&
          <Withdraw data={data}/>
        }
      </div>
    </>
  )
}

/**
 * Main component
 */

const PoolActions = ({
  onTabChange,
  onSubTabChange,
  onSettingsOpen,
  onSettingsClose,
  onProvideInput,
  data,
  tab = "Manage",
  subTab = "Provide",
  className
}: Props): JSX.Element => {
  const [ currentTab, setTab ] = useState(tab)
  const [ areSettingsOpen, setSettingsOpen ] = useState(false)

  const selectTab = (value: "Manage" | "Trade") => {
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
          options={["Manage", "Trade"]}
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
        currentTab === "Manage" &&
        <Manage
          data={data}
          tab={subTab}
          onTabChange={onSubTabChange}
          onProvideInput={onProvideInput}
        />
      }
    </div>
  )
}

export default PoolActions