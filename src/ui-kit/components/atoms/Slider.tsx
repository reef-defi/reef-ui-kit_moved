import React, { useState, useRef } from "react";

export interface Helper {
  position: number,
  text?: string,
}

export interface Props {
  value?: number,
  steps?: number,
  helpers?: Helper[],
  stickyHelpers?: boolean,
  tooltip?: string,
  disabled?: boolean
  className?: string,
  onChange?: (...args: any[]) => any,
}

const Slider = ({
  value,
  steps = 1,
  helpers,
  stickyHelpers = true,
  tooltip,
  disabled,
  className,
  onChange
}: Props): JSX.Element => {
  const [dragging, setDragging] = useState(false)
  const sliderEl = useRef(null)

  const getValue = (): number => {
    if (value > 100) return 100
    if (value < 0) return 0
    return value
  }

  const handleMouseDown = (event) => {
    changePostion(event)

    const handleMouseMove = event => {
      changePostion(event)
      setDragging(true)
    }

    const handleMouseUp = event => {
      changePostion(event)
      setDragging(false)
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
  }

  const changePostion = event => {
    if (disabled || !onChange) return
    
    const container = sliderEl.current
    if (!container) return

    const containerDim = container.getBoundingClientRect()
    const width = containerDim.width

    const pxPos = event.clientX - containerDim.left
    let position = Math.round(pxPos * 100 / width)
    if (position < 0) position = 0
    if (position > 100) position = 100

    if (steps) {
      position = Math.round(position / steps) * steps
    }

    if (stickyHelpers) {
      const closestHelper = (() => {
        const helperDiffs = helpers.map((helper, index) => {
          let diff = helper.position - position
          if (diff < 0) diff *= -1

          return {
            index,
            diff
          }
        }).sort((a, b) => {
          const posA = a.diff
          const posB = b.diff

          if (posA > posB) return 1
          if (posA < posB) return -1

          return 0
        })

        const closestHelper = helperDiffs[0]

        return {
          ...helpers[closestHelper.index],
          ...closestHelper
        }
      })()
      
      const stickyThreshold = 3

      if (closestHelper.diff < stickyThreshold) {
        position = closestHelper.position
      }
    }

    onChange(position)
  }

  const setPosition = (position: number) => {
    onChange(position)
  }

  return (
    <div
      ref={sliderEl}
      className={`
        uik-slider
        ${disabled ? 'uik-slider--disabled' : ''}
        ${dragging ? 'uik-slider--dragging' : ''}
        ${className || ''}
      `}
    >
      <button
        className="uik-slider__slider"
        style={{
          "--position": `${getValue()}`
        } as React.CSSProperties }
        onClick={changePostion}
        onMouseDown={handleMouseDown}
      >
        <div className="uik-slider__line">
          <div className="uik-slider__line-indicator"/>
        </div>

        {
          !!helpers?.length &&
          <div className="uik-slider__helpers">
            {
              helpers.map(helper => (
                <button
                  key={`helper-${helper.position}`}
                  type="button"
                  className={`
                    uik-slider__helper
                    ${helper.position <= getValue() ? 'uik-slider__helper--passed' : ''}
                  `}
                  style={{
                    "--position": `${helper.position}`
                  } as React.CSSProperties }
                  onMouseDown={event => event.stopPropagation()}
                  onClick={event => {
                    event.stopPropagation()
                    setPosition(helper.position)
                  }}
                >
                  {
                    helper.position <= getValue() &&
                    <div
                      className="uik-slider__helper-color"
                      style={{
                        "--opacity": `${helper.position * 100 / getValue() / 100}`
                      } as React.CSSProperties }
                    />
                  }
                  {
                    !!helper.text &&
                    <div
                      className="uik-slider__helper-text"
                      style={{
                        "--align": (() => {
                          if (helper.position <= 5) return "flex-start"
                          if (helper.position >= 95) return "flex-end"
                          return "center"
                        })()
                      } as React.CSSProperties }
                    >{ helper.text }</div>
                  }
                </button>
              ))
            }
          </div>
        }

        <div className="uik-slider__indicator">
          {
            !!tooltip &&
            <div className="uik-slider__tooltip">{ tooltip }</div>
          }
        </div>
      </button>
    </div>
  )
}

export default Slider