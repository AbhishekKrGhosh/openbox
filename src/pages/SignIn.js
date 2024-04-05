import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGoogleLogin } from '@react-oauth/google';
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

function SignIn({light, setData}){
    const navigate = useNavigate()
    const login = useGoogleLogin({
        onSuccess: async(response) => {
          try {
            const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo",{
                headers: {
                    Authorization: `Bearer ${response.access_token}`,
                },
            })
            console.log(res.data.name)
            setData(res.data)
            navigate('/openbox')
          } catch (error) {
            console.log(error)
          }
        },
      })
    return(
        <div className="signup" style={light?{background:"white", color:"black"}:{background:"black", color:"white"}}>
            <div className="googleSignUp" style={light?{background:"#F5F7F8"}:{background:"#121213"}}>
                <div>Sign In</div>
                <div><button className="gcreate" onClick={() => login()}><FcGoogle style={{fontSize:'15px', marginTop:'2px'}}/>  Sign Up with Google</button>
                  </div>
                <div>Create a new Account?<Link to='/' style={light?{color:"black"}:{color:"white"}}> Sign Up</Link></div>
            </div>
        </div>
)
}

export default SignIn