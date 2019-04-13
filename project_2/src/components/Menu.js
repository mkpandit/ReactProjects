import React from 'react'
import { Link } from 'react-router-dom'
import '../css/style.css'

const Menu = () => {
    return(
        <ul className="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/works">Works</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    )
}

export default Menu