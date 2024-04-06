import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import Central from "../components/Central";
import Inbox from "../components/Inbox";
import Mails from "../components/Mails";
import RightSide from "../components/RightSide";
import Reply from "../components/Reply";
import axios from "axios";
import Delete from "../components/Delete";

function Openbox({light, data}){
    const [inbox, setInbox] = useState(false)
    const [thread, setThread] = useState(false)
    const [threadId, setThreadId] = useState('')
    const [reply, setReply] = useState(false)
    const [del, setDel] = useState(false)
    const tok = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiYWJoaXNoZWsuYW5kcmkwNUBnbWFpbC5jb20iLCJpZCI6MTA0LCJmaXJzdE5hbWUiOiJBYmhpc2hlayIsImxhc3ROYW1lIjoiS3VtYXIifSwiaWF0IjoxNzEyMzgwMTU0LCJleHAiOjE3NDM5MTYxNTR9.KgtKIYgkMlVw5dQDJ008d3FkdrrfXBm5u42aWGG3IyU'
    useEffect(() => {
        const handleKeyPress = async (event) => {
            if (event.key === 'r' || event.key === 'R') {
                setReply(!reply);
            }
            if (event.key === 'd' ||event.key === 'D') {
                setDel(!del)
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [reply, del]);
    return(
        <div className="openbox" style={light?{background:"white", color:"black"}:{background:"black", color:"white"}}>
            <SideBar className='sidebar' light={light} data={data} setInbox={setInbox} inbox={inbox}/>
            {inbox?<Inbox setThread={setThread} setThreadId={setThreadId} del={del}/>:<Central/>}
            {thread && inbox?<div style={{display:'flex'}}>
            <Mails threadId={threadId} setReply={setReply} del={del}/>
            <RightSide/>
            </div>
            :<></>}
            {reply?<Reply setReply={setReply}/>:<></>}
            {del?<Delete threadId={threadId} setDel={setDel} del={del}/>:<></>}
        </div>
)
}

export default Openbox