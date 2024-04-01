import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Foreground from './components/Foreground.jsx'
import {Provider} from 'react-redux'
import store from './store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<<<<<<< HEAD
    <App/>
=======
    <Provider store={store}>
      <App/>
    </Provider>
>>>>>>> c7b1c2914353032764855008f02c8a21e5df27a1
  </React.StrictMode> 
)
