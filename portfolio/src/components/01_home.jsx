import "../App.css";
import firstStickerWeb from "../img/stickers/sticker1.png";
import secondStickerWeb from "../img/stickers/sticker2.png";
import thirdStickerWeb from "../img/stickers/sticker3.png";
import Randomizer from "./00_randomizer.jsx";
const data = [
  {
    id: 1,
    path: "../img/stickers/sticker1.png",
    name: "Woikuto",
    image: firstStickerWeb,
  },
  {
    id: 2,
    path: "../img/stickers/sticker2.png",
    name: "Hatsune Miku",
    image: secondStickerWeb,
  },
  {
    id: 3,
    path: "../img/stickers/sticker3.png",
    name: "Pnuleka",
    image: thirdStickerWeb,
  },
];

export default function Home() {
  let imageData = undefined;
  // data.forEach((x) => {
  //   if (x.id === a) {
  //     imageData = x;
  //   }
  // });
  let localImageIndexString = localStorage.getItem("imageIndex");
  let localImageIndex = parseInt(localImageIndexString);
  if (localImageIndex) {
    let insertedIndex = localImageIndex + 1;
    if (localImageIndex >= 3) {
      insertedIndex = 1;
    }
    localStorage.setItem("imageIndex", insertedIndex);
  } else {
    localStorage.setItem("imageIndex", 1);
    localImageIndex = 1;
  }
  data.forEach((x) => {
    if (x.id === localImageIndex) {
      imageData = x.image;
    }
  });

  return (
    <div className="snap-start relative min-h-screen bg-len-Black">
      <div className="collapse lg:visible text-len-White absolute top-0 left-1/2 transform -translate-x-1/2 p-1 font-IMFellEnglishSC text-base cursor-default">
        <Randomizer />
      </div>
      {/* Main Text */}

      <div className="flex flex-col h-screen justify-center items-center text-len-White font-IMFellEnglishSC text-left p-3">
        <h1 className="text-5xl">Pluwia Ad Astra</h1>
        {/* <h1 className="text-base">0.706c777478 | Len Hera | plwtx</h1> */}
        <h1 className="text-sm font-NJPLight">
          Len Hera | plwtx | 0.706c777478 | 冥王星 | | 2023
        </h1>
      </div>

      {/* Desktop Home Image */}
      {/* <div className="">
        <img
          className="absolute bottom-0 right-0 pointer-events-none collapse px-6 sm:visible sm:min-w-[460px] sm:max-w-[500px] md:min-w-[540px] md:max-w-[600px]"
          src={imageData}
          alt="Desktop"
        />
        <div className="flex justify-center items-center">
          <img
            className="absolute bottom-0 pointer-events-none sm:collapse px-6 min-w-[320px] max-w-[350px]"
            src={imageData}
            alt="Mobile"
          />
        </div>
      </div> */}
    </div>
  );
}
