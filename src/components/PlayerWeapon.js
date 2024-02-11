import React from 'react'

export const PlayerWeapon = ({setWeaponSelected, weaponSelected, playerWeapons, weaponsList, playerWeaponCode }) => {
    
    const getWeaponIndex = () => weaponsList.map(x => x.code).indexOf(playerWeaponCode);
    
    return (
        <div onClick={() => setWeaponSelected(playerWeaponCode)}
            className="weapon"
            style={{
                border: `${(weaponSelected === playerWeaponCode) ? 'solid' : 'none'}`,
                display: `${playerWeapons.includes(playerWeaponCode) ? 'block' : 'none'}`
            }}>
            <img src={weaponsList[getWeaponIndex()].img} alt="" />
        </div>
    )
}