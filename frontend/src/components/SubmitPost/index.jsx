import { useLocation } from "react-router-dom";
import React from 'react'
import { useState, useEffect } from 'react'


function Index() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const location = useLocation();
    useEffect(() => {
        setTitle(location.state.title);
        setDesc(location.state.desc);
    }, [])

    function postArticle() {
    }



    return (
        <div>
            {title && <h1>{title}</h1>}
            {desc && <p>{desc}</p>}
            <button onClick={() => postArticle()}>Submit</button>
        </div>
    )
}

export default Index;
