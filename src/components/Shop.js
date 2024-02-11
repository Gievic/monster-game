import React from 'react'
import { ShopItem } from './ShopItem';

export const Shop = ({weaponsList, buyWeapon, playerGold, ownedWeapons }) => {
  return (
    <div className='shop'>
        <h1>Welcome to Shop!</h1>
        <h2>Items to buy</h2>
        {weaponsList.map((currentWeapon, id) => <ShopItem weapon={currentWeapon} key={id} buyWeapon={buyWeapon} playerGold={playerGold} ownedWeapons={ownedWeapons}/>)}        
    </div>
  )
}
