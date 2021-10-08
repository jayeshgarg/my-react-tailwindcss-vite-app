import React, {useEffect, useState} from 'react';
import Log from "./util/logging";
import TopNavigation from "./topbar";
import Sidebar from "./sidebar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/home";
import Users from "./pages/users";

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
        Log.debug("App", "Local storage says", fromLocal)
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
        <BrowserRouter>
            <div>
                <TopNavigation darkModeClickHandler={toggleDarkMode} initialDarkModeState={isDarkMode}/>
                <div className='flex flex-nowrap flex-row'>
                    <div className='flex-1-5 min-w-0 shadow-around'>
                        <Sidebar/>
                    </div>
                    <div className='flex-4-5 min-w-0'>
                        <Switch>
                            <Route path="/" component={Home} exact/>
                            <Route path="/users" component={Users} exact/>
                        </Switch>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
