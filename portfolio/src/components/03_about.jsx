import "../App.css";
// import Znelka from "../img/pFake.png";
import AM from "../img/AM.jpeg";

export default function About() {
  return (
    <div className="snap-start relative min-h-screen bg-len-Black">
      <div className="flex flex-row">
        <img className="h-full left-0" src={AM} alt="AboutPagePicture" />
        <h2 className="text-len-White p-9">Len Hera</h2>
      </div>
    </div>
  );
}
