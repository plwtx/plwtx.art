import "./App.css";
import woikuto from "./img/woikuto.png";
<link href="/dist/output.css" rel="stylesheet"></link>;

// To do list
// 1 - 0x706C777478
// 2 - Font And Color scheme
// 3 - Ip Grabber IPアドレス
// 4 - Time displayer 冥王星
// 5 - Japanese
// 6 - Pie Menu 美術 | 16 進数からテキストへ (HEX) | このサイトは私の存在の証です!
// 7 - Japanese Pluto Kanji name: 冥王星

function App() {
  return (
    <div className="">
      <section className=" min-h-screen bg-len-Bluwska">
        <div className="p-20 font-LineB">
          <h1 className="text-len-White absolute top-3 text-[22vw]">冥王星</h1>
        </div>
        <div className="flex flex-col text-len-White font-Makinas divide-y divide-len-White absolute bottom-0 p-3 m-20 text-[2rem]">
          <a href="">00 - 0x706C777478</a>
          <a href="">01 - IPアドレス</a>
          <a href="">02 - 冥王星</a>
          <a href="">03 - Te美術st</a>
          <a href="">04 - このサイトは私の存在の証です</a>
        </div>

        <ul className="text-len-White p-20 text-[2.5rem] font-LineR"></ul>
        <img
          className=" absolute bottom-0 right-0 min-w-[45%] max-w-[45%]"
          src={woikuto}
        />
      </section>

      <section className=" min-h-screen bg-len-Black flex-col flex justify-center items-center">
        <h4 className="text-len-White text-center py-36 font-Hexa text-sm">
          57 65 6C 63 6F 6D 65 20 74 6F 20 74 68 65 20 30 78 37 30 36 43 37 37
          37 34 37 38 27 73 20 70 65 72 73 6F 6E 61 6C 20 70 6F 72 74 66 6F 6C
          69 6F 20 77 65 62 73 69 74 65 2E
        </h4>
      </section>
    </div>
  );
}

export default App;
