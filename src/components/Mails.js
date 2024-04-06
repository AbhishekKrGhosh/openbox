import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MailHeader from "./MailHeader";
import Mail from "./Mail";

function Mails({threadId}){
    const [singleData, setSingleData] = useState(null);
    const tok = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiYWJoaXNoZWsuYW5kcmkwNUBnbWFpbC5jb20iLCJpZCI6MTA0LCJmaXJzdE5hbWUiOiJBYmhpc2hlayIsImxhc3ROYW1lIjoiS3VtYXIifSwiaWF0IjoxNzEyMzgwMTU0LCJleHAiOjE3NDM5MTYxNTR9.KgtKIYgkMlVw5dQDJ008d3FkdrrfXBm5u42aWGG3IyU'
    useEffect(() => {
        const fetchSingleData = async () => {
            try {
                const response = await axios.get(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`, {
                    headers: {
                        'Authorization': `Bearer ${tok}`
                    }
                });
                await setSingleData(response.data.data);
                console.log(singleData[0])
            } catch (error) {
                console.error('Error fetching single data:', error);
            }
        };fetchSingleData();
    }, []);

    return(
        <div className='mails'>
            
            <MailHeader name={singleData[0].fromName} email={singleData[0].fromEmail}/>
            {singleData ? (
                singleData.map((i)=>(<div key={i.id}>{<Mail subject={i.subject} fromEmail={i.fromEmail} toEmail={i.toEmail} body={i.body}/> }</div>))
            ) : (
                <p>Loading...</p>
            )}
        </div>
)
}

export default Mails