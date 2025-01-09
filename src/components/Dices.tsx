import React, { Component } from "react";

export class Dices extends Component {
  render() {
    // return (
    // <section className="bg-red-500 w-9/10 mx-auto">
    //   <h1>
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quia
    //     nihil adipisci illo cupiditate voluptatem pariatur suscipit quae dolor
    //     corrupti alias, quis reprehenderit, eum nemo sed et tempore earum
    //     tempora!
    //   </h1>
    // </section>
    // );
const diceValues = [
    { sides: 4, count: 2 },
    { sides: 6, count: 3 },
];

return (
    <section className="bg-red-500 w-9/10 mx-auto flex justify-center items-center h-full m-5">
        <div className="flex justify-around mt-4 w-full">
            {diceValues.map((dice, index) => (
                <div key={index} className="flex flex-col items-center">
                    {[...Array(dice.count)].map((_, i) => (
                        <div key={i} className="bg-white text-black p-4 m-2 rounded-full w-16 h-16 flex items-center justify-center">
                            {`d${dice.sides}`}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    </section>
);
  }
}

export default Dices;
