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
        <div className="absolute bottom-0 left-0 pointer-events-none m-6 bg-len-White min-w-[320px] max-w-[470px]">
          <div className="flex flex-start p-[1px]">
            <div className="text-len-White flex items-center">
              <img className="w-20" src={logo} alt="WHATDELETED" />
            </div>
            <div className="px-3">
              <h1 className="subpixel-antialiased tracking-wide text-xl text-len-Black">
                {ip}
              </h1>
              <p className="subpixel-antialiased max-w-[450px] text-[0.55rem] text-len-Black text-justify">
                {ip} ERR_SSL_PROTOCOL_ERROR INVALID PROTOCOL FOUND.09 UNSECURE
                NETWORK.10
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <img
          className="min-h-[20rem] min-w-[20rem] lg:h-[30rem] p-9 z-10"
          src={COL}
          alt="Chainik"
        />
      </div>

      <div className="absolute top-0 p-3 text-sm  md:visible md:p-9 md:bottom-auto md:right-0 font-IMFellEnglishSC">
        <p className="xl:text-xl text-len-White">Youkoso (￣▽￣*)ゞ</p>
        <div className="bg-len-White my-1">
          <a href="#Home" className="p-1">
            009021489 | [DELETED] | network
          </a>
        </div>
        <div className="bg-len-White  my-1">
          <a href="#Home" className="p-1">
            200002273 | [DELETED] | log
          </a>
        </div>
        <div className="bg-len-White  my-1">
          <a href="#Home" className="p-1">
            000000289 | [DELETED] | friends
          </a>
        </div>
        <div className="bg-len-White  my-1">
          <a href="#Home" className="p-1">
            000001099 | [DELETED] | project
          </a>
        </div>
      </div>
    </div>
  );
}
