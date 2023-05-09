import "../App.css";
import img1 from "../img/gallery/1.png";
import img2 from "../img/gallery/2.png";
import img3 from "../img/gallery/3.png";
import img4 from "../img/gallery/4.png";
import img5 from "../img/gallery/5.png";
import img6 from "../img/gallery/6.png";
import img7 from "../img/gallery/7.png";
import img8 from "../img/gallery/8.png";
import img9 from "../img/gallery/9.png";

export default function Gallery() {
  return (
    <div className="snap-start min-h-screen bg-len-Black p-3">
      {/* Name */}
      {/* This element is the reason of the top gap  */}
      {/* <h1 className=" text-len-White lg:collapse tracking-widest py-9 md:py-0 text-center whitespace-normal p-3 leading-none font-NJPBold px-9 text-[5rem]  ">
        美術館
      </h1> */}
      <div className="lg:grid lg:m-10 lg:grid-cols-2 lg:gap-2 lg:place-content-center">
        <div className="collapse lg:visible relative flex flex-col justify-start lg:pr-16 2xl:pr-40">
          <div className="flex flex-row py-12">
            <h1 className="text-6xl font-NJPBold text-len-White">美術館</h1>
            <h1 className="text-2xl font-NJPBold text-len-White">/ Gallery</h1>
          </div>
          <p className="text-xl font-NJPMedium text-len-White">
            私は絵を描くのが好きです。 現実逃避したい。
            <br />
            私の絵を使ってください！さようなら。
          </p>
          <p className="lg:text-[0.8rem] 2xl:text-xl font-IMFellEnglishSC text-len-White py-6">
            I like drawing (clarification: i like drawing only when the end
            result is liked by my friends and principally liked by Len). It
            helps me to feel at ease with the world as it grants me the ability
            to visualize the scenarios and characters i create in my head. I
            usually draw in black and white manga style. I am neither to be
            considered a manga artist nor an artist in general. I'm merely using
            the tools at my disposal to visualize ideas. My drawings / paintings
            are neither for you nor for any particular audience.
            <br />
            <br />* Although I consider my art is only made for myself, I hereby
            grant you all rights to my drawings. Print them out, post them, do
            whatever your heart desires [you can even use them as your little
            silly Twitter PFPs]. You don't have to credit me but that being
            said, please don't sell it or use it to hurt others. It's
            fundamentally against my beliefs, therefore seeing it in the future
            would make me sad.
          </p>
        </div>
        {/* Gallery Tab */}
        <div id="Gallery" className="flex justify-center items-center">
          <div className="grid grid-cols-3 px-3 gap-3 lg:gap-3 lg:grid-cols-3">
            <img className=" hover:invert" src={img1} alt="1st Drawing" />
            <img className="hover:invert" src={img2} alt="2nd Drawing" />
            <img className="hover:invert" src={img3} alt="3rd Drawing" />
            <img className="hover:invert" src={img4} alt="4th Drawing" />
            <img className="hover:invert" src={img5} alt="5th Drawing" />
            <img className="hover:invert" src={img6} alt="6th Drawing" />
            <img className="hover:invert" src={img7} alt="7th Drawing" />
            <img className="hover:invert" src={img8} alt="8th Drawing" />
            <img className="hover:invert" src={img9} alt="9th Drawing" />
          </div>
        </div>
      </div>
    </div>
  );
}
