import React from "react";
import central from '../images/central.png'


function Central(){
    return(
            <div className="sb">
            <div className="centralPic">
                <div><img className="img3" src={central} alt=""/></div>
            <div style={{fontSize:"20px", fontWeight:'bold', marginBottom:'15px'}}>It's the beginning of a legendary sales pipeline</div>
            <div>When you have inbound E-mails</div>
            <div>you'll see them here</div>
            </div>
            </div>
)
}

export default Central