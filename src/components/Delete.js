import React, { useEffect } from "react";
import axios from 'axios'

function Delete({threadId, setDel, del}){
    const tok = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiYWJoaXNoZWsuYW5kcmkwNUBnbWFpbC5jb20iLCJpZCI6MTA0LCJmaXJzdE5hbWUiOiJBYmhpc2hlayIsImxhc3ROYW1lIjoiS3VtYXIifSwiaWF0IjoxNzEyMzgwMTU0LCJleHAiOjE3NDM5MTYxNTR9.KgtKIYgkMlVw5dQDJ008d3FkdrrfXBm5u42aWGG3IyU'

    const handleCel = () => {
        setDel(!del)
    }
    const handleDel = async () => {
        try {
            const response = await axios.delete(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`, {
                headers: {
                    'Authorization': `Bearer ${tok}`
                }
            });
            console.log('DELETE request response:', response.data);
            
        } catch (error) {
            console.error('Error deleting data:', error);
        }
        setDel(!del)
    }
    
    return(
        <div className="delete">
            <h1>Are you sure ?</h1>
            <div>
                Your selected email will be deleted
            </div>
            <div>
                <button className="create" style={{background:'black', color:'white'}} onClick={handleCel}>Cancel</button>
                <button className="create" style={{background:'red', color:'white'}} onClick={handleDel}>Delete</button>
            </div>
        </div>
)
}

export default Delete