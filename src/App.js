import React, {useState} from 'react';
import Nav from './Nav';
import cardContent from './cardContents.json';
import ViewCardsPage from './pages/ViewCardsPage';
import './dist/app.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from 'react-router-dom'

function App() {
  const [flashcards, setFlashcards] = useState(cardContent);
  return (
    <div className="flex-container">
      
      <Router>
          <Nav />
          <Switch>
            <Route path="/add">
                <div>Add</div>
            </Route>
            <Route path="/cards">
                <ViewCardsPage flashcards={flashcards}/>
            </Route>
            <Route path="/">
                <div>home</div>
            </Route>
          </Switch>
      </Router>
      
      
    </div>
    
  );
}

export default App;
