import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Docs from "./pages/Docs";
import Log from "./util/ConsoleLogUtil";

function App() {

    const [isDarkMode, setDarkMode] = useState(false);

    const toggleDarkMode = (e) => {
        if (e.target.type == "checkbox") {
            Log.debug("App", "Dark Mode", e.target.checked)
            setDarkMode(e.target.checked)
        }
    }

    useEffect(() => {
        const fromLocal = JSON.parse(localStorage.getItem("isDarkMode"))
        Log.info("App", "Local storage says", fromLocal)
        setDarkMode(fromLocal)
    }, [])

    useEffect(() => {
        const html = document.querySelector('html');
        if (isDarkMode) {
            html.classList.add("dark");
            localStorage.setItem("isDarkMode", "true")
        } else {
            html.classList.remove("dark");
            localStorage.setItem("isDarkMode", "false")
        }
    }, [isDarkMode])

    return (
        <div className="fixed t-0 l-0 w-full h-full p-0 m-0 bg-blue-200 dark:bg-blue-800">
            <BrowserRouter>
                <div className="pt-20">
                    <Navbar darkModeClickHandler={toggleDarkMode} initialDarkModeState={isDarkMode}/>
                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/about" component={About} exact/>
                        <Route path="/docs" component={Docs} exact/>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
