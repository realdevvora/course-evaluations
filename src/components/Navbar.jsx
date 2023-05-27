import React from 'react'
import ig_logo from "../images/ig-logo.png"
import twitter_logo from "../images/twitter-logo.png"
import Searchbar from './Searchbar'


export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a class="navbar-brand" href="#">Course Evaluator</a>
                <Searchbar />
                <div className="social-tags">
                    <a href="https://twitter.com/notdevvora">
                        <img src={twitter_logo} alt="twitter" width="30"/>
                    </a>
                    <a href="https://www.instagram.com/isdevvora/">
                        <img src={ig_logo} alt="" width="30"/>
                    </a>
                </div>
            </div>
                
        </nav>
    )
}