import { useState, useMemo } from "react"
import { Data, CustomFunction } from "./PoolActions"
import Button from '../../atoms/Button'
import Slider from '../../atoms/Slider'
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'
import BigNumber from "bignumber.js"
import { formatAmount, maxDecimals } from "../../../utils/format"

export interface Props {
  data: Data,
  onInput?: CustomFunction,
  onConfirm?: CustomFunction
}

const Withdraw = ({
  data,
  onInput,
  onConfirm
}: Props): JSX.Element => {
  const [percentage, setPercentage] = useState(50)

  const handleSlide = (value: number) => {
    setPercentage(value)
    if (onInput) onInput({
      percentage: value,
      amount: calculateValue(value)
    })
  }

  const calculateValue = (pct = percentage) => {
    const providedLiquidity = data.providedLiquidity || 0
    const value = new BigNumber(providedLiquidity).dividedBy(100).times(pct).toNumber()
    return maxDecimals(value, 2)
  }

  const getValue = useMemo(() => calculateValue(), [ percentage, data.providedLiquidity ])

  const confirm = () => {
    if (onConfirm) onConfirm({
      percentage,
      amount: getValue
    })
  }

  return (
    <>
      <div
        className={`
          uik-pool-actions__withdraw-preview
          ${!getValue ? 'uik-pool-actions__withdraw-preview--empty' : ''}
        `}
      >
        <div className="uik-pool-actions__withdraw-percentage">
          <span className="uik-pool-actions__withdraw-percentage-value">{ percentage }</span>
          <span className="uik-pool-actions__withdraw-percentage-sign">%</span>
        </div>

        <div className="uik-pool-actions__withdraw-value">${ getValue ? formatAmount(getValue) : "0.0" }</div>
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