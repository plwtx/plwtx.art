import "../App.css";
import img1 from "../img/gallery/1.png";
import img3 from "../img/gallery/3.png";
import img5 from "../img/gallery/5.png";
import img6 from "../img/gallery/6.png";
import img7 from "../img/gallery/7.png";
import img8 from "../img/gallery/8.png";
import img9 from "../img/gallery/9.png";
import img11 from "../img/gallery/11.JPG";
import img12 from "../img/gallery/12.JPG";
import QRC from "../img/QRC.png";

export default function Gallery() {
  return (
    <div className="snap-start min-h-screen relative bg-len-Black p-3">
      {/* Name */}
      {/* This element is the reason of the top gap  */}
      {/* <h1 className=" text-len-White lg:collapse tracking-widest py-9 md:py-0 text-center whitespace-normal p-3 leading-none font-NJPBold px-9 text-[5rem]  ">
        美術館
      </h1> */}
      <h1 className="visible relative md:absolute md:collapse text-6xl text-center p-10 font-NJPBold text-len-White">
        美術館
      </h1>

      <div className="md:grid md:grid-cols-2 md:m-6 lg:gap-2">
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
            <div className="bg-len-White my-1">
              <a href="#Gallery" className="p-1">
                絵 / スケッチ / 0x796F752063616E2066696E6420736B657463686573
              </a>
            </div>
            <div className="bg-len-White  my-1">
              <a href="#Gallery" className="p-1">
                写真 / しゃしん / 0x70686F746F677261706873206172652074616B656E
              </a>
            </div>
            <div className="bg-len-White  my-1">
              <a href="#Gallery" className="p-1">
                彫刻 / 3Dモデル / 0x6D6F64656C73206275696C64696E67732074616E6B73
              </a>
            </div>
            <div className="bg-len-White  my-1">
              <a href="#Gallery" className="p-1">
                張り紙 / ステッカー / 0x737469636B6572
              </a>
            </div>
          </div>
          {/* QR Code */}
          <div className="collapse md:visible absolute md:bottom-0 flex justify-center">
            <img
              className="collapse md:visible md:p-0 md:h-36"
              src={QRC}
              alt="1st Drawing"
            />
          </div>
          <div className="relative md:absolute md:collapse mx-6 mt-16 h-[7rem] bg-len-White"></div>
        </div>
        {/* Gallery Tab */}
        <div
          id="Gallery"
          className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-screen md:w-auto md:relative md:flex md:justify-center md:items-center"
        >
          <div className="grid grid-cols-3 p-9 gap-3 lg:gap-3 lg:grid-cols-3">
            <img className="" src={img1} alt="1st Drawing" />
            <img className="" src={img11} alt="2nd Drawing" />
            <img className="" src={img3} alt="3rd Drawing" />
            <img className="" src={img12} alt="4th Drawing" />
            <img className="" src={img5} alt="5th Drawing" />
            <img className="" src={img6} alt="6th Drawing" />
            <img className="" src={img7} alt="7th Drawing" />
            <img className="" src={img8} alt="8th Drawing" />
            <img className="" src={img9} alt="9th Drawing" />
          </div>
        </div>
      </div>
    </div>
  );
}
