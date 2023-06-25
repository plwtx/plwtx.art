import "../App.css";
import img3 from "../img/COL.PNG";

// Do not forget that function name must have capital beginning letter
export default function Loading() {
  return (
    <div id="Loading" className="snap-start relative min-h-screen bg-len-Black">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img
          className="animate-spin-slow w-[10rem]"
          src={img3}
          alt="7th Drawing"
        />
        <p className="text-len-White text-center">読み込み中 / Loading</p>
      </div>
    </div>
  );
}
