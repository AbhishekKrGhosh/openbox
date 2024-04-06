import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Central from "../components/Central";
import Inbox from "../components/Inbox";
import Mails from "../components/Mails";

function Openbox({light, data}){
    const [inbox, setInbox] = useState(false)
    const [thread, setThread] = useState(false)
    const [threadId, setThreadId] = useState('')
    return(
        <div className="openbox" style={light?{background:"white", color:"black"}:{background:"black", color:"white"}}>
            <SideBar className='sidebar' light={light} data={data} setInbox={setInbox} inbox={inbox}/>
            {inbox?<Inbox setThread={setThread} setThreadId={setThreadId}/>:<Central/>}
            {thread && inbox?<Mails threadId={threadId}/>:<></>}
        </div>
)
}

export default Openbox