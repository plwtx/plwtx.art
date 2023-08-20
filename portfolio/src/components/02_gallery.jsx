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
import logo from "../img/logo512.png";

export default function Gallery() {
  return (
    <div className="snap-start min-h-screen relative bg-len-Black">
      <h1 className="visible relative md:absolute md:collapse text-6xl text-center p-10 font-NJPBold text-len-White">
        美術館
      </h1>
      <div className="md:grid md:grid-cols-2 lg:gap-2 p-9">
        <div className="relative flex flex-col justify-center md:justify-start pb-9 lg:pr-16 2xl:pr-40">
          <div className="flex md:flex-row py-12">
            <h1 className="absolute collapse md:relative md:visible text-6xl font-NJPBold text-len-White">
              美術館
            </h1>
            <h1 className="absolute collapse md:visible md:relative text-sm px-3 text-len-White">
              / 0x67616C6C657279
            </h1>
          </div>
          <div className="md:p-9 text-sm collapse md:visible absolute md:relative">
            <p className="xl:text-xl font-NJPMedium text-len-White">
              私は絵を描くのが好きです。 現実逃避したい。
              <br />
              私の絵を使ってください！さようなら。
            </p>
            <div className="bg-len-White my-1 py-2 font-NJPBlack hover:scale-105 hover:ml-6 hover:bg-len-Black hover:text-len-White duration-300 hover:border hover:border-len-White">
              <a href="/sketches" className="p-1 ">
                ✦ [CURRENTLY_OFFLINE] 絵 / スケッチ / 0x79 / Sketches
              </a>
            </div>
            <div className="bg-len-White my-1 py-2 font-NJPBlack hover:scale-105 hover:ml-6 hover:bg-len-Black hover:text-len-White duration-300 hover:border hover:border-len-White">
              <a href="/pictures" className="p-1">
                ✦ [CURRENTLY_OFFLINE] 写真 / しゃしん / 0x70 / Photographs
              </a>
            </div>
            <div className="bg-len-White my-1 py-2 font-NJPBlack hover:scale-105 hover:ml-6 hover:bg-len-Black hover:text-len-White duration-300 hover:border hover:border-len-White">
              <a href="/3dmodels" className="p-1">
                ✦ [CURRENTLY_OFFLINE] 彫刻 / 3Dモデル / 0x6D / 3D Models
              </a>
            </div>
            <div className="bg-len-White my-1 py-2 font-NJPBlack hover:scale-105 hover:ml-6 hover:bg-len-Black hover:text-len-White duration-300 hover:border hover:border-len-White">
              <a href="/stickers" className="p-1">
                ✦ [CURRENTLY_OFFLINE] 張り紙 / ステッカー / 0x73 / Stickers
              </a>
            </div>
          </div>
        </div>
        {/* Mobile attention */}
        <div className="relative md:absolute md:collapse h-[5rem]">
          <div className="bg-len-White">
            <div className="flex justify-center">
              <div className="flex justify-center items-center w-12">
                <img
                  className="w-6 pointer-events-none invert"
                  src={logo}
                  alt="WHATDELETED"
                />
                <img
                  className=" pointer-events-none invert mx-6"
                  src={logo}
                  alt="WHATDELETED"
                />
                <img
                  className="w-6 pointer-events-none invert"
                  src={logo}
                  alt="WHATDELETED"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Gallery Tab */}
        <div
          id="Gallery"
          className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-screen md:w-auto md:relative md:flex md:justify-center md:items-center"
        >
          <div className="grid grid-cols-3 p-9 gap-3 lg:gap-3 lg:grid-cols-3">
            <img
              className="border-2 border-dashed border-len-Black skew-x-6 hover:invert hover:scale-125 hover:z-30 hover:skew-x-0 hover:transform hover:-translate-x-14 duration-700"
              src={img1}
              alt="1st Drawing"
            />
            <img
              className="border-2 border-dashed border-len-Black skew-x-6 hover:invert hover:scale-125 hover:z-30 hover:skew-x-0 hover:transform hover:-translate-x-14 duration-700"
              src={img13}
              alt="2nd Drawing"
            />
            <img
              className="border-2 border-dashed border-len-Black skew-x-6 hover:invert hover:scale-125 hover:z-30 hover:skew-x-0 hover:transform hover:-translate-x-14 duration-700"
              src={img3}
              alt="3rd Drawing"
            />
            <img
              className="border-2 border-dashed border-len-Black skew-x-6 hover:invert hover:scale-125 hover:z-30 hover:skew-x-0 hover:transform hover:-translate-x-14 duration-700"
              src={img12}
              alt="4th Drawing"
            />
            <img
              className="border-2 border-dashed border-len-Black skew-x-6 hover:invert hover:scale-125 hover:z-30 hover:skew-x-0 hover:transform hover:-translate-x-14 duration-700"
              src={img5}
              alt="5th Drawing"
            />
            <img
              className="border-2 border-dashed border-len-Black skew-x-6 hover:invert hover:scale-125 hover:z-30 hover:skew-x-0 hover:transform hover:-translate-x-14 duration-700"
              src={img6}
              alt="6th Drawing"
            />
            <img
              className="border-2 border-dashed border-len-Black skew-x-6 hover:invert hover:scale-125 hover:z-30 hover:skew-x-0 hover:transform hover:-translate-x-14 duration-700"
              src={img7}
              alt="7th Drawing"
            />
            <img
              className="border-2 border-dashed border-len-Black skew-x-6 hover:invert hover:scale-125 hover:z-30 hover:skew-x-0 hover:transform hover:-translate-x-14 duration-700"
              src={img8}
              alt="8th Drawing"
            />
            <img
              className="border-2 border-dashed border-len-Black skew-x-6 hover:invert hover:scale-125 hover:z-30 hover:skew-x-0 hover:transform hover:-translate-x-14 duration-700"
              src={img15}
              alt="9th Drawing"
            />
          </div>
        </div>
      </div>
      {/* QR Code */}
      <div className="collapse md:visible absolute md:bottom-0 flex justify-center">
        <a
          href="https://www.instagram.com/0x706c777478/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="collapse md:visible md:m-9 md:h-36"
            src={QRC}
            href="https://www.instagram.com/0x706c777478/"
            alt="1st Drawing"
          />
        </a>
      </div>
    </div>
  );
}
