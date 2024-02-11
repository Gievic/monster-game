import React, { useState } from 'react'

export const GameOver = ({ isGameOver, gameOverText, resetButton }) => {
    return (

        <div className="game-over">
            <div className="cheers-up">
                <img src="https://media.tenor.com/_vtQHYlilM0AAAAd/elsa-queen-elsa.gif" />
            </div>
            <div className="text-part">
                <h1 className="game-over-text">{gameOverText}</h1>
                <button onClick={resetButton} id="reset">Reset game</button>
            </div>
        </div>
    )
}