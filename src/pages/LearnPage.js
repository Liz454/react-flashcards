import React from 'react'
import FlashcardList from '../FlashcardList';
import SingleFlashcard from '../SingleFlashcard';

export default function LearnPage({flashcards}) {
    return (
        <div className="selected-page">
            <div className="page-heading"><h1>Learn</h1></div>
            <div className="page">
                <SingleFlashcard flashcards={flashcards}/>
            </div>
        </div>
        
    )
}
