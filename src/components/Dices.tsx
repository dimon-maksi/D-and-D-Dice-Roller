import React from 'react'

interface Dice {
  type: string;
  value: number;
}

const mockDices: Dice[] = [
  { type: 'd4', value: 0 },
  { type: 'd4', value: 0 },
  { type: 'd4', value: 0 },
  { type: 'd4', value: 0 },
  { type: 'd4', value: 0 },
  { type: 'd4', value: 0 },
  { type: 'd4', value: 0 },
  { type: 'd4', value: 0 },
  { type: 'd4', value: 0 },
  { type: 'd4', value: 0 },
  { type: 'd4', value: 0 },
  { type: 'd4', value: 0 },
  { type: 'd4', value: 0 },
  { type: 'd4', value: 0 },
  { type: 'd4', value: 0 },
  { type: 'd4', value: 0 },
  { type: 'd4', value: 0 },
  { type: 'd4', value: 0 },
  { type: 'd4', value: 0 },
  { type: 'd4', value: 0 },
  { type: 'd4', value: 0 },
  { type: 'd4', value: 0 },
  { type: 'd4', value: 0 },
];

const Dices = () => {
  const diceCount = mockDices.length;
  //const size = Math.max(128 - diceCount, 10) + 120; // ToDo: Think about a better way to calculate the size

  // Adjust size formula
  const minSize = 80;  // Minimum size for a dice
  const maxSize = 300; // Maximum size for a dice

  // Calculate the size based on dice count with some flexibility
  const size = Math.max(minSize, Math.min(maxSize, 300 - diceCount * 5));

  return (
    <div className="flex justify-center h-full overflow-scroll bg-secondary-100">
      <div className="flex flex-wrap justify-center items-center max-w-full">
        {mockDices.map((dice, index) => (
          <div
            key={index}
            className="flex justify-center items-center border border-black m-1 text-center"
            style={{ width: size, height: size, maxWidth: '100%', maxHeight: '100%' }}
          >
            {dice.value} : {dice.type}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dices;