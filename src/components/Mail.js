import React from "react";

function Mail({subject, fromEmail, toEmail, body}){
    return(
        <div style={{padding:"10px",margin:'10px 0', display:'flex', flexDirection:'column', gap:'10px', borderBottom:'solid 1px grey'}}>
            <div style={{fontWeight:'bold'}}>{subject}</div>
            <div>{`from: ${fromEmail}`}</div>
            <div>{`to: ${toEmail}`}</div>
            <div dangerouslySetInnerHTML={{ __html: body }}></div>
        </div>
)
}

export default Mail