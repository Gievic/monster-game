import React, { useState } from 'react';
import { Player } from './Player';
import { Enemy } from './Enemy';
import { GameOver } from './GameOver';
import { Actions } from './Actions';
import { Shop } from './Shop';

const maxPlayerDamageOnAttack = 10;
const maxMonsterDamageOnAttack = 20;

export const Game = () => {
  const originalMonstersImages = [
    
    'https://t3.ftcdn.net/jpg/00/42/19/70/360_F_42197066_aigiZf1P60VUB9YKfrttLq4GxCa1iYT9.jpg',
    'https://st.depositphotos.com/1787196/1330/i/600/depositphotos_13302306-stock-photo-furry-cute-monster.jpg',
    'https://st.depositphotos.com/1787196/1330/i/950/depositphotos_13302598-stock-photo-red-hairy-monster.jpg',
    'https://st.depositphotos.com/1787196/1330/i/950/depositphotos_13302507-stock-photo-furry-gremlin.jpg'
    
  ];

  const originalMonstersCount = originalMonstersImages.length;

  const potionCost = 50;

  const [playerHealth, setPlayerHealth] = useState(100);
  const [monsterHealth, setMonsterHealth] = useState(100);
  const [monstersDefeatedCount, setMonstersDefeatedCount] = useState(0);
  const [playerGold, setPlayerGold] = useState(0);
  const [weaponSelected, setWeaponSelected] = useState();
  const [monsterImages, setMonsterImages] = useState(originalMonstersImages);
  const [isGameOver, setGameOver] = useState(false);
  const [gameOverText, setGameOverText] = useState('');
  const [playerWeapons, setPlayerWeapons] = useState([]);
  const [isShopOpened, setShopOpened] = useState(false);

  const weaponsList = [
    {
      code: 'sword',
      name: 'Sword',
      price: 30,
      img: 'https://images.template.net/103650/celtic-sword-clipart-eudja.jpg',
      description: '25% chance to dodge attack!',
    },
    {
      code: 'bow',
      name: 'Bow',
      price: 20,
      img: 'https://www.creativefabrica.com/wp-content/uploads/2020/06/06/Archery-Bow-Arrow-Graphics-4290005-1-312x208.jpg',
      description: '30% chance to double damage to enemy',
    },
    {
      code: 'magic-wand',
      name: 'Magic wand',
      price: 15,
      img: 'https://i.pinimg.com/564x/48/16/9c/48169c554529438831c600bc91c6a0f1.jpg',
      description: '40% chance to get healed up to 7 HP',
    },
  ];

  const rnd = (interval) => Math.ceil(Math.random() * interval);
  const countProbability = (value) => rnd(100) < value;

  function attack() {
    let damageToEnemy = rnd(maxMonsterDamageOnAttack);
    let damageToPlayer = rnd(maxPlayerDamageOnAttack);

    switch (weaponSelected) {
      // eslint-disable-next-line no-lone-blocks
      case 'sword':
        {
          if (countProbability(25)) {
            damageToPlayer = 0;
            console.log('Attack dodged!');
          }
        }
        break;
      case 'bow': {
        if (countProbability(30)) {
          damageToEnemy *= 2;
          console.log('Damage doubled!');
        }
        break;
      }
      case 'magic-wand': {
        if (countProbability(40)) {
          damageToPlayer -= rnd(7);
          console.log('Player healed!');
        }
        break;
      }
      default: {
        break;
      }
    }

    setPlayerHealth((current) => {
      if (current - damageToPlayer <= 0) {
        gameOver(
          `${monstersDefeatedCount} monster(s) killed of ${originalMonstersCount}`
        );
        return 0;
      } else if (current - damageToPlayer > 100) {
        return 100;
      } else {
        return current - damageToPlayer;
      }
    });

    setMonsterHealth((current) => {
      if (current - damageToEnemy <= 0) {
        monsterDefeated();
        return;
      } else {
        return current - damageToEnemy;
      }
    });

    setPlayerGold(playerGold + rnd(5));
  }

  function monsterDefeated() {
    setMonstersDefeatedCount(monstersDefeatedCount + 1);

    if (monsterImages.length === 1) {
      gameOver('You killed all monsters!');
      setMonsterHealth(0);
    } else {
      spawnNewMonster();
    }
  }

  function spawnNewMonster() {
    setMonsterHealth(100);
    setMonsterImages(monsterImages.splice(1));
  }

  function buyPotion() {
    if (playerGold > potionCost) {
      setPlayerHealth(100);
      setPlayerGold(playerGold - potionCost);
    }
  }

  function gameOver(reason = '') {
    setGameOverText('Game Over! ' + reason);
    //gameWindow.style.display = 'none';
    setGameOver(true);
    setShopOpened(false);
  }

  function resetButton() {
    setPlayerHealth(100);
    setMonsterHealth(100);
    setMonstersDefeatedCount(0);
    setPlayerGold(0);
    setWeaponSelected(0);
    setMonsterImages(originalMonstersImages);
    setGameOver(false);
    setPlayerWeapons([]);
  }

  function buyWeapon(weapon) {
    if (playerGold > weapon.price && !playerWeapons.includes(weapon.code)) {
      console.log('Bought! ' + weapon.name + ' is yours!');
      setPlayerWeapons((current) => [...current, weapon.code]);
      setPlayerGold(playerGold - weapon.price);
    } else if (playerWeapons.includes(weapon.code)) {
      console.log('Weapon already taken!');
    } else {
      console.log('Not enough gold!');
    }
  }

  return (
    <div className="game">
      <div
        className="game-wrapper"
        style={{ display: `${isGameOver ? 'none' : 'block'}` }}
      >
        <div className="game-active">
          <Player
            playerHealth={playerHealth}
            setWeaponSelected={setWeaponSelected}
            weaponSelected={weaponSelected}
            playerWeapons={playerWeapons}
            weaponsList={weaponsList}
          />
          <Actions
            playerGold={playerGold}
            attack={attack}
            buyPotion={buyPotion}
            potionCost={potionCost}
            isShopOpened={isShopOpened}
            setShopOpened={setShopOpened}
          />
          <Enemy
            monsterImages={monsterImages}
            monsterHealth={monsterHealth}
            monstersDefeatedCount={monstersDefeatedCount}
          />
        </div>
      </div>
      <div
        className="game-over-wrapper"
        style={{ display: `${isGameOver ? 'block' : 'none'}` }}
      >
        <GameOver
          isGameOver={isGameOver}
          gameOverText={gameOverText}
          resetButton={resetButton}
        />
      </div>
      <div
        className="shop-wrapper"
        style={{ display: `${isShopOpened ? 'block' : 'none'}` }}
      >
        <div className="shop">
          <Shop
            weaponsList={weaponsList}
            buyWeapon={buyWeapon}
            playerGold={playerGold}
            ownedWeapons={playerWeapons}
          />
        </div>
      </div>
    </div>
  );
};

export default Game;
