import Uik from "../../ui-kit"
import Title from "./Title"

const baseColors = [
  {
    variable: "bg",
    name: "Background",
    value: "#eeebf6"
  },
  {
    variable: "text",
    name: "Text",
    value: "#19233c"
  },
  {
    variable: "text-light",
    name: "Light Text",
    value: "#898e9c"
  },
  {
    variable: "primary",
    name: "Primary",
    value: "#a93185"
  },
  {
    variable: "secondary",
    name: "Secondary",
    value: "#5d3bad"
  },
  {
    variable: "gradient",
    name: "Gradient",
    value: "#a93185 - #5d3bad"
  },
  {
    variable: "border-color",
    name: "Border",
    value: "#eaedf3"
  },
  {
    variable: "border-color-light",
    name: "Light Border",
    value: "#eff2f6"
  },
  {
    variable: "border-color-dark",
    name: "Dark Border",
    value: "#d8dce6"
  },
  {
    variable: "danger",
    name: "Danger",
    value: "#e73644"
  },
  {
    variable: "success",
    name: "Success",
    value: "#35c57d"
  }
]

const additionalColors = [
  {
    variable: "gray",
    name: "Gray",
    value: "#98a4b3"
  },
  {
    variable: "pink",
    name: "Pink",
    value: "#e16ab8"
  },
  {
    variable: "purple",
    name: "Purple",
    value: "#8f7ee6"
  },
  {
    variable: "blue",
    name: "Blue",
    value: "#00aaff"
  },
  {
    variable: "cyan",
    name: "Cyan",
    value: "#30bfbf"
  },
  {
    variable: "green",
    name: "Green",
    value: "#47cc8a"
  },
  {
    variable: "lime",
    name: "Lime",
    value: "#8acc47"
  },
  {
    variable: "yellow",
    name: "Yellow",
    value: "#eec700"
  },
  {
    variable: "orange",
    name: "Orange",
    value: "#ff9f1a"
  },
  {
    variable: "red",
    name: "Red",
    value: "#d93636"
  }
]

const Color = ({ variable, name, value }) => (
  <div className='example-colors__color'>
    <Uik.Tooltip text={value} delay={0}>
      <div
          className={`
            example-colors__color-preview
            example-colors__color-preview--${variable}
          `}
        />
    </Uik.Tooltip>

    <div className='example-colors__color-info'>
      <div className='example-colors__color-name'>{ name }</div>
      <div className='example-colors__color-variable'>{ variable }</div>
    </div>
  </div>
)

function Example () {
  return (
    <>
      <Title text='Colors'/>

      <div className='example-colors'>
        <Uik.Label text="Base colors"/>
        <div className='example-colors__colors'>
          {
            baseColors.map(color => (
              <Color
                key={color.variable}
                name={color.name}
                variable={color.variable}
                value={color.value}
              />
            ))
          }
        </div>

        <Uik.Label text="Additional colors"/>
        <div className='example-colors__colors'>
          {
            additionalColors.map(color => (
              <Color
                key={color.variable}
                name={color.name}
                variable={color.variable}
                value={color.value}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Example