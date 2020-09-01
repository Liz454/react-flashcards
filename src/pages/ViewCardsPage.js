import React from 'react'
import FlashcardList from '../FlashcardList';

export default function ViewCardsPage({flashcards}) {
    return (
        <div className="selected-page">
            <div className="page-heading"><h1>All cards</h1></div>
            <div className="page">
                <FlashcardList flashcards={flashcards}/>
            </div>
        </div>
        
    )
}
