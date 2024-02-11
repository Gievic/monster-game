import React, { useState } from 'react'
import { PlayerWeapon } from './PlayerWeapon'

export const PlayerWeapons = ({ setWeaponSelected, weaponSelected, playerWeapons, weaponsList }) => {
    return (
        <div className='weapon-wrapper'>
            <div className="weapons">
                {playerWeapons.map((currentWeapon, id) => {
                    return <PlayerWeapon
                        setWeaponSelected={setWeaponSelected}
                        weaponSelected={weaponSelected}
                        playerWeapons={playerWeapons}
                        weaponsList={weaponsList}
                        playerWeaponCode={currentWeapon}
                        key={id}
                    />
                })}
            </div>
        </div>
    )
}