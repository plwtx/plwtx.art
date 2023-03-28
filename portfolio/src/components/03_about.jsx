import "../App.css";
import pReal from "../img/pReal.png";

export default function About() {
  return (
    <div className="snap-start relative min-h-screen bg-len-Black">
      <div className="grid h-screen place-items-center">
        <div className="h-[35%] w-[50%] p-3 bg-len-White flex">
          <div>
            <img className="w-full h-full" src={pReal} alt="Profile" />
          </div>
          <div className="flex flex-col flex-shrink-1 px-3">
            <h1 className="text-len-Black">user_00.01.0002.0000003.9</h1>
            <p>made in 0x</p>
          </div>
        </div>
      </div>
    </div>
  );
}
