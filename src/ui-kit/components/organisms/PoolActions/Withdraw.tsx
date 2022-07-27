import { useState, useMemo } from "react"
import { Data, CustomFunction } from "./PoolActions"
import Button from '../../atoms/Button'
import Slider from '../../atoms/Slider'
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'
import { formatAmount } from "../../../utils/format"

export interface Props {
  data: Data,
  onInput?: CustomFunction,
  onConfirm?: CustomFunction,
  calcValues?: CustomFunction
}

const Withdraw = ({
  data,
  onInput,
  onConfirm,
  calcValues = () => {}
}: Props): JSX.Element => {
  const [percentage, setPercentage] = useState(50)

  const handleSlide = (value: number) => {
    setPercentage(value)
    if (onInput) onInput({
      percentage: value
    })
  }

  const getValues = useMemo((): { value: number, firstToken: number, secondToken: number } => {
    const defaultValues = {
      value: 0,
      firstToken: 0,
      secondToken: 0
    }

    if (!calcValues) return defaultValues
    
    return calcValues(percentage) || defaultValues
  }, [ percentage ])

  const confirm = () => {
    if (onConfirm) onConfirm({
      percentage
    })
  }

  return (
    <>
      <div
        className={`
          uik-pool-actions__withdraw-preview
          ${!getValues.value ? 'uik-pool-actions__withdraw-preview--empty' : ''}
        `}
      >
        <div className="uik-pool-actions__withdraw-percentage">
          <span className="uik-pool-actions__withdraw-percentage-value">{ percentage }</span>
          <span className="uik-pool-actions__withdraw-percentage-sign">%</span>
        </div>

        <div className="uik-pool-actions__withdraw-value">${ getValues.value ? formatAmount(getValues.value) : "0.0" }</div>
      </div>

      <div className="uik-pool-actions__summary">
        <div
          className={`
            uik-pool-actions__summary-item
            ${!getValues.firstToken ? 'uik-pool-actions__summary-item--empty' : ''}
          `}
        >
          <div className="uik-pool-actions__summary-item-label">{ data.firstToken.symbol }</div>
          <div className="uik-pool-actions__summary-item-value">{ getValues.firstToken }</div>
        </div>
        <div
          className={`
            uik-pool-actions__summary-item
            ${!getValues.secondToken ? 'uik-pool-actions__summary-item--empty' : ''}
          `}
        >
          <div className="uik-pool-actions__summary-item-label">{ data.secondToken.symbol }</div>
          <div className="uik-pool-actions__summary-item-value">{ getValues.secondToken }</div>
        </div>
      </div>

      <div className="uik-pool-actions__slider">
        <Slider
          value={percentage}
          onChange={handleSlide}
          stickyHelpers={false}
          helpers={[
            { position: 0, text: "0%" },
            { position: 25 },
            { position: 50, text: "50%" },
            { position: 75, },
            { position: 100, text: "100%" },
          ]}
        />
      </div>

      <Button
        className="uik-pool-actions__cta"
        fill
        icon={faArrowUpFromBracket}
        text="Withdraw"
        size="large"
        disabled={!percentage}
        onClick={confirm}
      />
    </>
  )
}

export default Withdraw 