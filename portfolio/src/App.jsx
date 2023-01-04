import "./App.css";
<link href="/dist/output.css" rel="stylesheet"></link>;

// To do list
// 1 - 0x706C777478
// 2 - Font And Color scheme
// 3 - Ip Grabber IPアドレス
// 4 - Time displayer 時間表示
// 5 - Japanese
// 6 - Pie Menu 美術 | 16 進数からテキストへ (HEX) | このサイトは私の存在の証です!

function App() {
  return (
    <div className="">
      <section className=" min-h-screen bg-len-Black flex-col flex justify-center items-center">
        <h1 className="text-len-White py-36 font-Hexa text-[10rem]">
          0x4c656e7a
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="w-20 animate-bounce text-len-White"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
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
