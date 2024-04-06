import React from "react";

function MailHeader({name, email}){
    return(
        <div style={{width:'100%',display:'flex', justifyContent:'center', textAlign:'center',padding:'10px', borderBottom:'solid 1px grey'}}>
            <div style={{display:'flex', flexDirection:'column'}}>
            <div style={{fontWeight:'bold'}}>{name}</div>
            <div style={{fontSize:'12px', marginTop:'5px'}}>{email}</div>
            </div>
            <div style={{marginLeft:'auto', marginTop:'10px', display:'flex', gap:'10px'}}>
            <button style={{border:'solid 1px grey', background:'black', color:'white', padding:'5px'}}>Meeting Completed</button>
            <button style={{border:'solid 1px grey', background:'black', color:'white', padding:'5px'}}>Move</button>
            <button style={{border:'solid 1px grey', background:'black', color:'white', padding:'5px'}}>...</button></div>
        </div>
)
}

export default MailHeader