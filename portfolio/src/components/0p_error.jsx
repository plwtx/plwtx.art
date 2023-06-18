import "../App.css";
import eroru from "../img/eroruChan.PNG";
import maru from "../img/eroruMaru.PNG";

// Do not forget that function name must have capital beginning letter
export default function Error404() {
  return (
    <div id="Error" className="snap-start relative min-h-screen bg-len-Black">
      {/* Write your front code here OmO */}
      <div className="absolute top-1/2 left-0 pl-16 transform -translate-y-1/2">
        <div className="p-3">
          <img
            className="z-0 animate-spin-slow"
            loading="lazy"
            src={maru}
            alt="EroruChan"
          />
        </div>
      </div>
      <div className="absolute top-1/2 left-0 pl-16 transform -translate-y-1/2">
        <div className="p-3">
          <img className="z-30" loading="lazy" src={eroru} alt="EroruChan" />
        </div>
      </div>
      <div className="absolute top-1/2 right-0 pr-36 transform -translate-y-1/2">
        <div className="text-len-White text-left font-thin p-3">
          <h1 className="text-[2rem] xl:text-[3rem] font-MatissePro">
            404 エラー 過ち サイト
          </h1>
          <h1 className="text-[0.95rem] xl:text-[1.45rem] font-IMFellEnglishSC">
            Server: File or Directory couldn't be reached or not found
          </h1>
          <p className="w-[40rem] text-justify">
            I am sorry you cannot view this page instead you can view crying
            Pluwia. Oh how sad. <br />
            This might be because i am still working on this page. Please be
            patient as i am just one person and still busy with finding a way to
            study abroad. <br /> <br /> They are worried about you please return
            to '
            <a href="#Home" className="underline">
              home
            </a>
          </p>
        </div>
      </div>

      {/* Here it ends oh no */}
    </div>
  );
}
