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

export default function Gallery() {
  return (
    <section className="min-h-screen bg-len-Bluwska lg:grid lg:grid-cols-2 lg:gap-2 lg:place-content-center	 ">
      <h1 className="select-none text-len-White tracking-widest py-9 md:py-0 text-center md:text-left md:tracking-tight whitespace-normal p-3 leading-none font-LineB px-9 text-[5rem] md:text-[3rem] lg:text-[27rem] ">
        美術館
      </h1>
      <div className="flex justify-center items-center p-3">
        <div className="grid grid-cols-3 gap-3 lg:grid-cols-3 lg:px-9 rounded-lg">
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
    </section>
  );
}
