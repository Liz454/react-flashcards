import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

export default function Nav() {
    return (
        <div className="navbar">
            <nav>
                <Link className='navButton' to="/">Home</Link>
                <Link className='navButton' to="/add">Add</Link>
                <Link className='navButton' to="/cards">All Cards</Link>
            </nav>
        </div>
    )
}
