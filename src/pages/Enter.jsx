import React from "react";
import { useNavigate } from "react-router-dom";

const Enter = () => {
    const navigate = useNavigate();

    const handleLogin = () =>{
        navigate("/chat");
     }


    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("/1618311227260.png")` }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-white">Hello there 🙋</h1>
                    <p className="mb-5 font-bold text-large">This is a Safe Space to dump your 3 AM thoughts.</p>
                    <button onClick={handleLogin} className="btn btn-active glass">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Enter;