import React, { useState, useEffect } from 'react';
import { AiFillHome } from "react-icons/ai";
import { MdPersonSearch } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { BsFillSendFill } from "react-icons/bs";
import { TfiMenuAlt } from "react-icons/tfi";
import { BsInboxFill } from "react-icons/bs";
import { RiBarChart2Fill } from "react-icons/ri";

function SideBar({light, data, setInbox, inbox}){
    const [imageUrl, setImageUrl] = useState('');
    useEffect(() => {
        const fetchImage = async () => {
          try {
            const response = await data.picture;
            setImageUrl(response); // Assuming 'data.picture' contains the image URL
          } catch (error) {
            console.error('Error fetching image:', error);
          } }
          fetchImage();
        }, []);

        const handleInbox = () => {
          setInbox(!inbox)
        }
        
    return(
        <div style={light?{background:"#F5F7F8", color:"black"}:{background:"#3a3a3a", color:"white"}} className="sidebar">
            <div className="sideLogos" >
            <AiFillHome style={{cursor:'pointer'}}/>
            <MdPersonSearch style={{cursor:'pointer'}}/>
            <IoMail style={{cursor:'pointer'}}/>
            <BsFillSendFill style={{cursor:'pointer'}}/>
            <TfiMenuAlt style={{cursor:'pointer'}}/>
            <BsInboxFill onClick={handleInbox} style={{cursor:'pointer', color:'blue'}}/>
            <RiBarChart2Fill style={{cursor:'pointer'}}/>
            <div >
            {imageUrl && <img className="img2" src={imageUrl} alt="Profile Picture" />}
            </div>

            </div>
        </div>
)
}

export default SideBar