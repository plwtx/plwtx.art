import "../App.css";
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
    <div id="Home" className="snap-start relative min-h-screen bg-len-Black">
      <div className="collapse lg:visible text-len-White absolute top-0 left-1/2 transform -translate-x-1/2 p-1 font-NJPExtraLight text-base cursor-default">
        <Randomizer />
      </div>
      s{/* Main Text */}
      <div className="flex flex-col xl:h-screen justify-center items-center text-len-White text-left p-3 py-9">
        <h1 className="text-[5rem] xl:text-[9rem] font-NJPSemiBold">冥王星</h1>
        <h1 className="text-[0.65rem] xl:text-[1rem] font-NJPLight">
          人類研究項目 | 自殺控制設施 | 哭泣的女孩
        </h1>
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
      </div>
    </div>
  );
}
