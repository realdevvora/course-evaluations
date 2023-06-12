import React from 'react'
import Searchbar from './Searchbar'


export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Course Evaluator</a>
                <Searchbar />
                <div className="authentication--buttons">
                    <button>Login</button>
                    <button>Register</button>
                </div>
            </div>
        </nav>
    )
}