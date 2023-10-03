import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './App.css'
// import { Test } from '../components/test.jsx'
//import './index.css'
// import { Matrix } from '../components/matrix_a.jsx'
// import MatrixInput from '../components/matrix_a_prop.jsx'
import TestApp from '../components/test_app.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App />
    <Test />
    <Matrix />
    <MatrixInput /> */}
    <TestApp />
  </React.StrictMode>,
)
