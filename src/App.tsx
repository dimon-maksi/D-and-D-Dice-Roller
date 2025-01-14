
import React from 'react';
import History from './components/History';
import Dices from './components/Dices';
import Options from './components/Options';

function App() {
  return (
    <div className="bg-primary p-4 h-screen flex gap-4">
      <div className="column hidden lg:flex lg:w-[15%]">
        <History />
      </div>
      <div className="column lg:w-[60%] w-2/3 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold py-4">D&D Dice Roller</h1>
        <Dices />
      </div>
      <div className="column flex lg:w-[25%] w-1/3">
        <Options />
      </div>
    </div>
  );
}

export default App;
