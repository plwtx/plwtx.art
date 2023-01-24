import "../App.css";
import s1img from "../img/s1.png";
import img1 from "../img/gallery/1.png";
import img2 from "../img/gallery/2.png";
import img3 from "../img/gallery/3.png";
import img4 from "../img/gallery/4.png";
import img5 from "../img/gallery/5.png";
import img6 from "../img/gallery/6.png";
import img7 from "../img/gallery/7.png";
import img8 from "../img/gallery/8.png";
import img9 from "../img/gallery/9.png";
import img10 from "../img/gallery/10.png";
import agjp from "../img/agjp.svg";

export default function Gallery() {
  return (
    <div className="snap-start min-h-screen bg-len-Bluwska p-3">
      <h1 className=" text-len-White lg:collapse tracking-widest py-9 md:py-0 text-center whitespace-normal p-3 leading-none font-LineB px-9 text-[5rem]  ">
        美術館
      </h1>
      <div className="lg:grid lg:m-10 lg:grid-cols-2 lg:gap-2 lg:place-content-center">
        <div className="collapse lg:visible relative">
          <img className="absolute w-[40vw] " src={agjp} alt="" />
        </div>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-3 gap-3 lg:grid-cols-3 lg:px-9 lg:m-6 rounded-lg">
            <img className="rounded-lg" src={img1} alt="" />
            <img className="rounded-lg" src={img2} alt="" />
            <img className="rounded-lg" src={img3} alt="" />
            <img className="rounded-lg" src={img5} alt="" />
            <img className="rounded-lg" src={img6} alt="" />
            <img className="rounded-lg" src={img7} alt="" />
            <img className="rounded-lg" src={img8} alt="" />
            <img className="rounded-lg" src={img9} alt="" />
            <img className="rounded-lg" src={img10} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
