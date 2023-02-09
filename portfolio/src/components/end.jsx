import "../App.css";
import scr1 from "../img/scr1.png";

export default function End() {
  return (
    <div className="snap-start relative min-h-screen bg-len-White">
      {/* animated circles */}
      <div className=" relative flex justify-center items-center min-h-screen">
        <div className="collapse lg:visible z-30 absolute w-[200px] top-0 lg:w-[500px] pt-3 lg:pt-64">
          <p className="text-left font-UIJP break-words">
            A new anti-religion that grows more and more, the faithful believe
            that Haruhi Suzumiya created everything three years ago, giving
            false memories to living beings and false appearance of old age to
            things, Haruhism is based exclusively on faith, so which has the
            same foundations as any other religion. Currently it is 0x00 to find
            0x24 of Haruhism on social networks, there are dozens of active
            0x24. Haruhism has been the subject of some controversy. Many 0x24
            of older religions consider Haruhism little more than a new age
            0x00.
          </p>
        </div>
        <div className="flex justify-center items-center visible lg:collapse z-30 mx-auto">
          <p className="p-9 text-left text-[3rem] font-Kirieiji break-words">
            自殺の彼女
          </p>
        </div>

        <img
          className="absolute invert z-10 w-96 h-96 pointer-events-none bottom-0"
          src={scr1}
          alt=""
        />
      </div>
    </div>
  );
}
