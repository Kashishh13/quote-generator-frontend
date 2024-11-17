import React, { useState } from 'react';
import './Game.css';

const Game = () => {
  const [score, setScore] = useState(0);
  const [diceValue, setDiceValue] = useState(null); 
  const [selectedNumber, setSelectedNumber] = useState(null); 

 
  const rollDice = () => {
    if (selectedNumber === null) {
      
      alert('Please select a number first!');
      return;
    }

    
    const roll = Math.floor(Math.random() * 6) + 1;
    setDiceValue(roll); 

    
    setTimeout(() => {
      if (selectedNumber === roll) {
        
        setScore(score + 1);
      } else {
       
        alert('Oops! The selected number did not match the dice roll.');
      }

     
      setDiceValue(null);
      setSelectedNumber(null);
    }, 500); 
  };

 
  const handleNumberClick = (num) => {
    if (selectedNumber === num) {
    
      setSelectedNumber(null);
    } else {
     
      setSelectedNumber(num);
    }
  };
  const getDiceClass = (num) => {
    return `dice dice-${num}`;
  };
  return (
    <div>
      <div className="bgg"></div>
      <div className='pos'>
        <div className='lr'>
       
          <div className="score">Total Score: {score}</div>
        
      
          <div className="buttons">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <button
                key={num}
                className={`button ${selectedNumber === num ? 'selected' : ''}`} 
                onClick={() => handleNumberClick(num)}
              >
                {num}
              </button>
            ))}
          </div>
        
        </div>
        <div className="dice-container">
          {/* Display the dice face */}
          <div className={diceValue !== null ? getDiceClass(diceValue) : 'dice'}>
            {diceValue !== null && Array.from({ length: diceValue }).map((_, index) => (
              <div key={index} className="dot"></div>
            ))}
          </div>

          <button className="roll-button" onClick={rollDice}>Roll Dice</button>
        </div>
      </div>
    </div>
  );
};

export default Game;
