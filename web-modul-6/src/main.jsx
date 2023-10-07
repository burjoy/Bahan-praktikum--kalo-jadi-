// App.js or index.js
import React from 'react';
import ReactDOM from 'react-dom/client'
import AppRouter from '../routes/route'; // Import your router component

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
);
