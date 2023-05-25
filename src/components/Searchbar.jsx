import React from 'react'
import {useNavigate} from "react-router-dom"

export default function Searchbar() {
    const navigate = useNavigate()
    
    const keyDown = (e) => {
        if(e.keyCode === 13){
            search()
        }
    }
    const search = () => {
        
        document.getElementById("search-bar").value = "";
        navigate("/evaluation")
    }

    return (
        <div className="search-container">
            <input id="search-bar" type="text" onKeyDown={keyDown} placeholder="Course Name"></input>
            <button type="submit" onClick={search}><i className="fa fa-search"></i></button>
        </div>
    )
}