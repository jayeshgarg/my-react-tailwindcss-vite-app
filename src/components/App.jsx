import React, {useEffect, useState} from 'react';
import Log from "./util/logging";
import TopNavigation from "./topbar";
import Sidebar from "./sidebar";

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
        <div>
            <TopNavigation darkModeClickHandler={toggleDarkMode} initialDarkModeState={isDarkMode}/>
            <div className='flex'>
                <Sidebar/>
                <div className='flex-4 bg-indigo-200'>
                    other pages
                </div>
            </div>
        </div>
    )

    /*  return (
          <BrowserRouter>
              <div className="fixed t-0 l-0 w-full h-full p-0 m-0 bg-blue-200 dark:bg-blue-800">
                  <div className="pt-20">
                      <Navbar darkModeClickHandler={toggleDarkMode} initialDarkModeState={isDarkMode}/>
                      <Switch>
                          <Route path="/" component={Home} exact/>
                          <Route path="/about" component={About} exact/>
                          <Route path="/docs" component={Docs} exact/>
                      </Switch>
                  </div>
              </div>
          </BrowserRouter>
      )*/
}

export default App
