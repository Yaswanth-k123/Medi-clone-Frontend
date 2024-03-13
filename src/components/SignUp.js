import React from "react";
import { useNavigate } from 'react-router-dom';
import './SignUp.css'; // Import the CSS file

function SignUp() {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate('/home');
    };

    return (
        <div className="signup-container">
            <div className="signup-form">
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />
                    <button onClick={handleClick}>submit</button> 
                </form>
            </div>
        </div>
    );
}

export default SignUp;
