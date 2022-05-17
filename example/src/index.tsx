import React from 'react';
import { createRoot } from 'react-dom/client';

import Demo from "./example/components"
import Navigation from "./example/Navigation"

import "./example/index.scss";

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
        <Demo.ReefLogo/>
        <Demo.ReefSign/>
        <Demo.ReefIcon/>
        <Demo.Bubbles/>
        <Demo.FishAnimation/>
      </div>
    </main>
  </>
);

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <Example />
  </React.StrictMode>
);