import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { CounterApp } from './components/CounterApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp value={420}/>
    
  </React.StrictMode>,
)