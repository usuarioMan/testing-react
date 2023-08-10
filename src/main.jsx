import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { FirstApp } from './FirstApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp title='Pote' subTitle='SubPote'/>
  </React.StrictMode>,
)