import React from 'react'
import ReactDOM from 'react-dom'
import './static/css/index.css'
import App from './App'
import Log from "./util/ConsoleLogUtil";

/* Set global debug level for this application*/
Log.setLoggingLevel(Log.WARN)

ReactDOM.render(<App/>, document.getElementById('root'))
