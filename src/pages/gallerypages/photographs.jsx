import "../../App.css";
import img2 from "../../img/plog/img2.png";
import img3 from "../../img/plog/img3.png";
import img4 from "../../img/plog/img4.png";
import img5 from "../../img/plog/img5.jpg";
import img7 from "../../img/plog/img7.jpg";
import img9 from "../../img/plog/img9.jpg";
// import logo from "../img/logo512.png";

function Photographs() {
  return (
    <div className="h-screen overflow-scroll overflow-x-hidden">
      <div className="absolute poscenter left-0 mx-9 w-[2px] h-[85%] bg-len-White z-10 pointer-events-none"></div>
      <div className=" relative min-h-screen bg-len-Black">
        {/* Code */}
        {/* vertical lines */}

        {/* Year Menu */}
        <div className="absolute poscenter left-0 text-len-White font-NJPBlack mx-9 z-20 ">
          <div className="flex flex-col ">
            <a
              className="bg-len-Black px-1 my-3 hover:bg-len-White hover:text-len-Black "
              href="#H"
            >
              one
            </a>
            <a
              className="bg-len-Black px-1 my-3 hover:bg-len-White hover:text-len-Black "
              href="#P"
            >
              will
            </a>
            <a
              className="bg-len-Black px-1 my-3 hover:bg-len-White hover:text-len-Black "
              href="#T"
            >
              not
            </a>
            <a
              className="bg-len-Black px-1 my-3 hover:bg-len-White hover:text-len-Black "
              href="#X"
            >
              lose
            </a>
          </div>
        </div>
        {/* PLOG Content */}
        {/* 1st Card */}
        <div className="flex justify-center items-center md:p-6 xl:p-9">
          <figure className="lg:flex w-[50%] lg:w-[55%] bg-len-White rounded-3xl m-6 lg:m-0">
            <img
              src={img2}
              alt="1st Entry"
              // className="object-contain rounded-xl lg:mx-0 m-3 w-[50%] md:w-[70%] lg:w-[35%] rounded-t-3xl lg:rounded-t-2xl lg:rounded-l-2xl"
              className="overflow-hidden object-cover rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl duration-300 mb-3 lg:m-0 mx-auto h-auto sm:w-[26rem] md:w-[28rem] lg:w-[32rem]"
            />
            <div className="flex flex-col justify-center lg:w-[55%] text-[0.6rem] sm:text-[0.65rem] md:text-[0.75rem] lg:text-[0.8rem] text-justify p-3 md:p-3 md:mx-6 lg:mx-3">
              <div className="">
                {/* <div className="overflow-clip object-contain text-[0.5rem] sm:text-[0.65rem] md:text-[0.75rem] lg:text-[0.85rem] xl:text-[0.85rem] 2xl:text-[1rem] mx-auto lg:mx-0 md:p-3 text-justify p-2 md:text-left font-light w-[88%] md:py-3"> */}
                <blockquote>
                  <p class="">
                    "But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth, the
                    master-builder of human happiness."
                  </p>
                  <br />
                </blockquote>
                <figcaption class="text-center lg:text-left">
                  <div class="text-indigo-500">Sword Art Online</div>
                  <div class="text-slate-700 dark:text-slate-500">
                    2023 / 09 / 11
                  </div>
                </figcaption>
              </div>
            </div>
          </figure>
        </div>
        {/* 1st Card */}
        <div className="flex justify-center items-center md:p-6 xl:p-9">
          <figure className="lg:flex w-[50%] lg:w-[55%] bg-len-White rounded-3xl m-6 lg:m-0">
            <img
              src={img4}
              alt="2nd Entry"
              // className="object-contain rounded-xl lg:mx-0 m-3 w-[50%] md:w-[70%] lg:w-[35%] rounded-t-3xl lg:rounded-t-2xl lg:rounded-l-2xl"
              className="overflow-hidden object-cover rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl duration-300 mb-3 lg:m-0 mx-auto h-auto sm:w-[26rem] md:w-[28rem] lg:w-[32rem]"
            />
            <div className="flex flex-col justify-center lg:w-[55%] text-[0.6rem] sm:text-[0.65rem] md:text-[0.75rem] lg:text-[0.8rem] text-justify p-3 md:p-3 md:mx-6 lg:mx-3">
              <div className="">
                {/* <div className="overflow-clip object-contain text-[0.5rem] sm:text-[0.65rem] md:text-[0.75rem] lg:text-[0.85rem] xl:text-[0.85rem] 2xl:text-[1rem] mx-auto lg:mx-0 md:p-3 text-justify p-2 md:text-left font-light w-[88%] md:py-3"> */}
                <blockquote>
                  <p class="">
                    "But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth, the
                    master-builder of human happiness."
                  </p>
                  <br />
                </blockquote>
                <figcaption class="text-center lg:text-left">
                  <div class="text-indigo-500">Sword Art Online</div>
                  <div class="text-slate-700 dark:text-slate-500">
                    2023 / 09 / 11
                  </div>
                </figcaption>
              </div>
            </div>
          </figure>
        </div>
        {/* 1st Card */}
        <div className="flex justify-center items-center md:p-6 xl:p-9">
          <figure className="lg:flex w-[50%] lg:w-[55%] bg-len-White rounded-3xl m-6 lg:m-0">
            <img
              src={img3}
              alt="3rd Entry"
              // className="object-contain rounded-xl lg:mx-0 m-3 w-[50%] md:w-[70%] lg:w-[35%] rounded-t-3xl lg:rounded-t-2xl lg:rounded-l-2xl"
              className="overflow-hidden object-cover rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl duration-300 mb-3 lg:m-0 mx-auto h-auto sm:w-[26rem] md:w-[28rem] lg:w-[32rem]"
            />
            <div className="flex flex-col justify-center lg:w-[55%] text-[0.6rem] sm:text-[0.65rem] md:text-[0.75rem] lg:text-[0.8rem] text-justify p-3 md:p-3 md:mx-6 lg:mx-3">
              <div className="">
                {/* <div className="overflow-clip object-contain text-[0.5rem] sm:text-[0.65rem] md:text-[0.75rem] lg:text-[0.85rem] xl:text-[0.85rem] 2xl:text-[1rem] mx-auto lg:mx-0 md:p-3 text-justify p-2 md:text-left font-light w-[88%] md:py-3"> */}
                <blockquote>
                  <p class="">
                    "But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth, the
                    master-builder of human happiness."
                  </p>
                  <br />
                </blockquote>
                <figcaption class="text-center lg:text-left">
                  <div class="text-indigo-500">Sword Art Online</div>
                  <div class="text-slate-700 dark:text-slate-500">
                    2023 / 09 / 11
                  </div>
                </figcaption>
              </div>
            </div>
          </figure>
        </div>

        {/* 1st Card */}
        <div className="flex justify-center items-center md:p-6 xl:p-9">
          <figure className="lg:flex w-[50%] lg:w-[55%] bg-len-White rounded-3xl m-6 lg:m-0">
            <img
              src={img5}
              alt="1st Entry"
              // className="object-contain rounded-xl lg:mx-0 m-3 w-[50%] md:w-[70%] lg:w-[35%] rounded-t-3xl lg:rounded-t-2xl lg:rounded-l-2xl"
              className="overflow-hidden object-cover rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl duration-300 mb-3 lg:m-0 mx-auto h-auto sm:w-[26rem] md:w-[28rem] lg:w-[32rem]"
            />
            <div className="flex flex-col justify-center lg:w-[55%] text-[0.6rem] sm:text-[0.65rem] md:text-[0.75rem] lg:text-[0.8rem] text-justify p-3 md:p-3 md:mx-6 lg:mx-3">
              <div className="">
                {/* <div className="overflow-clip object-contain text-[0.5rem] sm:text-[0.65rem] md:text-[0.75rem] lg:text-[0.85rem] xl:text-[0.85rem] 2xl:text-[1rem] mx-auto lg:mx-0 md:p-3 text-justify p-2 md:text-left font-light w-[88%] md:py-3"> */}
                <blockquote>
                  <p class="">
                    "But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth, the
                    master-builder of human happiness."
                  </p>
                  <br />
                </blockquote>
                <figcaption class="text-center lg:text-left">
                  <div class="text-indigo-500">Sword Art Online</div>
                  <div class="text-slate-700 dark:text-slate-500">
                    2023 / 09 / 11
                  </div>
                </figcaption>
              </div>
            </div>
          </figure>
        </div>
        {/* 1st Card */}
        <div className="flex justify-center items-center md:p-6 xl:p-9">
          <figure className="lg:flex w-[50%] lg:w-[55%] bg-len-White rounded-3xl m-6 lg:m-0">
            <img
              src={img9}
              alt="2nd Entry"
              // className="object-contain rounded-xl lg:mx-0 m-3 w-[50%] md:w-[70%] lg:w-[35%] rounded-t-3xl lg:rounded-t-2xl lg:rounded-l-2xl"
              className="overflow-hidden object-cover rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl duration-300 mb-3 lg:m-0 mx-auto h-auto sm:w-[26rem] md:w-[28rem] lg:w-[32rem]"
            />
            <div className="flex flex-col justify-center lg:w-[55%] text-[0.6rem] sm:text-[0.65rem] md:text-[0.75rem] lg:text-[0.8rem] text-justify p-3 md:p-3 md:mx-6 lg:mx-3">
              <div className="">
                {/* <div className="overflow-clip object-contain text-[0.5rem] sm:text-[0.65rem] md:text-[0.75rem] lg:text-[0.85rem] xl:text-[0.85rem] 2xl:text-[1rem] mx-auto lg:mx-0 md:p-3 text-justify p-2 md:text-left font-light w-[88%] md:py-3"> */}
                <blockquote>
                  <p class="">
                    "But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth, the
                    master-builder of human happiness."
                  </p>
                  <br />
                </blockquote>
                <figcaption class="text-center lg:text-left">
                  <div class="text-indigo-500">Sword Art Online</div>
                  <div class="text-slate-700 dark:text-slate-500">
                    2023 / 09 / 11
                  </div>
                </figcaption>
              </div>
            </div>
          </figure>
        </div>
        {/* 1st Card */}
        <div className="flex justify-center items-center md:p-6 xl:p-9">
          <figure className="lg:flex w-[50%] lg:w-[55%] bg-len-White rounded-3xl m-6 lg:m-0">
            <img
              src={img7}
              alt="3rd Entry"
              // className="object-contain rounded-xl lg:mx-0 m-3 w-[50%] md:w-[70%] lg:w-[35%] rounded-t-3xl lg:rounded-t-2xl lg:rounded-l-2xl"
              className="overflow-hidden object-cover rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl duration-300 mb-3 lg:m-0 mx-auto h-auto sm:w-[26rem] md:w-[28rem] lg:w-[32rem]"
            />
            <div className="flex flex-col justify-center lg:w-[55%] text-[0.6rem] sm:text-[0.65rem] md:text-[0.75rem] lg:text-[0.8rem] text-justify p-3 md:p-3 md:mx-6 lg:mx-3">
              <div className="">
                {/* <div className="overflow-clip object-contain text-[0.5rem] sm:text-[0.65rem] md:text-[0.75rem] lg:text-[0.85rem] xl:text-[0.85rem] 2xl:text-[1rem] mx-auto lg:mx-0 md:p-3 text-justify p-2 md:text-left font-light w-[88%] md:py-3"> */}
                <blockquote>
                  <p class="">
                    "But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth, the
                    master-builder of human happiness."
                  </p>
                  <br />
                </blockquote>
                <figcaption class="text-center lg:text-left">
                  <div class="text-indigo-500">Sword Art Online</div>
                  <div class="text-slate-700 dark:text-slate-500">
                    2023 / 09 / 11
                  </div>
                </figcaption>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
}
export default Photographs;
