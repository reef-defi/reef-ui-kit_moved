import React from 'react';
import { createRoot } from 'react-dom/client';

import Example from "./example"

const App = () => (
  <Example />
);

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);