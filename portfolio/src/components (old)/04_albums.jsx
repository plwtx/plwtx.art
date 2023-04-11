import "../App.css";
import plar from "../img/plar.svg";

export default function Albums() {
  return (
    <div className="snap-start relative min-h-screen bg-len-Black">
      <div className="grid h-screen place-items-center">
        {/* Album Boxes */}
        <div className="h-[55%] -space-x-16 flex">
          <img className="h-full" src={plar} alt="1st Drawing" />
          <img className="h-full" src={plar} alt="1st Drawing" />
          <img className="h-full" src={plar} alt="1st Drawing" />
        </div>
      </div>
    </div>
  );
}
