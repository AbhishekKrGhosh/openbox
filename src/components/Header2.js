import React from "react";
import reachinbox from '../images/reachinbox.png'
import { Link } from "react-router-dom";

function Header2({light, setLight, setName, data}){
    const handleTheme = ()=> {
        setLight(!light)
    }
    const handleClick = () => {
        setName('')
    }
    return(
        <div style={light?{background:"#F5F7F8", color:"black"}:{background:"#3a3a3a", color:"white"}} className="header2">
            <Link to='/' onClick={handleClick} style={light?{color:"black",textDecoration: 'none'}:{color:"white",textDecoration: 'none'}}><img className="logo2" src={reachinbox} alt="reachinboxLogo"/></Link>
            Onebox
            <button className="themeBtn" onClick={handleTheme} style={light?{background:"black", color:"white"}:{background:"white", color:"black"}}>{light?'Dark':'Light'}</button>
            <div style={{fontSize:'15px', margin:'10px 25px 0 0'}}>{`${data.given_name}'s Workspace`}</div>
        </div>
)
}

export default Header2