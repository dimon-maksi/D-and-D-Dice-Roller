import React, { useState } from "react";
import NumberSection from "./NumberSection";
import { Dice, ResultProps } from "./Types";

interface OptionsProps {
  setRolls: React.Dispatch<React.SetStateAction<ResultProps[]>>;
  setDices: React.Dispatch<React.SetStateAction<Dice[]>>;
}

const diceTypes = ["d4", "d6", "d8", "d10", "d12", "d20"];

const Options: React.FC<OptionsProps> = ({ setRolls, setDices }) => {
  const [diceCounts, setDiceCounts] = useState<Record<string, number>>(
    diceTypes.reduce((acc, dice) => ({ ...acc, [dice]: 0 }), {})
  );

  const [modifier, setModifier] = useState<number>(0);
  const handleRoll = () => {
    let formula = "";
    let result = modifier;
    const Dices: Dice[] = [];

    diceTypes.forEach((dice) => {
      const count = diceCounts[dice];
      if (count > 0) {
        formula += `${count}${dice} + `;
        for (let i = 0; i < count; i++) {
          const rollResult = Math.floor(Math.random() * parseInt(dice.substring(1))) + 1;
          result += rollResult;
          Dices.push({ type: dice, value: rollResult });
        }
      }
    });

    if (formula.endsWith(" + ")) {
      formula = formula.slice(0, -3);
    }

    if (modifier !== 0) {
      formula += modifier > 0 ? ` + ${modifier}` : ` - ${Math.abs(modifier)}`;
    }

    setRolls((prevRolls) => [...prevRolls, { formula, result }]);
    setDices(Dices);
  };

  const handleReset = () => {
    setDiceCounts(diceTypes.reduce((acc, dice) => ({ ...acc, [dice]: 0 }), {}));
    setModifier(0);
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      e.target.select();
    };

  return (
    <div className="secondary-column">
      <h1 className="text-2xl font-bold mb-4">Options</h1>
      
      <div className="font-bold mb-4 flex flex-col items-start sm:flex-row sm:items-center">
        <label className="flex items-center">
          <div className="text-xl">Additional Number:</div>
        </label>
        <input
          type="number"
          className="mt-1 mr-2 block size-16 text-3xl text-center rounded-md shadow-sm focus:outline-none sm:ml-4"
          value={modifier}
          onChange={(e) => setModifier(Number(e.target.value))}
          onFocus={handleFocus}
        />
      </div>

      {diceTypes.map((dice) => (
        <NumberSection
          key={dice}
          dice={dice}
          value={diceCounts[dice]}
          setDiceCounts={setDiceCounts}
        />
      ))}

      <div className="flex space-x-0 rounded-md overflow-hidden shadow-sm">
        <button
          onClick={handleRoll}
          className="button bg-indigo-500 text-white hover:bg-indigo-600 focus:ring-indigo-500"
        >
          Roll
        </button>
        <div className="w-px bg-gray-300"></div>
        <button
          onClick={handleReset}
          className="button bg-gray-300 text-gray-700 hover:bg-gray-400 focus:ring-gray-500"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Options;