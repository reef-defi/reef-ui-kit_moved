import Notifications, { Notification } from "../components/molecules/Notifications"
import Container from "../utils/Container"

export interface NewNotification {
  message: string,
  aliveFor?: number,
  keepAlive?: boolean,
  children?: any
}

let notifications:Notification[] = []

const generateId = (): number => {
  let id = Math.floor(Math.random() * 1000000)

  const isUnique = ((): boolean => {
    return !notifications.find(item => item.id === id)
  })()

  if (!isUnique) id = generateId()

  return id
}

const add = ({
  type,
  params
}: {
  type: "info" | "danger" | "success",
  params?: NewNotification | string
}) => {
  const id = generateId()
  if (typeof params === "string") {
    params = { message: params }
  }
  notifications.push({ id, type, ...params })
  render()
}

const remove = (id: number) => {
  setTimeout(() => {
    const notification = notifications.find(notification => notification.id === id)
    if (notification) {
      const index = notifications.indexOf(notification)
      notifications.splice(index, 1)
      render()
    }
  }, 0.25 * 1000)
}

const container = new Container("uik-notifications-container")

const render = () => {
  if (!notifications.length) {
    container.destroy()
    return
  }

  container.render(
    <Notifications
      notifications={notifications}
      onClose={remove}
    />
  )
}

const info = (params: NewNotification | string) => { add({ type: "info", params }) }
const success = (params: NewNotification | string) => { add({ type: "success", params }) }
const danger = (params: NewNotification | string) => { add({ type: "danger", params }) }

const notify = { info, success, danger }

export default notify