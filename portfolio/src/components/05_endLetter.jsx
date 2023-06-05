import "../App.css";

export default function EndLetter() {
  return (
    <div className="snap-start relative min-h-screen bg-len-Black">
      <div className="absolute bottom-0 left-0">
        {/* Album Boxes */}
        <div id="Letter" className="m-9 lg:m-0 lg:w-[38%] lg:p-9">
          <p className="text-[0.55rem] lg:text-xl font-NJPMedium text-len-White">
            誰もが思想、良心、宗教の自由を得る権利を持っています。
          </p>
          <p className="text-[0.55rem] xl:text-xl font-IMFellEnglishSC text-justify text-len-White">
            Hi, please call me Len (though that's not my official name). I am a
            scholar specializing in computer science. I like music, linguistics,
            flags, tanks and cute things. I also like drawing (sometimes). I
            grant you all rights to my drawings. Print them out, post them, do
            whatever your heart desires (Perhaps use them as your silly Twitter
            PFPs ! =^･-･^=). You don't have to credit me. I am currently trying
            my best to continue my education abroad. Please wish luck for me.
          </p>
          <br />
          <p className="text-[0.75rem] xl:text-sm lg:text-xl font-NJPBold text-len-White">
            冥王星 / plwtx / Pluwia ad Astra / 2023.06.06
          </p>
        </div>
      </div>
    </div>
  );
}
