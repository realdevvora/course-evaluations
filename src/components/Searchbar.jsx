import React, { useState, useEffect} from 'react'
import searchImg from "../images/search.png"
import {BrowserRouter as Router, Route, redirect, useNavigate} from "react-router-dom"
import courses from "../data/courses"

export default function Searchbar() {
    const navigate = useNavigate()
    const [items, setItems] = useState(courses)
    const [filteredItems, setFilteredItems] = useState(items)
    const [showDropdown, setShowDropdown] = useState(false)
    const [searchInput, setSearchInput] = useState("")

    function handleChange(e) {
        e.preventDefault()
        setShowDropdown(true)
        setSearchInput(e.target.value)
    }

    useEffect(() => {
        if (searchInput.length > 0) {
            setFilteredItems(items.filter(item => item.name.toLowerCase().includes(searchInput.toLowerCase())))
        }
        else {
            setShowDropdown(false)
        }
    }, [searchInput])
    

    return (
            <div className="search--bar">

                <input
                    type="text"
                    placeholder="Search Course"
                    onChange={handleChange}
                    value={searchInput}
                    className="search--box"
                />

                {showDropdown && <div className="dropdown">
                    {filteredItems.map((course, key) => {
                        return (
                            <div className="search--box--course" key={key} onClick={() => navigate(`/${course.name}`)}>
                                <p>{course.name}</p>
                            </div>
                        )
                    })}
                </div>}
            </div>
        
        
    )
}