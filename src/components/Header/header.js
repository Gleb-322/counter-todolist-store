import React from "react"
import { Link } from "react-router-dom"
import './header.scss'

const Header = () => {
    return (
        <div className="app-header">
            <Link to='/' className='app-header-link' >Home Page</Link>
        </div>
    )
}

export default Header