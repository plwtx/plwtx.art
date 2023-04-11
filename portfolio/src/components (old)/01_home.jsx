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
      <Randomizer />
      {/* Main Text */}
      <div className="p-20 font-LineB flex justify-center items-center">
        <h1 className="select-none text-len-White absolute p-3 md:top-0 2xl:left-0 text-[15vw]">
          =^･-･^=
        </h1>
      </div>
      {/* Home Menu */}
      <div className=" z-40 flex flex-col justify-center items-center sm:items-start md:absolute lg:absolute md:bottom-0 lg:bottom-0 sm:p-3 mx-20 sm:m-20 text-2xl sm:text-[2rem] bg-len-White text-len-Black font-LineR  border-4 border-len-White divide-y divide-len-Black ">
        <a
          href="#Gallery"
          className="hover:bg-len-Black hover:first-letter:text-len-White hover:text-len-White p-3"
        >
          絵 / スケッチ
        </a>

        <a
          href="#3D-Gallery"
          className="hover:bg-len-Black hover:first-letter:text-len-White hover:text-len-White p-3"
        >
          3Dモデル
        </a>
        <a
          href="#About"
          className="hover:bg-len-Black hover:first-letter:text-len-White hover:text-len-White p-3"
        >
          レンの物語
        </a>
      </div>
      {/* Desktop Home Image */}
      <div className="">
        <img
          className="absolute bottom-0 right-0 pointer-events-none collapse px-6 sm:visible sm:min-w-[460px] sm:max-w-[500px] md:min-w-[540px] md:max-w-[600px]"
          src={imageData}
          alt="Desktop"
        />
        {/* Mobile Home Image */}
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
