import "./App.css";
import woikuto from "./img/woikuto.png";
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
  }, []);
  return (
    <div className="">
      <section className="min-h-screen bg-len-Bluwska">
        <div className="p-20 font-LineB">
          <h1 className="text-len-White absolute top-3 text-[22vw]">冥王星</h1>
        </div>
        <div className="flex flex-col text-len-White font-LineR divide-y bg-len-Black border-4 border-len-Black divide-len-White absolute bottom-0 p-3 m-20 text-[2rem]">
          <a
            className="hover:bg-len-White hover:first-letter:text-len-Bluwska hover:text-len-Black"
            href=""
          >
            絵 / スケッチ
          </a>

          <a
            href=""
            className="hover:bg-len-White hover:first-letter:text-len-Bluwska hover:text-len-Black"
          >
            3Dモデル
          </a>
          <a
            href=""
            className="hover:bg-len-White hover:first-letter:text-len-Bluwska hover:text-len-Black"
          >
            レンの物語
          </a>
        </div>
        <img
          className=" absolute bottom-0 right-0 min-w-[45%] max-w-[45%]"
          src={woikuto}
        />
      </section>

      <section className=" min-h-screen bg-len-Black flex-col flex justify-center items-center">
        <h4 className="text-len-White text-center py-36 font-LineR text-xl">
          理由は何ですか {ip}? 説明してください.
        </h4>
      </section>
      <section className="min-h-screen bg-len-Bluwska">
        <Gallery />
      </section>
    </div>
  );
}

export default App;
