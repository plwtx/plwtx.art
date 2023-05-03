import "../App.css";
import Yuuki from "../img/pReal.png";
// import Znelka from "../img/pFake.png";
import chnk from "../img/chnk.png";
import QRCode from "../img/QRC.png";

export default function About() {
  return (
    <div className="snap-start relative min-h-screen bg-len-Black">
      <div className=" absolute right-0 top-0 h-[55%] w-[15%] p-3 m-6 flex flex-col"></div>
      <div className="grid h-screen place-items-center">
        <div className="relative w-[40%] h-[35%] bg-len-White flex">
          <img className="object-fill" src={Yuuki} alt="3rd Member" />

          {/* QR Code Inside the info card */}
          <div>
            <img
              className="absolute top-0 right-0 pointer-events-none h-[14%] p-1"
              src={chnk}
              alt="Profile"
            />
          </div>
          {/* About Len */}
          <div className="flex flex-col justify-between flex-shrink-1 p-3">
            <div className="flex flex-row">
              <h1 className="text-len-Black font-NJPRegular text-3xl">
                レン・ヘラ
              </h1>
              <p className="text-sm font-IMFellEnglishSC ">/ Len Hera</p>
            </div>
            <p className="text-len-Black font-IMFellEnglishSC text-md">
              You should call me Len (althogh it is not my official name). A
              scholar who specializes in the academic study of computer science.
              I like music, flags, tanks and cute things. I do not like to talk
              about myself and anything else. I'm interested in
              web/software/game development. I'm currently trying my best to
              continue my education abroad.
            </p>
            {/* <div>
              <h3 className="text-len-Black text-xl">Experience:</h3>
              <li>React.JS</li>
              <li>TailwindCSS</li>
              <li>JavaScript</li>
              <li>HTML / CSS</li>
            </div>
            <div>
              <h3 className="text-len-Black text-xl">Linguistics:</h3>
              <li>English</li>
              <li>Turkish</li>
              <li>Russian</li>
              <li>German</li>
              <li>Japanese</li>
              <p>i like Languages =^･-･^=</p>
            </div> */}
            <div className="flex flex-col">
              <div className="flex flex-row text-md">
                <p className="pr-2 font-IMFellEnglishSC ">Mail Adress:</p>
                <p className="font-IMFellEnglishSC ">len@plwtx.art</p>
              </div>
              <div className="flex flex-row text-md">
                <p className="pr-2 font-IMFellEnglishSC ">Ip Adress:</p>
                <p className="font-IMFellEnglishSC ">112.328.219.2 ?</p>
              </div>
            </div>
          </div>
          {/* QR Code Inside the info card */}
          <div>
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
