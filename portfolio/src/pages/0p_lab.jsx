import "../App.css";
import Mikuxor from "../img/observation/mikuxor.png";
import Observer from "../img/observation/observer1.png";
import Sinner from "../img/observation/sinner1.png";
import logo from "../img/logo512.png";

// import Home from "../components/01_home.jsx"; mikuxor.png
// import Gallery from "../components/02_gallery.jsx"; observer1.png
// import Map from "../components/03_map.jsx";
// import EndLetter from "../components/04_endLetter.jsx";
// import Loading from "../components/05_loading.jsx";

function Lab() {
  return (
    <div className="snap-y snap-mandatory scroll-smooth h-screen overflow-scroll overflow-x-hidden">
      <div className="snap-start relative min-h-screen bg-len-Black">
        {/* ACHANGEL */}
        <div className="absolute bottom-0 md:top-0 md:right-0 md:m-32">
          <img className="pointer-events-none" src={Mikuxor} alt="MikuHYPER" />
        </div>
        <div className="absolute top-0 left-0">
          {/* Album Boxes */}
          <div id="Letter" className="m-9 md:m-0 md:p-9">
            <div className="flex justify-center md:justify-start">
              <img
                className="pointer-events-none w-16 m-3"
                src={Sinner}
                alt="Sinner is hiding"
              />
            </div>

            <p className="text-[0.5rem] skew-x-3 md:text-[0.95rem] md:w-[40%] font-NJPRegular my-9 p-6 md:p-9 text-justify text-len-Black bg-len-White">
              欢迎回家 \\\ به خانه خوش آمدی! obs.vr do research about different
              topics and will post them over here. Cases differ from each other.
              307 of them are written with a disturbed state of mind or
              consciousness. 181 is written based on crucial research. 91 of
              them are nightmares described by humans. 999 of them are here due
              to the the incongruiy. Many of them are not released yet. obs.vr
              asked them to not hurry up with sharing them. Therefore please be
              patient while they try their best to narrate them without givg too
              much informaمتحد زیر گننtionthat ce them an ry. !距离很重要
            </p>
            <br />
            <hr className=" md:w-[41%] p-6" />
            {/* Cases */}
            <div className="">
              <a
                href="/CaseHatsuneMiku829"
                className="px-6 p-3 bg-len-White m-3 hover:-translate-y-1 hover:scale-110 hover:py-6 hover:bg-len-Black hover:text-len-White duration-300 hover:border hover:border-len-White"
              >
                #829
              </a>
              <a
                href="/CaseHatsuneMiku829"
                className="px-6 p-3 bg-len-White m-1 hover:-translate-y-1 hover:scale-110 hover:py-6 hover:bg-len-Black hover:text-len-White duration-300 hover:border hover:border-len-White pointer-events-none animate-trigger-medium"
              >
                #301
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="snap-start relative min-h-screen bg-len-Black overflow-hidden">
        <img
          className="absolute left-1/2 transform -translate-x-1/2 p-6 md:p-0 md:w-[100%] opacity-25"
          src={Observer}
          alt="Observer is watching"
        />

        {/* Here it ends oh no */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6">
          <a href="/">
            <img
              className="pointer-events-none w-10 invert border-2"
              src={logo}
              alt="WHATDELETED"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Lab;
