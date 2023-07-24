import React from 'react'
import Searchbar from './Searchbar'
import { useNavigate } from 'react-router-dom'


export default function Navbar() {
    const navigate = useNavigate()




    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Course Evaluator</a>
                <Searchbar />
                <div className="authentication--buttons">
                    <button onClick={() => navigate('/login')}>Login</button>
                    <button onClick={() => navigate('/register')}>Register</button>
                </div>
            </div>
        </nav>
    )
}