import React from "react";
import { RxCross2 } from "react-icons/rx";
import { AiFillThunderbolt } from "react-icons/ai";

function Reply({setReply}){
    const handleClose = ()=> {
        setReply(false)
    }
    return(
        <div className="reply">
            <div style={{position:'relative',borderTopLeftRadius:'20px',borderTopRightRadius:'20px', padding:'10px', background:'rgb(61, 61, 61)'}}><div style={{display:'flex'}}>
                <div>Reply</div><div style={{marginLeft:'auto'}}><RxCross2 onClick={handleClose} style={{cursor:'pointer'}}/></div></div></div>
            <form style={{position:'relative', display:'flex', flexDirection:"column", gap:'5px', margin:'10px 0 0 20px', color:'white'}}>
                <label>To: </label><input style={{width:'45vw', background:"transparent", border:'solid 1px grey', padding:'5px', borderRadius:'15px', color:'white'}}/>
                <label>From: </label><input style={{width:'45vw', background:"transparent", border:'solid 1px grey', padding:'5px', borderRadius:'15px', color:'white'}}/>
                <label>Subject: </label><input style={{width:'45vw', background:"transparent", border:'solid 1px grey', padding:'5px', borderRadius:'15px', color:'white'}}/>
                <input style={{width:'45vw', height:'25vh', background:"transparent", border:'solid 1px grey', padding:'5px', borderRadius:'15px', color:'white'}}/>
                <div style={{display:'flex'}}><button className="create">Send</button>
                <button className="create" style={{background:'black'}}><AiFillThunderbolt />Variables</button></div>
            </form>
        </div>
)
}

export default Reply