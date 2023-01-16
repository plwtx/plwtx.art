import "../App.css";
import img1 from "../img/gallery/1.png";
import img2 from "../img/gallery/2.png";
import img3 from "../img/gallery/3.png";
import img4 from "../img/gallery/4.png";
import img5 from "../img/gallery/5.png";
import img6 from "../img/gallery/6.png";

export default function Gallery() {
  return (
    <section class="overflow-hidden text-gray-700">
      <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
        <div class="flex flex-wrap -m-1 md:-m-2">
          <div class="flex flex-wrap w-1/2">
            <div class="w-1/2 p-1 md:p-2">
              <img
                class="block object-cover object-center w-full h-full rounded-lg"
                src={img3}
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                class="block object-cover object-center w-full h-full rounded-lg"
                src={img2}
              />
            </div>
            <div class="w-full p-1 md:p-2">
              <img
                class="block object-cover object-center w-full h-full rounded-lg"
                src={img1}
              />
            </div>
          </div>
          <div class="flex flex-wrap w-1/2">
            <div class="w-full p-1 md:p-2">
              <img
                class="block object-cover object-center w-full h-full rounded-lg"
                src={img6}
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                class="block object-cover object-center w-full h-full rounded-lg"
                src={img5}
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                class="block object-cover object-center w-full h-full rounded-lg"
                src={img4}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
