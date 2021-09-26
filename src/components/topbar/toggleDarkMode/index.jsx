import React from 'react';
import Log from "./../../util/logging";

function Index({showLabel, onClickHandler, initialDarkModeState}) {

    Log.debug("ToggleButton", "Dark Mode", initialDarkModeState)

    return (
        <div className="flex items-center justify-center w-full" onClick={onClickHandler}>

            <label htmlFor="toggleB" className="flex items-center cursor-pointer">
                <div className="relative">
                    <input type="checkbox" id="toggleB" className="sr-only" checked={initialDarkModeState}
                           readOnly={true}/>
                    <div className="block bg-gray-500 w-8 h-5 rounded-full"></div>
                    <div className="dot absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition"></div>
                </div>
                {showLabel && <div className="ml-3 text-gray-500 font-medium">
                    Dark Mode
                </div>}
            </label>

        </div>
    )
}

export default Index;
