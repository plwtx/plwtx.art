import "../App.css";
import { useState } from "react";

export default function Randomizer() {
  const [num, setNum] = useState(0);

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const handleClick = () => {
    setNum(randomNumberInRange(1, 9));
  };
  return (
    <div className="snap-start relative min-h-screen bg-len-Black">
      <h2 className="text-len-White">number is: {num}</h2>
      <button className="text-len-White" onClick={handleClick}>
        Generate random number
      </button>
    </div>
  );
}
