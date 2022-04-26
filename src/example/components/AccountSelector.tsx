import { useState } from 'react';
import Uik from "./../../ui-kit"

const dummyAccounts = [
  {
    name: "Test Account 1",
    address: "5CSJtNRJHEazGS4xs5PvmRddTb5xGSwLkhQcs7KAyHAdshpY",
    evmAddress: "0x8Cc9EB01a8B68696768dB0b8D5C6dDF8dE467523"
  },
  {
    name: "Test Account 2",
    address: "5HW5AhtsiFhqN6K2TfZHmanh9kboyuLrCddWpNtBuu2XzVPc",
    evmAddress: "0x9f704566B7A3725f05A434959bA69e97B73c5B66"
  },
  {
    name: "Test Account 3",
    address: "5HKbc94LpExjJQNxKikDM2tyGGt8C9QH1JU96exfHXGGAZ8D",
    evmAddress: "0xAd6f307aCedB1D56fB8B8660861CA1b25592b4A2"
  }
]

function Example () {
  const [isOpen, setOpen] = useState(false)
  const [selected, setSelected] = useState(dummyAccounts[0])

  const selectAccount = account => {
    setSelected(account)
    setOpen(false)
  }

  return (
    <>
      <Uik.Divider text='Account Selector'/>
      
      <Uik.Button
        size="large"
        text="Select Account"
        fill
        onClick={() => setOpen(true)}
      />

      <Uik.AccountSelector
        isOpen={isOpen}
        accounts={dummyAccounts}
        selectedAccount={selected}
        onClose={() => setOpen(false)}
        onSelect={account => selectAccount(account)}
      />
    </>
  )
}

export default Example