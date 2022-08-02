import React from 'react';
import ReactDOM from 'react-dom';

import Example from "./example"

const App = () => (
  <Example />
);

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);