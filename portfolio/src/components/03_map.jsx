import "../App.css";
import COL from "../img/COL.PNG";
import logo from "../img/logo512.png";
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
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <img
          className="pointer-events-none min-h-[24rem] min-w-[24rem] lg:h-[37rem] p-9 z-10 animate-spin"
          src={COL}
          alt="Chainik"
        />
      </div>
      <div className="pointer-events-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <img
          className="min-h-[20rem] min-w-[20rem] lg:h-[30rem] p-9 z-10"
          src={COL}
          alt="Chainik"
        />
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-3">
        <div className="flex flex-col text-cente font-NJPExtraLight text-center">
          <a href="#Home" className="px-6 bg-len-White m-1">
            - プロジェクト -
          </a>
          <a href="#Home" className="px-6 bg-len-White m-1">
            - ネット -
          </a>
          <a href="#Home" className="px-6 bg-len-White m-1">
            - 連絡 -
          </a>
          <a href="#Home" className="px-6 bg-len-White m-1">
            - 友達 -
          </a>
        </div>
      </div>
    </div>
  );
}
