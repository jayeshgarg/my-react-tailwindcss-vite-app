import * as Icons from "@material-ui/icons";
import React from "react";

/* Not a very elegant way of doing thing as it will load all possible icons from material ui into bundle */
const Icon = ({name}) => {
    const Icon = Icons[name]
    return (<Icon/>)
}

export default Icon;
