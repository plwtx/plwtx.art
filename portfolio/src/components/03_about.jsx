import "../App.css";
import kxn from "../img/kxainikovska.png";

export default function About() {
  return (
    <div className="snap-start relative min-h-screen bg-len-Black">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img
          className="min-h-[12rem] min-w-[12rem] lg:h-[25rem] p-9 animate-none hover:animate-spin"
          src={kxn}
          alt="Chainik"
        />
      </div>
    </div>
  );
}
