import "../App.css";
import eroru from "../img/eroruChan.PNG";
import maru from "../img/eroruMaru.PNG";

// Do not forget that function name must have capital beginning letter
export default function Error404() {
  return (
    <div id="Error" className="snap-start relative min-h-screen bg-len-Black">
      {/* Write your front code here OmO */}
      <div className="">
        <div className="absolute top-0 pt-[50%] p-3 sm:top-1/2 sm:pt-0 sm:left-0 sm:pl-16 sm:transform sm:-translate-y-1/2">
          <div className="p-3">
            <img
              className="z-0 animate-spin-slow"
              loading="lazy"
              src={maru}
              alt="EroruChan"
            />
          </div>
        </div>
        <div className="absolute top-0 pt-[50%] p-3 sm:top-1/2 sm:pt-0 sm:left-0 sm:pl-16 sm:transform sm:-translate-y-1/2">
          <div className="p-3">
            <img className="z-30" loading="lazy" src={eroru} alt="EroruChan" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 p-3 sm:top-1/2 sm:right-0 sm:pr-36 sm:transform sm:-translate-y-1/2">
        <div className="text-len-White text-left font-thin p-3">
          <h1 className="text-[1.45rem] xl:text-[3rem] font-MatissePro">
            404 エラー 過ち サイト
          </h1>
          <h1 className="text-[0.75rem] xl:text-[1.45rem] font-IMFellEnglishSC">
            Server: File or Directory couldn't be reached or not found
          </h1>
          <p className=" md:w-[40rem] text-[0.70rem] text-justify">
            I am sorry you cannot view this page instead you can view crying
            Pluwia. Oh how sad. This might be because i am still working on this
            page. Please be patient as i am just one person and still busy with
            finding a way to study abroad. <br /> <br /> They are worried about
            you please return to '
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
