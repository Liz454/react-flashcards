import React, {useState} from 'react';
import Nav from './Nav';
import cardContent from './cardContents.json';
import ViewCardsPage from './pages/ViewCardsPage';
import './app.css'

function App() {
  const [flashcards, setFlashcards] = useState(cardContent);
  return (
    <div>
      <Nav />
      <div className="selected-page">
        <ViewCardsPage flashcards={flashcards}/>
      </div>
    </div>
    
  );
}

export default App;
