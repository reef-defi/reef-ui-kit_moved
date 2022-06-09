import { useState } from "react"

import Uik from "../../ui-kit"
import Title from "./Title"

const data = [
  {
    id: 1,
    name: "Example 1",
    status: "OK",
    trend: -25,
    amount: 1000
  },
  {
    id: 2,
    name: "Example 2",
    status: "OK",
    trend: 15,
    amount: 2500
  },
  {
    id: 3,
    name: "Example 3",
    status: null,
    trend: 0,
    amount: 0
  },
  {
    id: 4,
    name: "Example 4",
    status: "Error",
    trend: -50,
    amount: 1000
  },
  {
    id: 5,
    name: "Example 5",
    status: "Error",
    trend: 75,
    amount: 0
  }
]

const statusColor = {
  ok: "green",
  error: "red"
}

function Example () {
  const [page, setPage] = useState(1)

  return (
    <>
      <Title text='Table' code={code}/>
        
      <Uik.Table
        seamless
        pagination={{
          current: page,
          count: 20,
          onChange: setPage
        }}
      >
        <Uik.THead>
          <Uik.Tr>
            <Uik.Th width="10">ID</Uik.Th>
            <Uik.Th>Name</Uik.Th>
            <Uik.Th align="center">Status</Uik.Th>
            <Uik.Th align="right">Trend</Uik.Th>
            <Uik.Th align="right">Amount</Uik.Th>
          </Uik.Tr>
        </Uik.THead>

        <Uik.TBody>
          {
            data.map(item => (
              <Uik.Tr key={item.id}>
                <Uik.Td align="center">{ item.id }</Uik.Td>
                <Uik.Td><a href="#">{ item.name }</a></Uik.Td>
                <Uik.Td align="center">
                  {
                    item.status &&
                    <Uik.Tag
                      text={item.status}
                      color={statusColor[item.status.toLowerCase()]}
                    />
                  }
                </Uik.Td>
                <Uik.Td align="right">
                  {
                    !!item.trend &&
                    <Uik.Trend
                      text={`${item.trend}%`}
                      type={item.trend >= 0 ? 'good' : 'bad'}
                      direction={item.trend >= 0 ? 'up' : 'down'}
                    />
                  }
                </Uik.Td>
                <Uik.Td align="right">{ item.amount.toFixed(2) }</Uik.Td>
              </Uik.Tr>
            ))
          }
        </Uik.TBody>
      </Uik.Table>
    </>
  )
}

const code = `const data = [
  {
    id: 1,
    name: "Example 1",
    status: "OK",
    amount: 1000
  },
  {
    id: 2,
    name: "Example 2",
    status: "OK",
    amount: 2500
  },
  {
    id: 3,
    name: "Example 3",
    status: "",
    amount: 0
  },
  {
    id: 4,
    name: "Example 4",
    status: "Error",
    amount: 1000
  },
  {
    id: 5,
    name: "Example 5",
    status: "Error",
    amount: 0
  }
]

const statusColor = {
  ok: "green",
  error: "red"
}

const [page, setPage] = useState(1)

<>
  <Uik.Table
    seamless
    pagination={{
      current: page,
      count: 20,
      onChange: setPage
    }}
  >
    <Uik.THead>
      <Uik.Tr>
        <Uik.Th width="10">ID</Uik.Th>
        <Uik.Th>Name</Uik.Th>
        <Uik.Th align="center">Status</Uik.Th>
        <Uik.Th align="right">Amount</Uik.Th>
      </Uik.Tr>
    </Uik.THead>

    <Uik.TBody>
      {
        data.map(item => (
          <Uik.Tr key={item.id}>
            <Uik.Td align="center">{ item.id }</Uik.Td>
            <Uik.Td><a href="#">{ item.name }</a></Uik.Td>
            <Uik.Td align="center">
              {
                item.status &&
                <Uik.Tag
                  text={item.status}
                  color={statusColor[item.status.toLowerCase()]}
                />
              }
            </Uik.Td>
            <Uik.Td align="right">{ item.amount.toFixed(2) }</Uik.Td>
          </Uik.Tr>
        ))
      }
    </Uik.TBody>
  </Uik.Table>
</>`

export default Example