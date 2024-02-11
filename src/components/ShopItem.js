import React from 'react'

export const ShopItem = ({ weapon, buyWeapon, playerGold, ownedWeapons }) => {

    function getStyle(){
        if (ownedWeapons.includes(weapon.code)){
            return {
                color: 'black',
                opacity: 0.5
            }
        }
        if (playerGold >= weapon.price){
            return {
                color: 'green',
                opacity: 1
            }
        }
        return {
            color: 'red',
            opacity: 1
        };
    }

    return (
        <div className='weapon-item' style={getStyle()} onClick={() => buyWeapon(weapon)}>
            <div className="image-wrapper">
                <img src={weapon.img} alt="" />
            </div>
            <div className="info">
                <div className="name">Name: {String(weapon.name).toUpperCase()}</div>
                <div className="price">Price: {weapon.price}</div>
                <div className="description">Description: {weapon.description}</div>
                {ownedWeapons.includes(weapon.code)?<div>Already owned!</div>:''}
            </div>
        </div>
    )
}
