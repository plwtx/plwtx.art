import "../App.css";
import COL from "../img/COL.PNG";
import logo from "../img/logo512.png";
import stikr from "../img/stikr.PNG";
import { useState, useEffect } from "react";

export default function Map() {
  const [ip, setIp] = useState();
  const getIp = async () => {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    setIp(data.ip);
  };

  useEffect(() => {
    getIp();
  }, []);

  return (
    <div id="Map" className="snap-start relative min-h-screen bg-len-Black">
      <div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 p-6">
          <img
            className="pointer-events-none w-10"
            src={logo}
            alt="WHATDELETED"
          />
        </div>
        <h1 className="absolute subpixel-antialiased tracking-wide text-xl text-len-Black">
          {ip}
        </h1>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img
          className="pointer-events-none min-h-[23rem] min-w-[23rem] lg:h-[35rem] p-9 -z-10 animate-spin-slow"
          src={stikr}
          alt="Chainik"
        />
      </div>
      <div className="pointer-events-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <img
          className="min-h-[18rem] min-w-[18rem] lg:h-[30rem] p-9 z-10"
          src={COL}
          alt="Chainik"
        />
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-3">
        <div className="flex flex-col text-cente font-NJPExtraLight text-center pb-6">
          <a
            href="/projects"
            className="px-6 bg-len-White m-1 hover:-translate-y-1 hover:scale-110 hover:py-6 hover:bg-len-Black hover:text-len-White duration-300 hover:border hover:border-len-White"
          >
            - プロジェクト -
          </a>
          <a
            href="/LAB"
            className="px-6 bg-len-White m-1 hover:-translate-y-1 hover:scale-110 hover:py-6 hover:bg-len-Black hover:text-len-White duration-300 hover:border hover:border-len-White"
          >
            - 人類研究項目 -
          </a>
          <a
            href="/contact"
            className="px-6 bg-len-White m-1 hover:-translate-y-1 hover:scale-110 hover:py-6 hover:bg-len-Black hover:text-len-White duration-300 hover:border hover:border-len-White"
          >
            - 連絡 -
          </a>
          <a
            href="/friends"
            className="px-6 bg-len-White m-1 hover:-translate-y-1 hover:scale-110 hover:py-6 hover:bg-len-Black hover:text-len-White duration-300 hover:border hover:border-len-White"
          >
            - 友達 -
          </a>
        </div>
      </div>
      {/* Corners */}
      <div className="">
        <img
          className="absolute top-0 left-0 invert pointer-events-none w-10"
          src={logo}
          alt="CornerTopLeft"
        />
        <img
          className="absolute top-0 right-0 invert pointer-events-none w-10"
          src={logo}
          alt="CornerTopRight"
        />
        <img
          className="absolute bottom-0 left-0 invert pointer-events-none w-10"
          src={logo}
          alt="CornerBottomLeft"
        />
        <img
          className="absolute bottom-0 right-0 invert pointer-events-none w-10"
          src={logo}
          alt="CornerBottomRight"
        />
      </div>
    </div>
  );
}
