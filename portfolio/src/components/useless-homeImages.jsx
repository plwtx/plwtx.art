import "../App.css";
import { useState, useEffect } from "react";
import firstStickerWeb from "../img/stickers/sticker1.png";
import secondStickerWeb from "../img/stickers/sticker2.png";
import thirdStickerWeb from "../img/stickers/sticker3.png";
let a = Math.floor(Math.random() * 3) + 1;

export default function HomeImages() {
  const [homeIMG, setHomeIMG] = useState();

  console.log("The random number is:" + a);
  if (a === 1) {
    setHomeIMG({ firstStickerWeb });
  } else if (a === 2) {
    setHomeIMG({ secondStickerWeb });
  } else if (a === 3) {
    setHomeIMG({ thirdStickerWeb });
  }
  return (
    <div>
      <div className="snap-start relative min-h-screen bg-len-Black">
        <h1 className="text-len-White mx-auto p-12">{a}</h1>
        <img src={homeIMG} alt="homeImage" />
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
