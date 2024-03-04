import "../App.css";
import stikr from "../img/stikr.PNG";

// Do not forget that function name must have capital beginning letter
export default function Loading() {
  return (
    <div id="Loading" className="snap-start relative min-h-dvh bg-len-Black">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img className="animate-spin w-[15rem] -z-20" src={stikr} alt="7th Drawing" />
        <p className="text-len-White bg-len-Black text-center z-50">読み込み中 / Loading</p>
      </div>
    </div>
  );
}
