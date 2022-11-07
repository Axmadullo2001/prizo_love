import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import './index.css';

const virtualDom = document.getElementById('root')

if (virtualDom !== null) {
  const root = ReactDOM.createRoot(virtualDom);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
