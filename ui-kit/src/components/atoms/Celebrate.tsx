import { useState, useEffect } from "react"
import Icon from "./Icon"
import { faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";

export type Type = "confetti" | "money"

export interface Props {
  type?: Type,
  onDestroy?: (...args: any[]) => any,
  className?: string
}

const Celebrate = ({
  className,
  type,
  onDestroy
}: Props): JSX.Element => {
  const [destroy, setDestroy] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      if (onDestroy) onDestroy()
      setDestroy(true)
    }, 3.5 * 1000);

    return () => {}
  }, []);

  const Particle = ({ index }): JSX.Element => {
    if (type === "money") {
      return (
        <Icon
          className={`
            uik-celebrate__particle
            uik-celebrate__particle--${index}
          `}
          icon={faMoneyBillWave}
        />
      )
    }
    
    return (
      <div
        className={`
          uik-celebrate__particle
          uik-celebrate__particle--${index}
        `}
      />
    )
  }

  return (
    <div
      className={`
        uik-celebrate
        uik-celebrate--${type || 'confetti'}
        ${destroy ? 'uik-celebrate--destroy' : ''}
        ${className || ''}
      `}
    >
      {
        (() => {
          let output:Array<JSX.Element> = []

          for (let i = 0; i < 150; i++) {
            output.push(
              <Particle key={i} index={i}/>
            )
          }

          return output
        })()
      }
    </div>
  )
}

export default Celebrate