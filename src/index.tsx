// React
import React from 'react'
import ReactDOM from 'react-dom/client'

// Styles
import '../src/index.scss'

// Components
import App from './components/pages/App'

// Tools
import reportWebVitals from './reportWebVitals'

// VDOM
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
