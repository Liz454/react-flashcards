import React, {useState} from 'react';
import Nav from './Nav';
import cardContent from './cardContents.json';
import ViewCardsPage from './pages/ViewCardsPage';
import './app.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {
  const [flashcards, setFlashcards] = useState(cardContent);
  return (
    <div>
      <Nav />
      
      
      <div className="selected-page">
        <Router>
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
        </Router>
        {/* <ViewCardsPage flashcards={flashcards}/> */}
      </div>
    </div>
    
  );
}

export default App;
