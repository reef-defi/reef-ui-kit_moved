import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Pool from "./Pool/Pool"

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Pool />}/>
    </Routes>
  </Router>
);

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);