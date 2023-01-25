import "../App.css";
import woikuto2 from "../img/woikuto2.png";
import mobileMiku from "../img/mobileMiku.png";

//

export default function Main() {
  return (
    <div className="snap-start relative min-h-screen bg-len-Bluwska">
      <div className="p-20 font-LineB flex justify-center items-center">
        <h1 className="select-none text-len-White absolute p-3 md:top-0 2xl:left-0 text-[22vw]">
          冥王星
        </h1>
      </div>
      <div className=" z-40 flex flex-col justify-center items-center sm:items-start md:absolute lg:absolute md:bottom-0 lg:bottom-0 sm:p-3 mx-20 sm:m-20 text-2xl sm:text-[2rem] text-len-White font-LineR bg-len-Black border-4 border-len-Black divide-y divide-len-White ">
        <a
          href="#Gallery"
          className="hover:bg-len-White hover:first-letter:text-len-Bluwska hover:text-len-Black p-3"
        >
          絵 / スケッチ
        </a>

        <a
          href="#3D-Gallery"
          className="hover:bg-len-White hover:first-letter:text-len-Bluwska hover:text-len-Black p-3"
        >
          3Dモデル
        </a>
        <a
          href="#About"
          className="hover:bg-len-White hover:first-letter:text-len-Bluwska hover:text-len-Black p-3"
        >
          レンの物語
        </a>
      </div>
      <div className="">
        <img
          className="absolute bottom-0 right-0 pointer-events-none collapse px-6 sm:visible sm:min-w-[460px] sm:max-w-[500px] md:min-w-[540px] md:max-w-[600px]"
          src={woikuto2}
        />
        <div className="flex justify-center items-center">
          <img
            className="absolute bottom-0 pointer-events-none sm:collapse px-6 min-w-[320px] max-w-[350px]"
            src={mobileMiku}
          />
        </div>
      </div>
    </div>
  );
}
