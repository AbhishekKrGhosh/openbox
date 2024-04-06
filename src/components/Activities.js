import React from "react";
import { BsFillSendFill } from "react-icons/bs";
import { ImMail4 } from "react-icons/im";
import { IoMdMailOpen } from "react-icons/io";

function Activities(){
    return(
        <div style={{display:'flex',marginTop:'30px', flexDirection:'column', gap: '20px'}}>
            <div style={{padding:'10px', fontWeight:'bold', background:'grey', borderRadius:'15px', width:'100%'}}>
                Activities
            </div>
            <div style={{fontWeight:'bold'}}>Campaign Name</div>
                <div style={{display:'flex'}}>
                    <div>3 Steps | 5 Days in Sequesnce</div>
                </div>
                
                    
                
                <div style={{display:'flex', gap:'20px'}}>
                <ImMail4  style={{fontSize:'30px'}}/>
                    <div style={{display:'flex', flexDirection:'column', gap:'5px'}}>
                    <div>Step 1: Email</div>
                    <div style={{fontSize:'10px'}}><BsFillSendFill /> Sent 3rd, Feb</div>
                    </div>
                </div>
                <div style={{display:'flex', gap:'20px'}}>
                <ImMail4  style={{fontSize:'30px'}}/>
                    <div style={{display:'flex', flexDirection:'column', gap:'5px'}}>
                    <div>Step 2: Email</div>
                    <div style={{fontSize:'10px'}}><IoMdMailOpen style={{fontSize:'15px'}} /> Opened 5th, Feb</div>
                    </div>
                </div>
                <div style={{display:'flex', gap:'20px'}}>
                <ImMail4  style={{fontSize:'30px'}}/>
                    <div style={{display:'flex', flexDirection:'column', gap:'5px'}}>
                    <div>Step 3: Email</div>
                    <div style={{fontSize:'10px'}}><IoMdMailOpen style={{fontSize:'15px'}}/> Opened 5th, Feb</div>
                    </div>
                </div>
        </div>
)
}

export default Activities