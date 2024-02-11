import React, { useState } from 'react'

export const Actions = ({ playerGold, attack, buyPotion, potionCost, isShopOpened, setShopOpened}) => {
    return (
        <div className="buttons">
            <div className="player-gold">Player Gold: {playerGold}</div>
            <button onClick={attack} className="attack-button">Attack</button>
            <button onClick={buyPotion}>Buy Health Potion (Cost: {potionCost} gold)</button>
            <button onClick={() => setShopOpened(!isShopOpened)}>{isShopOpened?'Close':'Open'} Shop!</button>
        </div>
    )
}