import React from "react";
import { Link } from "react-router-dom";

function SignUp({light}){
    return(
        <div className="signup" style={light?{background:"white", color:"black"}:{background:"black", color:"white"}}>
            <div className="googleSignUp">
                <div>Create a new account</div>
                <div><button>Sign Up with Google</button></div>
                <div><button>Create an account</button></div>
                <div>Already have an Account?<Link to='/sign-in' style={light?{color:"black"}:{color:"white"}}> Sign In</Link></div>
            </div>
        </div>
)
}

export default SignUp