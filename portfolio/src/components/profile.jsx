import "../App.css";
import scr1 from "../img/scr1.png";
import propic from "../img/ld.png";

export default function Profile() {
  return (
    <div className="snap-start relative min-h-screen bg-len-Black">
      {/* animated circles */}
      <div className="flex justify-start items-center min-h-screen p-16">
        <div>
          <img
            className="w-96 p-9"
            src={propic}
            alt="Profile Picture of 0x70"
          />
        </div>
        <div className="collapse lg:visible z-30 w-[200px] top-0 lg:w-[500px] lg:pt-64">
          <p className="text-left text-len-White font-UIJP break-words">
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
      </div>
    </div>
  );
}
