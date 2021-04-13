import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import visitorTracker from './utils/visitor-tracker';
// visitorTracker();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
