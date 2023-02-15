import "../App.css";
import firstStickerWeb from "../img/stickers/sticker1.png";
import secondStickerWeb from "../img/stickers/sticker2.png";
import thirdStickerWeb from "../img/stickers/sticker3.png";
let a = Math.floor(Math.random() * 9) + 1;
let stickerListWeb = [
  {
    id: "1",
    name: "Woikuto",
    image: { firstStickerWeb },
  },
  {
    id: "2",
    name: "Hatsune Miku",
    image: { secondStickerWeb },
  },
  {
    id: "3",
    name: "Pnuleka",
    image: { thirdStickerWeb },
  },
];
const birthdayArray = [
  { name: "John", birthday: "25/12/1990", id: "123" },
  { name: "Abby", birthday: "22/10/1991", id: "124" },
];

export default function HomeImages() {
  console.log("The random number is:" + a);

  const data = [
    {
      id: "1",
      name: "Woikuto",
      image: firstStickerWeb,
    },
    {
      id: "2",
      name: "Hatsune Miku",
      image: secondStickerWeb,
    },
    {
      id: "3",
      name: "Pnuleka",
      image: thirdStickerWeb,
    },
  ];
  return (
    <div>
      <div className="snap-start relative min-h-screen bg-len-Black">
        {data.map(function (d, idx) {
          return (
            <div>
              <img
                key={idx}
                className="absolute bottom-0 right-0 pointer-events-none collapse px-6 sm:visible sm:min-w-[460px] sm:max-w-[500px] md:min-w-[540px] md:max-w-[600px]"
                src={d.image}
              />
              <div className="text-len-White" key={idx}>
                {d.name}
              </div>
            </div>
          );
        })}
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
