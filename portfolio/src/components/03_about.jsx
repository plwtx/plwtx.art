import "../App.css";
import kxn from "../img/kxainikovska.png";

export default function About() {
  return (
    <div className="snap-start relative min-h-screen bg-len-Black">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img
          className="h-[23rem] animate-spin hover:animate-none"
          src={kxn}
          alt="AboutPagePicture"
        />
      </div>
    </div>
  );
}
