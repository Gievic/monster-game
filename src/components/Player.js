import React, { useState } from 'react'
import { PlayerWeapons } from './PlayerWeapons'

export const Player = ({ playerHealth, setWeaponSelected, weaponSelected, playerWeapons, weaponsList }) => {

    return (
        <div className="card player">
            <img src="https://lumiere-a.akamaihd.net/v1/images/ct_frozen_elsa_18466_22a50822.jpeg?region=0,0,600,600&width=480" alt="" />
            <div className="health-bar">
                <div className="health-remaining" style={{ width: playerHealth + '%' }}></div>
            </div>
            <div>Player Health: {playerHealth}</div>
            <PlayerWeapons setWeaponSelected={setWeaponSelected}
                weaponSelected={weaponSelected}
                playerWeapons={playerWeapons}
                weaponsList={weaponsList} />
        </div>
    )
}