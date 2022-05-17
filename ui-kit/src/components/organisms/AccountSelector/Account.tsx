import Identicon from "@polkadot/react-identicon";
import formatAddress from "../../../utils/formatAddress";
import CopyButton from "../CopyButton"
import Button from "../../atoms/Button"
import QRCode from "../../atoms/QRCode"

export interface Props {
  name?: string,
  address: string,
  evmAddress?: string
  isSelected?: boolean,
  onSelect?: (...args: any[]) => any,
  className?: string
}

const Account = ({
  name,
  address,
  evmAddress,
  isSelected,
  onSelect,
  className
}: Props): JSX.Element => (
  <button
    className={`
      uik-account-selector-account
      ${isSelected ? 'uik-account-selector-account--selected' : ''}
      ${className || ''}
    `}
    type="button"
    onClick={onSelect}
  >
    <Identicon
      value={address}
      className="uik-account-selector-account__identicon"
      size={86}
    />

    <div className='uik-account-selector-account__info'>
      <div className='uik-account-selector-account__name'>{ name }</div>
      
      <div className='uik-account-selector-account__address'>
        <div>Native address: { formatAddress(address) }</div>
        <CopyButton
          value={address}
          tooltip="Copy Reef account address to clipboard"
          notification="Copied Reef Account Address to clipboard."
          onClick={e => e.stopPropagation()}
        />
      </div>

      {
        !!evmAddress &&
        <div className='uik-account-selector-account__address'>
          <div>Reef EVM address: { formatAddress(evmAddress) }</div>
          <CopyButton
            value={evmAddress}
            tooltip="Copy Reef EVM address to clipboard"
            notification={{
              keepAlive: true,
              type: "danger",
              message: "Copied Reef EVM address to clipboard.\nDO NOT use this Reef EVM address on any other chain. ONLY use it on Reef chain.",
              children: <Button text="I understand"/>
            }}
            onClick={e => e.stopPropagation()}
          />
        </div>
      }

      <a
        className='uik-account-selector-account__open-btn'
        href={`https://reefscan.com/account/${address}`}
        target="_blank"
        rel="noreferrer"
        onClick={e => e.stopPropagation()}
      >Open in Explorer</a>

    </div>
    
    <button
      type="button"
      className="uik-account-selector-account__qr-code"
    >
      <QRCode value={address}/>
    </button>

    {
      isSelected &&
      <div className='uik-account-selector-account__selected-tag'>Selected</div>
    }
  </button>
)

export default Account