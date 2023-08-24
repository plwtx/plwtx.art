import "../../App.css";
// import logo from "../img/logo512.png";

function Stickers() {
  return (
    <div className="snap-y snap-mandatory scroll-smooth h-screen overflow-scroll overflow-x-hidden">
      <div className="snap-start relative min-h-screen bg-len-Black">
        {/* Code */}
        <div className="poscenter m-3 p-3">
          <h1 className=" text-len-Black bg-white text-center p-2 m-3 font-NJPBold skew-x-6">
            Stickers
          </h1>
          <p className="bg-white text-len-Black p-6 m-3">
            Stickers are currently unavailable but once they are they will be
            displayed here.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Stickers;
