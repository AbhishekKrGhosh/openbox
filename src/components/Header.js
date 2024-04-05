import React, { useEffect } from "react";

function Header({light, setLight}){
const handleTheme = ()=> {
    setLight(!light)
}

    return(
        <div style={light?{background:"white", color:"black"}:{background:"black", color:"white"}} className="header">
            <div className="reachinbox">REACHINBOX</div>
            <button className="themeBtn" onClick={handleTheme} style={light?{background:"black", color:"white"}:{background:"white", color:"black"}}>{light?'Dark':'Light'}</button>
        </div>
)
}

export default Header