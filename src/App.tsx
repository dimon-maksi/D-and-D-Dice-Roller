
import React from 'react';
import History from './components/History';
import Dices from './components/Dices';
import Options from './components/Options';

function App() {
  return (
    <div className="bg-gray-800 text-white p-4 h-screen flex gap-4">
      <div className="column column-side flex-shrink-0">
        <History />
      </div>
      <div className="bg-white text-gray-800 column flex-grow">
        <h1 className="text-8xl font-bold">D&D Dice Roller</h1>
        <Dices />
      </div>
      <div className="column column-side flex-shrink-0">
        <Options />
      </div>
    </div>
  );
}

export default App;
