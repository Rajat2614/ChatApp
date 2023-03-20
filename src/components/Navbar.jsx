import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/");
    }

    const hangleHome = () => {
        navigate("/");
    }

    return (
        <div className="navbar fixed z-10 bg-neutral text-neutral-content">
            <div className="containerWrapper flex justify-between z-2">
                <p  onClick={hangleHome} className="btn btn-ghost btn-ogo normal-case text-xl ">safe<span className="text-white">Chat</span></p>
                <button onClick={handleLogout} className=" text-exit text-xl">exit<span className="text-white">Chat</span></button>
            </div>
        </div>
    )
}

export default Navbar;