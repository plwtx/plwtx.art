import "../../App.css";
// import logo from "../img/logo512.png";

function Drawings() {
  return (
    <div className="snap-y snap-mandatory scroll-smooth h-dvh overflow-scroll overflow-x-hidden">
      <div className="snap-start relative min-h-dvh bg-len-Black">
        {/* Code */}
        <div className="m-3 p-3 pt-64 border-3 border-len-White rounded-xl flex justify-center">
          <div className=" m-9 p-9 px-16 border border-len-White">
            <h1 className=" text-len-Black bg-white text-center p-2 m-3 font-NJPBold skew-x-6">Drawings</h1>
            <p className="bg-white text-len-Black font-NJPBold p-6 m-3 skew-x-6">
              Drawings are currently unavailable but you can find them @pluwhi on instagram !
            </p>
            <a
              href="/"
              className="absolute -left-10 -top-3 px-16 py-9 border border-len-White text-len-White font-NJPLight text-xl bg-len-Black m-1 skew-x-6 hover:skew-x-12 hover:-translate-y-1 hover:scale-110 hover:py-6 hover:bg-len-Black hover:text-len-White duration-300 hover:border-r-8 hover:border-b-8 hover:top-0 hover:-left-5 hover:border-len-White"
            >
              帰る
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Drawings;
