import "../../App.css";
import img1 from "../../img/plog/img1.PNG";
import img2 from "../../img/plog/img2.png";
import img3 from "../../img/plog/img3.png";
import img4 from "../../img/plog/img4.png";
// import logo from "../img/logo512.png";

function Photographs() {
  return (
    <div className=" h-screen overflow-scroll overflow-x-hidden">
      <div className=" relative min-h-screen bg-len-Black">
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
                    “On the SAO game front, Sword Art Online Alicization
                    Lycoris, the supposedly final game in the SAO game series,
                    was released in Japan on July 9, 2020 (for the PlayStation
                    consoles) and in the West on July 10, 2020. The four free
                    DLCs have been released for the game and we are now waiting
                    for the release of the first paid DLC, Myosotis (a.k.a. "The
                    Blooming of the forget-me-not" in the West). As the paid DLC
                    is much more expansive than the free DLCs and is sold
                    separately, the game producers cannot yet give any specifics
                    for when they plan to release the DLC.”
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
                    “On the SAO game front, Sword Art Online Alicization
                    Lycoris, the supposedly final game in the SAO game series,
                    was released in Japan on July 9, 2020 (for the PlayStation
                    consoles) and in the West on July 10, 2020. The four free
                    DLCs have been released for the game and we are now waiting
                    for the release of the first paid DLC, Myosotis (a.k.a. "The
                    Blooming of the forget-me-not" in the West). As the paid DLC
                    is much more expansive than the free DLCs and is sold
                    separately, the game producers cannot yet give any specifics
                    for when they plan to release the DLC.”
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
                    “On the SAO game front, Sword Art Online Alicization
                    Lycoris, the supposedly final game in the SAO game series,
                    was released in Japan on July 9, 2020 (for the PlayStation
                    consoles) and in the West on July 10, 2020. The four free
                    DLCs have been released for the game and we are now waiting
                    for the release of the first paid DLC, Myosotis (a.k.a. "The
                    Blooming of the forget-me-not" in the West). As the paid DLC
                    is much more expansive than the free DLCs and is sold
                    separately, the game producers cannot yet give any specifics
                    for when they plan to release the DLC.”
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
                    “On the SAO game front, Sword Art Online Alicization
                    Lycoris, the supposedly final game in the SAO game series,
                    was released in Japan on July 9, 2020 (for the PlayStation
                    consoles) and in the West on July 10, 2020. The four free
                    DLCs have been released for the game and we are now waiting
                    for the release of the first paid DLC, Myosotis (a.k.a. "The
                    Blooming of the forget-me-not" in the West). As the paid DLC
                    is much more expansive than the free DLCs and is sold
                    separately, the game producers cannot yet give any specifics
                    for when they plan to release the DLC.”
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
                    “On the SAO game front, Sword Art Online Alicization
                    Lycoris, the supposedly final game in the SAO game series,
                    was released in Japan on July 9, 2020 (for the PlayStation
                    consoles) and in the West on July 10, 2020. The four free
                    DLCs have been released for the game and we are now waiting
                    for the release of the first paid DLC, Myosotis (a.k.a. "The
                    Blooming of the forget-me-not" in the West). As the paid DLC
                    is much more expansive than the free DLCs and is sold
                    separately, the game producers cannot yet give any specifics
                    for when they plan to release the DLC.”
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
                    “On the SAO game front, Sword Art Online Alicization
                    Lycoris, the supposedly final game in the SAO game series,
                    was released in Japan on July 9, 2020 (for the PlayStation
                    consoles) and in the West on July 10, 2020. The four free
                    DLCs have been released for the game and we are now waiting
                    for the release of the first paid DLC, Myosotis (a.k.a. "The
                    Blooming of the forget-me-not" in the West). As the paid DLC
                    is much more expansive than the free DLCs and is sold
                    separately, the game producers cannot yet give any specifics
                    for when they plan to release the DLC.”
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
