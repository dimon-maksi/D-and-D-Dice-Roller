import { useState, useEffect } from 'react';
import History from './components/History';
import Dices from './components/Dices';
import Options from './components/Options';
import { ResultProps, Dice } from './components/Types';


const getStoredItems = (): ResultProps[] => {
  return JSON.parse(localStorage.getItem('rolls') || '[]');
};

function App() {
  const [rolls, setRolls] = useState<ResultProps[]>(getStoredItems);
  const [dices, setDices] = useState<Dice[]>([]);

  useEffect(() => {
    localStorage.setItem("rolls", JSON.stringify(rolls));
  }, [rolls]);

  return (
    <div className="bg-primary p-4 h-screen flex gap-4 overflow-hidden">
      <div className="column hidden xl:flex xl:w-[15%]">
        <History rolls={rolls} />
      </div>
      <div className="column xl:w-[70%] w-2/3 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold py-4">D&D Dice Roller</h1>
        <Dices dices={dices}/>
      </div>
      <div className="column flex xl:w-[15%] w-1/3">
        <Options setRolls={setRolls} setDices={setDices}/>
      </div>
    </div>
  );
}

export default App;
