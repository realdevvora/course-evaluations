import React from 'react'

export default function Searchbar() {

    const keyDown = (e) => {
        if(e.keyCode === 13){
            search()
        }
    }
    const search = () => {
        document.getElementById("search-bar").value = "";
        alert("You are searching: ");
    }

    return (
        <div className="search-container">
            <input id="search-bar" type="text" onKeyDown={keyDown} placeholder="Course Name"></input>
            <button type="submit" onClick={search}><i class="fa fa-search"></i></button>
        </div>
    )
}