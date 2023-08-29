import "../App.css";
import img1 from "../img/gallery/1.png";
import img3 from "../img/gallery/3.png";
import img5 from "../img/gallery/5.png";
import img6 from "../img/gallery/6.png";
import img7 from "../img/gallery/7.png";
import img8 from "../img/gallery/8.png";
import img12 from "../img/gallery/12.JPG";
import img13 from "../img/gallery/13.JPG";
import img15 from "../img/gallery/15.jpg";
import QRC from "../img/QRC.png";

export default function Gallery() {
  return (
    <div className="snap-start min-h-screen relative bg-len-Black">
      <div className="md:grid md:grid-cols-2 lg:gap-2 p-9">
        <div className="relative flex flex-col justify-center md:justify-start pb-9 lg:pr-16 2xl:pr-40">
          {/* Top Text */}
          <div className="flex md:flex-row py-3 md:py-12">
            <h1 className="relative md:visible text-4xl md:text-6xl font-NJPBold text-len-White">
              美術館
            </h1>
            <h1 className="relative text-xs md:text-sm px-3 text-len-White">
              / 0x67616C6C657279
            </h1>
          </div>
          <div className="relative text-sm">
            {/* Bottom Text */}
            <p className="text-xs xl:text-xl font-NJPMedium text-len-White">
              私は絵を描くのが好きです。 現実逃避したい。
              <br />
              私の絵を使ってください！さようなら。
            </p>
            <div className="bg-len-White my-2 p-1 md:p-2 font-NJPBlack duration-300 text-left text-[0.65rem] md:text-base hover:scale-105 hover:ml-9 hover:bg-len-Black hover:text-len-White  hover:border hover:border-len-White">
              <a href="/gallery/drawings" className="p-1 text-center ">
                ✦ [SERVER_OFFLINE] 絵 / スケッチ / Drawings
              </a>
            </div>
            <div className="bg-len-White my-2 p-1 md:p-2 font-NJPBlack duration-300 text-left text-[0.65rem] md:text-base hover:scale-105 hover:ml-9 hover:bg-len-Black hover:text-len-White  hover:border hover:border-len-White">
              <a href="/gallery/photographs" className="p-1">
                ✦ [SERVER_OFFLINE] 写真 / しゃしん / Photographs
              </a>
            </div>
            <div className="bg-len-White my-2 p-1 md:p-2 font-NJPBlack duration-300 text-left text-[0.65rem] md:text-base hover:scale-105 hover:ml-9 hover:bg-len-Black hover:text-len-White  hover:border hover:border-len-White">
              <a href="/gallery/stickers" className="p-1">
                ✦ [SERVER_OFFLINE] 張り紙 / ステッカー / Stickers
              </a>
            </div>
            <div className="bg-len-White my-2 p-1 md:p-2 font-NJPBlack duration-300 text-left text-[0.65rem] md:text-base hover:scale-105 hover:ml-9 hover:bg-len-Black hover:text-len-White  hover:border hover:border-len-White">
              <a href="/gallery/tdmodels" className="p-1">
                ✦ [SERVER_OFFLINE] 彫刻 / 3Dモデル / 3D Models
              </a>
            </div>
          </div>
        </div>
        <div
          id="Gallery"
          className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-screen md:w-auto md:relative md:flex md:justify-center md:items-center"
        >
          <div className="grid grid-cols-3 p-9 gap-3 lg:gap-3 lg:grid-cols-3">
            <img
              className="border shadow-9l rounded-xl hover:rounded-3xl shadow-len-Black border-len-Black skew-x-6 hover:invert hover:scale-125 hover:z-30 md:hover:skew-x-0 hover:border-8 hover:transform md:hover:-translate-x-14 duration-700"
              src={img1}
              alt="1st Drawing"
            />
            <img
              className="border shadow-9l rounded-xl hover:rounded-3xl shadow-len-Black border-len-Black skew-x-6 hover:invert hover:scale-125 hover:z-30 md:hover:skew-x-0 hover:border-8 hover:transform md:hover:-translate-x-14 duration-700"
              src={img13}
              alt="2nd Drawing"
            />
            <img
              className="border shadow-9l rounded-xl hover:rounded-3xl shadow-len-Black border-len-Black skew-x-6 hover:invert hover:scale-125 hover:z-30 md:hover:skew-x-0 hover:border-8 hover:transform md:hover:-translate-x-14 duration-700"
              src={img3}
              alt="3rd Drawing"
            />
            <img
              className="border shadow-9l rounded-xl hover:rounded-3xl shadow-len-Black border-len-Black skew-x-6 hover:invert hover:scale-125 hover:z-30 md:hover:skew-x-0 hover:border-8 hover:transform md:hover:-translate-x-14 duration-700"
              src={img12}
              alt="4th Drawing"
            />
            <img
              className="border shadow-9l rounded-xl hover:rounded-3xl shadow-len-Black border-len-Black skew-x-6 hover:invert hover:scale-125 hover:z-30 md:hover:skew-x-0 hover:border-8 hover:transform md:hover:-translate-x-14 duration-700"
              src={img5}
              alt="5th Drawing"
            />
            <img
              className="border shadow-9l rounded-xl hover:rounded-3xl shadow-len-Black border-len-Black skew-x-6 hover:invert hover:scale-125 hover:z-30 md:hover:skew-x-0 hover:border-8 hover:transform md:hover:-translate-x-14 duration-700"
              src={img6}
              alt="6th Drawing"
            />
            <img
              className="border shadow-9l rounded-xl hover:rounded-3xl shadow-len-Black border-len-Black skew-x-6 hover:invert hover:scale-125 hover:z-30 md:hover:skew-x-0 hover:border-8 hover:transform md:hover:-translate-x-14 duration-700"
              src={img7}
              alt="7th Drawing"
            />
            <img
              className="border shadow-9l rounded-xl hover:rounded-3xl shadow-len-Black border-len-Black skew-x-6 hover:invert hover:scale-125 hover:z-30 md:hover:skew-x-0 hover:border-8 hover:transform md:hover:-translate-x-14 duration-700"
              src={img8}
              alt="8th Drawing"
            />
            <img
              className="border shadow-9l rounded-xl hover:rounded-3xl shadow-len-Black border-len-Black skew-x-6 hover:invert hover:scale-125 hover:z-30 md:hover:skew-x-0 hover:border-8 hover:transform md:hover:-translate-x-14 duration-700"
              src={img15}
              alt="9th Drawing"
            />
          </div>
        </div>
      </div>

      {/* QR Code */}
      <div className="collapse md:visible absolute md:bottom-0 flex justify-center">
        <a
          href="https://www.instagram.com/pluwhi/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="collapse md:visible md:m-9 md:h-36"
            src={QRC}
            href="https://www.instagram.com/pluwhi/"
            alt="1st Drawing"
          />
        </a>
      </div>
    </div>
  );
}
