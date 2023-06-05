import "../App.css";
import kxn from "../img/kxainikovska.png";

export default function Map() {
  return (
    <div id="Map" className="snap-start relative min-h-screen bg-len-Black">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <img
          className="min-h-[12rem] min-w-[12rem] lg:h-[25rem] p-9 animate-spin"
          src={kxn}
          alt="Chainik"
        />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <img
          className="min-h-[12rem] min-w-[12rem] lg:h-[25rem] p-9 animate-pulse"
          src={kxn}
          alt="Chainik"
        />
      </div>
      <div className="absolute bottom-0 p-3 text-sm  md:visible md:p-9 md:bottom-auto md:right-0 font-IMFellEnglishSC">
        <p className="xl:text-xl text-len-White">Youkoso (￣▽￣*)ゞ</p>
        <div className="bg-len-White my-1">
          <a href="" className="p-1">
            009021489 | [DELETED] | network
          </a>
        </div>
        <div className="bg-len-White  my-1">
          <a href="" className="p-1">
            200002273 | [DELETED] | log
          </a>
        </div>
        <div className="bg-len-White  my-1">
          <a href="" className="p-1">
            000000289 | [DELETED] | friends
          </a>
        </div>
        <div className="bg-len-White  my-1">
          <a href="" className="p-1">
            000001099 | [DELETED] | project
          </a>
        </div>
      </div>
    </div>
  );
}
