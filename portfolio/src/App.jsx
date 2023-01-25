import "./App.css";
import { useState, useEffect } from "react";
import Gallery from "./components/gallery.jsx";
import Main from "./components/main.jsx";
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
    <section className="snap-y snap-mandatory scroll-smooth h-screen overflow-scroll overflow-x-hidden">
      <div className="">
        <div className="">
          <Main />
          <div className="snap-start w-screen h-screen bg-len-Black flex-col flex justify-center items-center">
            <h4 className="text-len-White text-center py-36 font-LineR text-sm md:text-xl">
              理由は何ですか {ip}? 説明してください.
            </h4>
          </div>

          <Gallery />
          <div
            id="About"
            className="snap-start w-screen h-screen bg-len-Black flex-col flex justify-center items-center"
          >
            <div className="bg-len-Bluwska p-4 border-8 border-double border-current ">
              <div className="">
                <div class="loader3">
                  <span></span>
                </div>

                <div class="loader2">
                  <span></span>
                </div>
                <div class="loader1">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
