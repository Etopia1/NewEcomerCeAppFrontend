

import React from 'react'
import ReactDOM from 'react-dom/client'
import {store} from "./components/Global/Store";
import {persistor} from "./components/Global/Store";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from './App.jsx'
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={<h1>Loading...</h1>} persistor={persistor}>
      <App />
    </PersistGate>
    </Provider>
  </React.StrictMode>,
)
