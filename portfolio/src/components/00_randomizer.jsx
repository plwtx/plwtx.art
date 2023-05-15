import "../App.css";
let randomNumber = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
let a = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
let lnk = undefined;
//Links:
//
const data = [
  {
    id: 1,
    link: "https://marabarl-and-marlbara.tumblr.com/",
    name: "marabarltomarlbara",
  },
  {
    id: 2,
    link: "https://www.youtube.com/watch?v=GS6Rjpwb0Es",
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
      <a href={lnk} target="_blank" rel="noopener noreferrer">
        {randomNumber}
      </a>
    </div>
  );
}
