import React, { useState, useEffect } from 'react';
import Result from "./Result";
import {ResultProps} from './Types'

interface HistoryProps {
  rolls: ResultProps[];
}

const History : React.FC<HistoryProps> = ({ rolls }) => {
  return (
    <div className="secondary-column">
      <ul>
        {rolls.slice(0).reverse().map((item, index) => (
          <li className="pb-1" key={index}>
        <Result formula={item.formula} result={item.result} />
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default History;
