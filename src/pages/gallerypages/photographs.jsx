import "../../App.css";
// import logo from "../img/logo512.png";

function Photographs() {
  return (
    <div className="snap-y snap-mandatory scroll-smooth h-screen overflow-scroll overflow-x-hidden">
      <div className="snap-start relative min-h-screen bg-len-Black">
        {/* Code */}
        {/* vertical lines */}

        <div className="absolute poscenter left-0 mx-9 w-[2px] h-[80%] bg-len-White z-10 pointer-events-none"></div>

        {/* Year Menu */}
        <div className="absolute poscenter left-0 text-len-White font-NJPBlack mx-9 z-20 ">
          <div className="flex flex-col ">
            <a
              className="bg-len-Black px-1 my-3 hover:bg-len-White hover:text-len-Black "
              href="#H"
            >
              2023
            </a>
            <a
              className="bg-len-Black px-1 my-3 hover:bg-len-White hover:text-len-Black "
              href="#P"
            >
              2022
            </a>
            <a
              className="bg-len-Black px-1 my-3 hover:bg-len-White hover:text-len-Black "
              href="#T"
            >
              2021
            </a>
            <a
              className="bg-len-Black px-1 my-3 hover:bg-len-White hover:text-len-Black "
              href="#X"
            >
              2020
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Photographs;
