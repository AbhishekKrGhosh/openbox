import React, { useEffect } from "react";
import reachinbox from '../images/reachinbox.png'
import { Link } from "react-router-dom";

function Header({light, setLight}){
const handleTheme = ()=> {
    setLight(!light)
}

    return(
        <div style={light?{background:"white", color:"black"}:{background:"black", color:"white"}} className="header">
            <div className="reachinbox"><Link to='/' style={light?{color:"black",textDecoration: 'none'}:{color:"white",textDecoration: 'none'}}><img className="logo" src={reachinbox} alt="reachinboxLogo"/>REACHINBOX</Link></div>
            <button className="themeBtn" onClick={handleTheme} style={light?{background:"black", color:"white"}:{background:"white", color:"black"}}>{light?'Dark':'Light'}</button>
        </div>
)
}

export default Header