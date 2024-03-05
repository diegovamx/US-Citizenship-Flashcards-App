import React from "react";
import { useState } from 'react'
import { flashcardsList } from "./data.js";
import ReactCardFlip from 'react-card-flip'



const Cards = () => {
    const [index, setIndex] = useState(0)
    function previousClick() {
        if (index > 0) {
            setIndex(index - 1);
        }
        if (isFlipped == true) {
            flipCard();
        }
    }
    function nextClick() {
        if (index < 99) {
            setIndex(index + 1); 
        }
        if (isFlipped == true) {
            flipCard();
        }
    }
    
    const [isFlipped, setIsFlipped] = useState(false);

    function flipCard() {
        setIsFlipped(!isFlipped);

    }

    let cards = flashcardsList[index];
    return (

        <div id="flashcards-section">
                <div className="flashcard-inner" onClick={flipCard}>
                    <ReactCardFlip flipDirection="vertical" isFlipped={isFlipped}>
                        <div className="question">
                            {cards.question}
                        </div>
                        <div className="answer">
                            {cards.answer}
                        </div>
                    </ReactCardFlip>
                    
                </div>
                
                <div className='buttons'>
                    <button className='card-buttons' onClick={previousClick}>Previous</button>
                    <button className='card-buttons' onClick={nextClick}>Next</button>
                </div>
                <h3 className="card-number">{index + 1} of {flashcardsList.length}</h3>
        </div>
    )
}

export default Cards