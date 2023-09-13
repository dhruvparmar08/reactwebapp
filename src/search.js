import React, { useState } from "react";

const Search = () => {
    const [img, setImg] = useState('');

    const inputEvent = (event) => {
        setImg(event.target.value);
    }

    return(
        <>
            <div className="searchbar">
                <input type="text" value={img} onChange={inputEvent} placeholder="type anything" />

                <div>
                    <img src="" />
                </div>
            </div>
        </>
    )
}

export default Search;