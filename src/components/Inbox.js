import { useState, useEffect } from 'react';
import axios from 'axios';
import InboxBox from './InboxBox';
import { AiOutlineSearch } from "react-icons/ai";

function Inbox({setThread, setThreadId}){
    const [data, setData] = useState(null);
    const tok = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiYWJoaXNoZWsuYW5kcmkwNUBnbWFpbC5jb20iLCJpZCI6MTA0LCJmaXJzdE5hbWUiOiJBYmhpc2hlayIsImxhc3ROYW1lIjoiS3VtYXIifSwiaWF0IjoxNzEyMzgwMTU0LCJleHAiOjE3NDM5MTYxNTR9.KgtKIYgkMlVw5dQDJ008d3FkdrrfXBm5u42aWGG3IyU'
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://hiring.reachinbox.xyz/api/v1/onebox/list', {
                    headers: {
                        'Authorization': `Bearer ${tok}`
                    }
                });
                setData(response.data.data);
                console.log(data)
                data.map((i)=>{console.log(i.fromName)})
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    
    return(
        <div style={{width:'20vw', height:'80vh', display:'flex', justifyContent:'center'}}>
        <div className="inbox">
            <div style={{color:'#387ADF',  fontSize:'25px'}}>All Inbox(s)</div>
            <div>{data?`${data.length<5?data.length:'5'}/${data.length} Inbox selected`:'Inbox selected'}</div>
            <form>
                <input style={{border:'solid 1px grey', background:'transparent', padding:'5px', borderRadius:'15px'}} placeholder='Search'></input>
            </form>
            <div style={{height:'1px', width:'90%', background:'grey', marginTop:'15px'}}></div>
            {data ? (
                data.map((i)=>(<div key={i.id}>{<InboxBox email={i.fromEmail} subject={i.subject} threadId={i.threadId} setThread={setThread} setThreadId={setThreadId}/> }</div>))
            ) : (
                <p>Loading...</p>
            )}
        </div>
        </div>
)
}

export default Inbox