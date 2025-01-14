import React from 'react'

interface Dice {
  type: string;
  value: number;
}

const mockDices: Dice[] = [
  { type: 'd4', value: 0 },
  { type: 'd6', value: 0 },
  { type: 'd8', value: 0 },
  { type: 'd4', value: 0 },
  { type: 'd6', value: 0 },
];

const Dices = () => {
  const diceCount = mockDices.length;
  const size = Math.max(128 - diceCount, 10) + 120; // ToDo: Think about a better way to calculate the size

  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-wrap justify-center items-center max-w-full">
        {mockDices.map((dice, index) => (
          <div
            key={index}
            className="flex justify-center items-center border border-black m-1 text-center"
            style={{ width: size, height: size }}
          >
            {dice.value} : {dice.type}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dices;