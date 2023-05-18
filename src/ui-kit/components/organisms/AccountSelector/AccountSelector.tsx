import { useRef ,useState} from "react"
import { CSSTransition } from 'react-transition-group';

import Icon from "./../../atoms/Icon"
import {  faGlobe, faXmark } from '@fortawesome/free-solid-svg-icons';

import AccountComponent from "./Account"
import Tabs from "../../atoms/Tabs"
import Dropdown from "../../atoms/Dropdown/Dropdown"
import DropdownItem from "../../atoms/Dropdown/DropdownItem"
import Button from "../../atoms/Button";

export type Account = {
  name?: string,
  address: string,
  evmAddress?: string,
  source?: string
}

export type Network = 'mainnet' | 'testnet'
export type Language = 'english' | 'hindi'

export interface Props {
  isOpen: boolean,
  accounts?: Account[],
  selectedAccount?: Account | null | undefined,
  selectedNetwork?: Network,
  selectedLanguage?:Language,
  onClose?: (...args: any[]) => any,
  onSelect?: (...args: any[]) => any,
  onNetworkSelect?: (network: Network) => any,
  onLanguageSelect?: (language: Language) => any,
  className?: string
}

const AccountSelector = ({
  isOpen,
  accounts,
  selectedAccount,
  selectedNetwork,
  selectedLanguage,
  onClose,
  onSelect,
  onNetworkSelect,
  onLanguageSelect,
  className
}: Props): JSX.Element => {
  const wrapper = useRef(null)

  const isSelected = (account: Account): boolean => {
    return !!selectedAccount?.address
      && account.address === selectedAccount.address
      && account.source === selectedAccount.source
  }

  const select = (account: Account) => {
    if (onSelect) onSelect(account)
  }

  const opened = () => document.body.style.overflow = "hidden"
  const closed = () => document.body.style.overflow = ""

  const [isLanguageDropdownOpen, setLanguageDropdown] = useState(false)

  return (
    <div
      className={`
        uik-account-selector
        ${className || ''}
      `}
    >
      <CSSTransition
        in={isOpen}
        className='uik-account-selector__wrapper'
        nodeRef={wrapper}
        timeout={500}
        unmountOnExit
        onEnter={opened}
        onExited={closed}
      >
        <div
          ref={wrapper}
          className='uik-account-selector__wrapper'
        >
          <div className="uik-account-selector__content">
            <div className="uik-account-selector__head">
              <div className="uik-account-selector__title">Select Account</div>

              {
                !!selectedLanguage && !!onLanguageSelect &&
<div className="uik-account-selector__language">
  
              <Button
    fill
    text='Choose Language'
    size='large'
    icon={faGlobe}
    onClick={() => setLanguageDropdown(true)}
  /> 
  <Dropdown
    isOpen={isLanguageDropdownOpen}
    onClose={() => setLanguageDropdown(false)}
  >
      <DropdownItem
        icon={faGlobe}
        text='English'
        onClick={() => {}}
      />
      <DropdownItem
        icon={faGlobe}
        text='Hindi'
        onClick={() => {}}
      />
      
  </Dropdown>
</div>
}

              {
                !!selectedNetwork && !!onNetworkSelect &&
                <Tabs
                  className="uik-account-selector__network"
                  value={selectedNetwork}
                  options={[
                    { value: "mainnet", text: "Mainnet" },
                    { value: "testnet", text: "Testnet" }
                  ]}
                  onChange={onNetworkSelect}
                />
                }
             
              <button
                className="uik-account-selector__close-btn"
                type="button"
                onClick={onClose}
              >
                <Icon
                  className="uik-account-selector__close-btn-icon"
                  icon={faXmark}
                />
              </button>
            </div>

            <div className="uik-account-selector__accounts">
              {
                !!accounts && !!accounts.length &&
                accounts.map((account, index) => (
                  <AccountComponent
                    key={index}
                    className="uik-account-selector__account"
                    name={account.name}
                    address={account.address}
                    evmAddress={account.evmAddress}
                    source={account.source}
                    onSelect={() => select(account)}
                    isSelected={isSelected(account)}
                  />
                ))
              }
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  )
}

export default AccountSelector