import React, { useState } from 'react'
import searchImg from "../images/search.png"
import {useNavigate} from "react-router-dom"
import courses from "../data/courses"

export default function Searchbar() {

    const [items, setItems] = useState(courses)
    const [searchInput, setSearchInput] = useState("")

    function handleChange(e) {
        e.preventDefault();
        setSearchInput(e.target.value)
    }
    let filteredItems = []
    if (items.length > 0) {
        filteredItems = items.filter(item => {
            return item.name.toLowerCase().includes(searchInput.toLowerCase())
        })
    }

    return (
        <div>
            <form action="/" method="get">
                <input
                    type="text"
                    id="header-search"
                    placeholder="Search Course"
                    name="course"
                    onChange={handleChange}
                    value={searchInput}
                />

                <button type="submit">Search</button>
            </form>
            <div className="dropdown">
                {filteredItems.map((course, key) => {
                    return (
                        <div key={key}>
                            <p>{course.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
        
        
    )
}