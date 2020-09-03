import React from 'react'
import FlashcardList from '../FlashcardList';
import CardInput from '../CardInput';

export default function AddCardPage({flashcards}) {
    return (
        <div className="selected-page">
            <div className="page-heading"><h1>Add cards</h1></div>
            <div className="page">
                <CardInput />
            </div>
        </div>
        
    )
}
