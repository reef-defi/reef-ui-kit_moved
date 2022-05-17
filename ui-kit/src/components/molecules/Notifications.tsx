import Alert from "../atoms/Alert";

export interface Notification {
  id: number,
  type: "info" | "danger" | "success",
  message?: string,
  aliveFor?: number,
  keepAlive?: boolean,
  children?: any
}

export interface Props {
  notifications: Notification[],
  onClose?: (...args: any[]) => any
}

const Notifications = ({ notifications, onClose }: Props): JSX.Element => {
  const closeNotification = (id: number) => {
    if (onClose) {
      onClose(id)
    }
  }
  
  return (
    <div className="uik-notifications">
      {
        notifications.map((notification: Notification) => (
          <Alert
            key={notification.id}
            type={notification.type}
            text={notification.message}
            onClose={() => closeNotification(notification.id)}
            aliveFor={
              notification.keepAlive ? undefined :
              notification.aliveFor || 4
            }
            children={notification.children}
          />
        ))
      }
    </div>
  )
}


export default Notifications