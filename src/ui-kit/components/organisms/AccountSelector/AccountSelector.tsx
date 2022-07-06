import { useRef } from "react"
import { CSSTransition } from 'react-transition-group';

import Icon from "./../../atoms/Icon"
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import AccountComponent from "./Account"

export type Account = {
  name?: string,
  address: string,
  evmAddress?: string
}

export interface Props {
  isOpen: boolean,
  accounts?: Account[],
  selectedAccount?: Account | null | undefined,
  onClose?: (...args: any[]) => any,
  onSelect?: (...args: any[]) => any,
  className?: string
}

const AccountSelector = ({
  isOpen,
  accounts,
  selectedAccount,
  onClose,
  onSelect,
  className
}: Props): JSX.Element => {
  const wrapper = useRef(null)

  const isSelected = (account: Account): boolean => {
    return !!selectedAccount?.address && account.address === selectedAccount.address
  }

  const select = (account: Account) => {
    if (onSelect) onSelect(account)
  }

  const opened = () => document.body.style.overflow = "hidden"
  const closed = () => document.body.style.overflow = ""

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