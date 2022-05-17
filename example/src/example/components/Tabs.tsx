import { useState } from 'react';
import Uik from "@reef-defi/ui-kit"
import Title from "./Title"

function Example () {
  const [firstTab, setFirstTab] = useState("First")
  const [secondTab, setSecondTab] = useState("tokens")

  return (
    <>
      <Title text='Tabs' code={code}/>
        
      <Uik.Tabs
        value={firstTab}
        onChange={value => setFirstTab(value)}
        options={["First", "Second", "Third"]}
      />

      <Uik.Tabs
        value={secondTab}
        onChange={value => setSecondTab(value)}
        options={[
          { value: 'tokens', text: 'Tokens' },
          { value: 'pools', text: 'Pools' },
          { value: 'staking', text: 'Staking', indicator: '3' },
          { value: 'nfts', text: 'NFTs' },
          { value: 'activity', text: 'Activity' },
        ]}
      />
    </>
  )
}

const code = `const [firstTab, setFirstTab] = useState("First")
const [secondTab, setSecondTab] = useState("tokens")

<>
  <Uik.Tabs
    value={firstTab}
    onChange={value => setFirstTab(value)}
    options={["First", "Second", "Third"]}
  />

  <Uik.Tabs
    value={secondTab}
    onChange={value => setSecondTab(value)}
    options={[
      { value: 'tokens', text: 'Tokens' },
      { value: 'pools', text: 'Pools' },
      { value: 'staking', text: 'Staking', indicator: '3' },
      { value: 'nfts', text: 'NFTs' },
      { value: 'activity', text: 'Activity' },
    ]}
  />
</>`

export default Example