const random = (min: any, max: any) => {
  return Math.random() * (max - min) + min;
};

export interface Props {
  amount?: number
  delay?: number,
  className?: string
}

const Bubbles = ({
  amount,
  delay,
  className
}: Props): JSX.Element => (
  <div
    className={`
      uik-bubbles
      ${className || ''}
    `}
  >
    {
      (() => {
        let output:Array<JSX.Element> = []

        for (let i = 0; i < (amount || 20); i++) {
          output.push(
            <div
              key={i}
              className="uik-bubbles__bubble"
              style={{
                animationDelay: `${i * (delay || 0.5) - 0.1}s`,
                left: `${random(0, 100)}%`,
                transform: `scale(${random(0.75, 1.25)})`,
                opacity: random(0.5, 1)
              }}
            ></div>
          )
        }

        return output
      })()
    }
  </div>
);

export default Bubbles