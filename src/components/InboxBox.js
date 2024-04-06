import React from "react";
import { BsFillSendFill } from "react-icons/bs";

function InboxBox({email, subject, threadId, setThread, setThreadId}){
    const sendThread = ()=>{
        setThreadId(threadId)
        setThread(true)
    }
    return(
        <div onClick={sendThread} style={{display:'flex', flexDirection:'column', marginTop:'15px', cursor:'pointer'}}>
            <div style={{fontWeight:"bold"}}>{email}</div>
            <div style={{fontSize:'12px'}}>{`${subject.slice(0, 20)}...`}</div>
            <div style={{display:'flex', marginTop:'10px', gap:'10px'}}>
            <button style={{borderRadius:'30px',padding:'3px 7px', fontSize:'10px', color:'green', background:'#F6F5F5'}}>Interested</button>
            <button style={{borderRadius:'30px',padding:'3px 7px', fontSize:'10px', background:'#F6F5F5'}}> <BsFillSendFill/>CampaignName</button>
            </div>
            <div style={{height:'1px', width:'90%', background:'grey', marginTop:'15px'}}></div>
        </div>
)
}

export default InboxBox