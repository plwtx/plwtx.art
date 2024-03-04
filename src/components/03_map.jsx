import "../App.css";
import edge from "../img/clock/edge.PNG";
import clockTransparent from "../img/clock/clockTransparent.PNG";
import hour from "../img/clock/hour.PNG";
import minute from "../img/clock/minute.PNG";
import second from "../img/clock/second.PNG";
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
    <div id="Map" className="snap-start relative min-h-dvh bg-len-Black">
      <div>
        <h1 className="absolute subpixel-antialiased tracking-wide text-xl text-len-Black">{ip}</h1>
      </div>
      {/* Clock */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <img className="min-h-[33rem] min-w-[33rem] lg:h-[45rem] p-9 z-10" src={clockTransparent} alt="Clock" />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img
          className="pointer-events-none min-h-[25rem] min-w-[25rem] lg:h-[35rem] p-9 z-50 animate-spin-second"
          src={second}
          alt="SecondHand"
        />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img
          className="pointer-events-none min-h-[25rem] min-w-[25rem] lg:h-[35rem] p-9 z-10 animate-spin-minute"
          src={minute}
          alt="MinuteHand"
        />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img
          className="pointer-events-none min-h-[25rem] min-w-[25rem] lg:h-[35rem] p-9 z-10 animate-spin-hour"
          src={hour}
          alt="HourHand"
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
        <img className="absolute rotate-90 top-0 left-0 pointer-events-none w-72" src={edge} alt="CornerTopLeft" />
        <img
          className="absolute  transform -scale-100 top-0 right-0 pointer-events-none w-72"
          src={edge}
          alt="CornerTopRight"
        />
        <img className="absolute bottom-0 left-0 pointer-events-none w-72" src={edge} alt="CornerBottomLeft" />
        <img
          className="absolute -rotate-90 bottom-0 right-0 pointer-events-none w-72"
          src={edge}
          alt="CornerBottomRight"
        />
      </div>
    </div>
  );
}
