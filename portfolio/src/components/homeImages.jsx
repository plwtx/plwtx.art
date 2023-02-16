import "../App.css";
import firstStickerWeb from "../img/stickers/sticker1.png";
import secondStickerWeb from "../img/stickers/sticker2.png";
import thirdStickerWeb from "../img/stickers/sticker3.png";
let a = Math.floor(Math.random() * 3) + 1;
const data = [
  {
    id: 1,
    path: "../img/stickers/sticker1.png",
    name: "Woikuto",
    image: firstStickerWeb,
  },
  {
    id: 2,
    path: "../img/stickers/sticker2.png",
    name: "Hatsune Miku",
    image: secondStickerWeb,
  },
  {
    id: 3,
    path: "../img/stickers/sticker3.png",
    name: "Pnuleka",
    image: thirdStickerWeb,
  },
];
export default function HomeImages() {
  let imageData = undefined;
  // data.forEach((x) => {
  //   if (x.id === a) {
  //     imageData = x;
  //   }
  // });
  console.log("The random number is:" + a);
  let localImageIndexString = localStorage.getItem("imageIndex");
  let localImageIndex = parseInt(localImageIndexString);
  if (localImageIndex) {
    let insertedIndex = localImageIndex + 1;
    if (localImageIndex >= 3) {
      insertedIndex = 1;
    }
    localStorage.setItem("imageIndex", insertedIndex);
  } else {
    localStorage.setItem("imageIndex", 1);
    localImageIndex = 1;
  }
  console.log("Local image index is:" + localImageIndex);
  data.forEach((x) => {
    if (x.id === localImageIndex) {
      imageData = x;
    }
  });

  return (
    <div>
      <div className="snap-start relative min-h-screen bg-len-Black">
        <div>
          <div>
            <img
              className="absolute bottom-0 right-0 pointer-events-none collapse px-6 sm:visible sm:min-w-[460px] sm:max-w-[500px] md:min-w-[540px] md:max-w-[600px]"
              src={imageData.image}
              alt=""
            />
          </div>
          {/* <img
                key={idx}
                className="absolute bottom-0 right-0 pointer-events-none collapse px-6 sm:visible sm:min-w-[460px] sm:max-w-[500px] md:min-w-[540px] md:max-w-[600px]"
                src={d.image}
              />
              <div className="text-len-White" key={idx}>
                {d.name}
              </div> */}
        </div>
      </div>
    </div>
  );
}
//   return (
//     <div>

//       <div className="snap-start relative min-h-screen bg-len-Black">
//         <img
//           className="absolute bottom-0 right-0 pointer-events-none collapse px-6 sm:visible sm:min-w-[460px] sm:max-w-[500px] md:min-w-[540px] md:max-w-[600px]"
//           src={stickerListWeb.image}
//         />
//         <div>
//           <p className="text-len-White">Mounted {stickerListWeb.id}</p>
//         </div>
//         <div className="text-len-White">{birthdayArray.id}</div>
//       </div>
//     </div>

//   );

// }
