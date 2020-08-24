import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

export default function Nav() {
    return (
        <Router>
            <div className="navbar">
                <nav>
                    <ul>
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="/add">Add</Link>
                        </li>
                        <li>
                        <Link to="/cards">Cards</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/add">
                        <div>Add</div>
                    </Route>
                    <Route path="/cards">
                        <div>cards</div>
                    </Route>
                    <Route path="/">
                        <div>home</div>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
