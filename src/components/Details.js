import React from "react";

function Details(){
    return(
        <div style={{display:'flex', flexDirection:'column', gap: '20px'}}>
            <div style={{padding:'10px', fontWeight:'bold', background:'grey', borderRadius:'15px', width:'100%'}}>
                Lead Details
            </div>
                <div style={{display:'flex'}}>
                    <div>Name</div>
                    <div style={{marginLeft:'auto'}}>Orlando</div>
                </div>
                <div style={{display:'flex'}}>
                    <div>Email ID</div>
                    <div style={{marginLeft:'auto'}}>orlando@gmail.com</div>
                </div>
                <div style={{display:'flex'}}>
                    <div>Linkedin</div>
                    <div style={{marginLeft:'auto'}}>linkedin.com/in/timevadde/</div>
                </div>
                <div style={{display:'flex'}}>
                    <div>Company Name</div>
                    <div style={{marginLeft:'auto'}}>Reachinbox</div>
                </div>
        </div>
)
}

export default Details