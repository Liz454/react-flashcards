import React from 'react';
import Flashcard from './Flashcard';

export default function SingleFlashcard({flashcards}) {

    const cardid = 3;


    return (
        <div className='card-grid'>
            {flashcards.map(flashcard => {
                return <Flashcard flashcard={flashcard}/>
            })}
        </div>
    )
}
