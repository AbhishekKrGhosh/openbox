import React from "react";

function Foooter({light}){
    return(
        <div style={light?{background:"white", color:"black"}:{background:"black", color:"white"}} className="footer">
            ©{new Date().getFullYear()} Reachinbox. All rights reserved.
        </div>
)
}

export default Foooter