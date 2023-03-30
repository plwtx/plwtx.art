import "../App.css";
// import Yuuki from "../img/pReal.png";
// import Znelka from "../img/pFake.png";
import chnk from "../img/chnk.png";
import QRCode from "../img/QRC.png";

export default function About() {
  return (
    <div className="snap-start relative min-h-screen bg-len-Black">
      <div className=" absolute right-0 top-0 h-[55%] w-[15%] p-3 m-6 flex flex-col"></div>
      <div className="grid h-screen place-items-center">
        <div className="relative w-[40%] h-[35%] bg-len-White flex">
          <img className="object-fill" src={chnk} alt="3rd Member" />

          {/* About Len */}
          <div className="flex flex-col justify-between flex-shrink-1 p-3">
            <h1 className="text-len-Black font-UIJP text-3xl">⩇⩇:⩇⩇ 海沙</h1>
            <p>
              照顧病人很重要，醫生會跟進，但這是一個充滿痛苦和痛苦的時期。
              就最小的細節而言，任何人都不應從事任何一種工作，除非他從中得到一些好處。
              不要在痛斥中生氣在快感中痛斥他要從痛中發一毛希望沒有滋生。
              除非他們被慾望蒙蔽了雙眼，否則他們不會出來，他們有責任放棄他們的職責，靈魂軟化，那就是辛勞
            </p>
            <p>她有一顆充滿愛的心</p>
          </div>
          <div>
            {/* QR Code Inside the info card */}
            <img
              className="absolute bottom-0 right-0 pointer-events-none h-[25%] p-1"
              src={QRCode}
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
