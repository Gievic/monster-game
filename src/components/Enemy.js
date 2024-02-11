import React, { useState } from 'react'

export const Enemy = ({ monsterImages, monsterHealth, monstersDefeatedCount }) => {
    return (
        <div className="card monster">
            <img src={monsterImages[0]} alt="" />
            <div className="health-bar">
                <div className="health-remaining" style={{ width: monsterHealth + '%' }}></div>
            </div>
            <div>Monster Health: {monsterHealth}</div>
            <div>Monsters Killed: {monstersDefeatedCount}</div>
            <div>Monsters Remaining: {monsterImages.length - 1}</div>
        </div>
    )
}