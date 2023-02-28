import "../App.css";
let randomNumber = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
let a = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
let lnk = undefined;
//Links:
//
const data = [
  {
    id: 1,
    link: "https://youtu.be/gpVJqECzTxk",
    name: "Woikuto",
  },
  {
    id: 2,
    link: "https://youtu.be/mgz1wdlkzcs",
    name: "Hatsune Miku",
  },
  {
    id: 3,
    link: "https://youtu.be/mqbtufCJWLU",
    name: "Pnuleka",
  },
];
export default function Randomizer() {
  console.log("The random number is:" + a);
  data.forEach((x) => {
    if (x.id === a) {
      lnk = x.link;
    }
  });
  return (
    <div>
      <a
        className="collapse lg:visible text-len-White absolute p-1 top-0 right-0 text-[0.75vw] cursor-default	"
        href={lnk}
        target="_blank"
        rel="noopener noreferrer"
      >
        {randomNumber}
      </a>
    </div>
  );
}
