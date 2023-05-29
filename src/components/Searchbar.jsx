import React from 'react'
import searchImg from "../images/search.png"
import {useNavigate} from "react-router-dom"

export default function Searchbar() {
    const navigate = useNavigate()

    const keyDown = (e) => {
        if(e.keyCode === 13){
            search()
        }
    }
    const search = () => {
    
        navigate("/evaluation")
    }

    return (
        
        <div className="input-group ps-5">
            <div id="navbar-search-autocomplete" className="form-outline">
                <input type="search" id="form1" className="form-control" placeholder="Search" onKeyDown={keyDown}/>
            </div>
            <button type="button" className="btn btn-dark" onClick={search}>
                <img src={searchImg} alt="Search" width="20"/>
            </button>
        </div>
        
    )
}