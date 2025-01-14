import React from "react";
import Result from "./Result";

const History = () => {

  const historyItems = [
    { formula: "2d6 + 4d12 + 10d8 + 4d12 + 10d8 + 4d12 + 10d8 + 3", result: -4 },
    { formula: "1d20", result: 15 },
    { formula: "3d8 - 1", result: 20 },
    { formula: "2d6 + 3", result: 10 },
    { formula: "1d20", result: 15 },
    { formula: "3d8 - 1", result: 20 },
    { formula: "2d6 + 3", result: 10 },
    { formula: "1d20", result: 15 },
    { formula: "3d8 - 1", result: 20 },
    { formula: "2d6 + 3", result: 10 },
    { formula: "1d20", result: 15 },
    { formula: "3d8 - 1", result: 20 },
    { formula: "2d6 + 3", result: 10 },
    { formula: "1d20", result: 15 },
    { formula: "3d8 - 1", result: 20 },
    { formula: "2d6 + 3", result: 10 },
    { formula: "1d20", result: 15 },
    { formula: "3d8 - 1", result: 20 },
    { formula: "2d6 + 3", result: 10 },
    { formula: "1d20", result: 15 },
    { formula: "3d8 - 1", result: 20 },
    { formula: "2d6 + 3", result: 10 },
    { formula: "1d20", result: 15 },
    { formula: "3d8 - 1", result: 20 },
    { formula: "2d6 + 3", result: 10 },
    { formula: "1d20", result: 15 },
    { formula: "3d8 - 1", result: 20 },
    { formula: "2d6 + 3", result: 10 },
    { formula: "1d20", result: 15 },
    { formula: "3d8 - 1", result: 20 },
    { formula: "2d6 + 3", result: 10 },
    { formula: "1d20", result: 15 },
    { formula: "3d8 - 1", result: 20 },
  ];

  return (
    <div className="bg-secondary-200 m-2 p-2 w-full rounded-lg overflow-scroll">
      <ul>
        {historyItems.map((item, index) => (
          <li className="pb-1" key={index}>
            <Result formula={item.formula} result={item.result} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
