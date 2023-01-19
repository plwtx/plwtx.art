import "./App.css";
import woikuto from "./img/woikuto.png";
import woikuto2 from "./img/woikuto2.png";

import { useState, useEffect } from "react";
import Gallery from "./components/gallery.jsx";
import axios from "axios";
<link href="/dist/output.css" rel="stylesheet"></link>;

// To do list
// 1 - 0x706C777478
// 2 - Font And Color scheme
// 3 - Ip Grabber IPアドレス
// 4 - Time displayer 冥王星
// 5 - Japanese Translation
// 6 - Pie Menu 美術 | 16 進数からテキストへ (HEX) | このサイトは私の存在の証です!
// 7 - Japanese Pluto Kanji name: 冥王星

function App() {
  const [ip, setIp] = useState();

  const getIp = async () => {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    setIp(data.ip);
  };

  useEffect(() => {
    getIp();
    document.title = `こんにちは世界 | 0x706C777478`;
  }, []);
  return (
    <div className="">
      <section className="">
        <section className="min-h-screen bg-len-Bluwska">
          <div className="p-20 font-LineB flex justify-center items-center">
            <h1 className="select-none text-len-White absolute p-3 md:top-0 2xl:left-0 text-[22vw]">
              冥王星
            </h1>
          </div>
          <div className=" z-40 flex flex-col justify-center items-center sm:items-start md:absolute lg:absolute md:bottom-0 lg:bottom-0 sm:p-3 mx-20 sm:m-20 text-2xl sm:text-[2rem] text-len-White font-LineR bg-len-Black border-4 border-len-Black divide-y divide-len-White ">
            <a
              className="hover:bg-len-White hover:first-letter:text-len-Bluwska hover:text-len-Black p-3"
              href=""
            >
              絵 / スケッチ
            </a>

            <a
              href=""
              className="hover:bg-len-White hover:first-letter:text-len-Bluwska hover:text-len-Black p-3"
            >
              3Dモデル
            </a>
            <a
              href=""
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
          </div>
        </section>

        <section className=" min-h-screen bg-len-Black flex-col flex justify-center items-center">
          <h4 className="text-len-White text-center py-36 font-LineR text-sm md:text-xl">
            理由は何ですか {ip}? 説明してください.
          </h4>
        </section>
        <Gallery />
        <section className=" min-h-screen bg-len-Black flex-col flex justify-center items-center">
          <h4 className="text-len-White text-center py-36 font-LineR text-sm md:text-xl">
            さようなら.
          </h4>
        </section>
      </section>
    </div>
  );
}

export default App;
