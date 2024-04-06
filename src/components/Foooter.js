import React from "react";

function Foooter({light}){
    return(
        <div style={light?{background:"#F5F7F8", color:"black"}:{background:"#3a3a3a", color:"white"}} className="footer">
            ©{new Date().getFullYear()} Reachinbox. All rights reserved.
        </div>
)
}

export default Foooter