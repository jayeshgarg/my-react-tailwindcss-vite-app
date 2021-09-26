import React from 'react'
import ReactDOM from 'react-dom'
import './main.css'
import App from './components/App'
import Log from "./components/util/logging";

Log.setLoggingLevel(Log.ERROR)

ReactDOM.render(<React.StrictMode><App/></React.StrictMode>, document.getElementById('root'))
