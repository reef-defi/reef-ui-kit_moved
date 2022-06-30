import Demo from "./components"
import Navigation from "./Navigation"

import "./index.scss";

const Example = () => (
  <>
    <Navigation/>
    <main>
      <div className="example">
        <Demo.Colors/>
        <Demo.Font/>
        <Demo.Button/>
        <Demo.ActionButton/>
        <Demo.Text/>
        <Demo.Icon/>
        <Demo.Alert/>
        <Demo.Tooltip/>
        <Demo.Card/>
        <Demo.Dropdown/>
        <Demo.Modal/>
        <Demo.Tabs/>
        <Demo.Label/>
        <Demo.Input/>
        <Demo.Form/>
        <Demo.Toggle/>
        <Demo.Checkbox/>
        <Demo.Radio/>
        <Demo.Slider/>
        <Demo.Tag/>
        <Demo.Trend/>
        <Demo.ReefAmount/>
        <Demo.Table/>
        <Demo.Avatar/>
        <Demo.Container/>
        <Demo.Divider/>
        <Demo.Celebrate/>
        <Demo.Loading/>
        <Demo.QRCode/>
        <Demo.Code/>
        <Demo.Notifications/>
        <Demo.AccountSelector/>
        <Demo.CopyButton/>
        <Demo.PoolActions/>
        <Demo.ReefLogo/>
        <Demo.ReefSign/>
        <Demo.ReefIcon/>
        <Demo.Bubbles/>
        <Demo.FishAnimation/>
      </div>
    </main>
  </>
);

export default Example