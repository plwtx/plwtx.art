import "../App.css";
import zeroStickerWeb from "../img/stickers/sticker0.PNG";

// import Date from "../components/0c_date.jsx";

export default function EndLetter() {
  const current = new Date();
  const date = `${current.getFullYear()}.${
    current.getMonth() + 1
  }.${current.getDate()}`;

  return (
    <div className="snap-start relative min-h-screen bg-len-Black">
      {/* ACHANGEL */}
      <div className="">
        <img
          className="absolute top-0 right-0 pointer-events-none collapse px-6 sm:visible sm:min-w-[460px] sm:max-w-[500px] md:min-w-[540px] md:max-w-[600px]"
          src={zeroStickerWeb}
          alt="Desktop"
        />
        <div className="flex justify-center items-center">
          <img
            className="absolute top-0 pointer-events-none sm:collapse px-6 min-w-[320px] max-w-[350px]"
            src={zeroStickerWeb}
            alt="Mobile"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0">
        {/* Album Boxes */}
        <div id="Letter" className="m-9 md:m-0 md:w-[38%] md:p-9 bg-len-Black">
          <p className="text-[0.55rem] md:text-xl font-NJPMedium text-len-White">
            誰もが思想、良心、宗教の自由を得る権利を持っています。
          </p>
          <p className="text-[0.55rem] md:text-[0.8rem] font-IMFellEnglishSC text-justify text-len-White">
            Hi, please call me Len (though that's not my official name). I am a
            scholar specializing in computer science. I like music, linguistics,
            flags, tanks and cute things. I also like drawing (sometimes). I
            grant you all rights to my drawings. Print them out, post them, do
            whatever your heart desires (Perhaps use them as your silly Twitter
            PFPs ! =^･-･^=). You don't have to credit me. I am currently trying
            my best to continue my education abroad. Please wish luck for me.
          </p>
          <br />
          <div className="flex flex-row">
            <p className="text-[0.75rem] xl:text-sm lg:text-xl font-NJPBold text-len-White">
              冥王星 / plwtx / Pluwia ad Astra /
            </p>
            <p className="px-1 text-[0.75rem] xl:text-sm lg:text-xl font-NJPBold text-len-White">
              {/* Empty */}
              <h1>{date}</h1>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
