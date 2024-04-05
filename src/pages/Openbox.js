import React from "react";

function Openbox({light, data}){
    return(
        <div className="openbox" style={light?{background:"white", color:"black"}:{background:"black", color:"white"}}>

        </div>
)
}

export default Openbox