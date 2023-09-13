import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Param = () => {
    const { fname } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <>
            <p>My Name is <strong>{fname}</strong></p>

            <p> Location: <strong>{location.pathname}</strong></p>

            <button onClick={() => {navigate(-1)}}> Go back </button>
        </>
    )
}

export default Param;