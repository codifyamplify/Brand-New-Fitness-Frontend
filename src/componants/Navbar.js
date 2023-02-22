import React from "react"
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            {/* <h1>Navbar Component</h1> */}
            <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/list'>List</Link></li>
                <li><Link to='/form'>Form</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar