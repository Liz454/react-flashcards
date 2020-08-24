import React from 'react'
import FlashcardList from '../FlashcardList';

export default function ViewCardsPage({flashcards}) {
    return (
        <div>
            <div><h1>All cards</h1></div>
            <FlashcardList flashcards={flashcards}/>
        </div>
    )
}
