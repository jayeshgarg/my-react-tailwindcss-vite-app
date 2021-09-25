import React from 'react'
import ReactDOM from 'react-dom'
import './static/css/index.css'
import App from './App'
import Log from "./util/ConsoleLogUtil";

Log.setLoggingLevel(Log.DEBUG)

ReactDOM.render(<App/>, document.getElementById('root'))
