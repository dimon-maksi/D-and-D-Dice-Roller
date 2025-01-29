import React from 'react'
import { Dice } from '../components/Types';


interface DicesProps {
  dices: Dice[];
}

const Dices : React.FC<DicesProps> = ({ dices }) => {
  const diceCount = dices.length;

  const minSize = 80;  // Minimum size for a dice
  const maxSize = 300; // Maximum size for a dice

  // Calculate the size based on dice count
  const size = Math.max(minSize, Math.min(maxSize, 300 - diceCount * 5));

  return (
    <div className="flex justify-center h-full overflow-scroll bg-secondary-100">
      <div className="flex flex-wrap justify-center items-center max-w-full">
        {dices.map((dice, index) => (
          <div
            key={index}
            className="flex justify-center items-center border border-black m-1 text-center"
            style={{ width: size, height: size, maxWidth: '100%', maxHeight: '100%' }}
          >
             {dice.type} = {dice.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dices;