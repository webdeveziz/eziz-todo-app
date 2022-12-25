import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { configureStore } from './store'
import Root from './Root'

const store = configureStore()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Root store={store} />)
