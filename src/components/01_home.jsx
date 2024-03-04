import "../App.css";
import cros from "../img/plCros.PNG";
import crest from "../img/plCrest.PNG";
import firstStickerWeb from "../img/stickers/sticker1.png";
import secondStickerWeb from "../img/stickers/sticker2.png";
import thirdStickerWeb from "../img/stickers/sticker3.png";
import fourthStickerWeb from "../img/stickers/sticker4.PNG";
import fifthStickerWeb from "../img/stickers/sticker5.PNG";

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
  {
    id: 4,
    path: "../img/stickers/sticker4.PNG",
    name: "Pluwia",
    image: fourthStickerWeb,
  },
  {
    id: 5,
    path: "../img/stickers/sticker5.PNG",
    name: "XiaWei",
    image: fifthStickerWeb,
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
    if (localImageIndex >= 5) {
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
    <div id="Home" className="snap-start relative min-h-dvh bg-len-Black">
      <div className="collapse lg:visible text-len-White absolute top-0 left-1/2 transform -translate-x-1/2 p-1 font-NJPExtraLight text-base cursor-default">
        <Randomizer />
      </div>
      s{/* Main Text */}
      <div className="relative p-16">
        <div className="flex flex-row">
          <img className=" mx-auto md:mx-0 max-h-[150px] max-w-fit md:mr-6" src={crest} alt="crest" />
          <div className="invisible absolute md:relative md:visible  text-len-White text-left">
            <h1 className=" text-[1rem] xl:text-[1.95rem] leading-tight pb-2 font-NJPExtraLight">pluwia ad astra</h1>
            <h1 className="text-[0.55rem] xl:text-[0.75rem] font-NJPLight">Len Hera</h1>
            <h1 className="text-[0.55rem] xl:text-[0.55rem] font-NJPLight">2024 | plwtx</h1>
          </div>
        </div>
      </div>
      {/* Menu Select */}
      <div className="z-40 flex flex-col mx-20 justify-center items-center sm:items-start md:absolute lg:absolute md:bottom-0 lg:bottom-0 sm:p-3 sm:m-20 text-2xl sm:text-[2rem] bg-len-White text-len-Black font-NJPMedium border-4 border-len-White divide-y divide-len-Black ">
        <a
          href="#Gallery"
          className="py-3 text-left hover:scale-105 hover:ml-6 hover:bg-len-Black hover:text-len-White duration-300"
        >
          - 絵 / えがく
        </a>

        <a
          href="#Map"
          className="py-3 text-left hover:scale-105 hover:ml-6 hover:bg-len-Black hover:text-len-White duration-300"
        >
          - 地図 / ナビ
        </a>
        <a
          href="#Letter"
          className="py-3 text-left hover:scale-105 hover:ml-6 hover:bg-len-Black hover:text-len-White duration-300"
        >
          - 最後の手紙
        </a>
      </div>
      {/* Desktop Home Image */}
      <div className="">
        <img
          className="absolute bottom-0 right-0  collapse px-6 sm:visible sm:min-w-[460px] sm:max-w-[500px] md:min-w-[540px] md:max-w-[600px]"
          src={imageData}
          alt="Desktop"
          // onClick={() => function}
        />
        <div className="flex justify-center items-center">
          <img
            className="absolute bottom-0  sm:collapse px-6 min-w-[320px] max-w-[350px]"
            src={imageData}
            alt="Mobile"
          />
        </div>
      </div>
    </div>
  );
}
