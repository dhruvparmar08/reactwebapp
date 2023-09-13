import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    return(
        <>
            <div className="navbar">
                <Link className="active_link" to='/'>About US</Link>
                <Link className="active_link" to='/contact'>Contact US</Link>
                <Link className="active_link" to='/param/Dhruv'>Params</Link>
                <Link className="active_link" to='/search'>Search</Link>
            </div>
        </>
    )
}

export default Menu;