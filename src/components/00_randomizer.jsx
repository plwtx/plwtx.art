import "../App.css";
let randomNumber = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
let a = Math.floor(Math.random() * 10) + 1;
let lnk = undefined;
//Links:
//
const data = [
  {
    id: 1,
    link: "https://marabarl-and-marlbara.tumblr.com/",
    name: "03-marabarltomarlbara",
  },
  {
    id: 2,
    link: "https://www.youtube.com/watch?v=GS6Rjpwb0Es",
    name: "07-DMITUR",
  },
  {
    id: 3,
    link: "https://youtu.be/mqbtufCJWLU",
    name: "10-ET",
  },
  {
    id: 4,
    link: "https://youtu.be/FydazpH-XR4",
    name: "10-VivaLaVida",
  },
  {
    id: 5,
    link: "https://youtu.be/y7VLyJPnaBA",
    name: "10-Forever_Young",
  },
  {
    id: 6,
    link: "https://youtu.be/tXKyKf-brFk",
    name: "10-Life would__suck",
  },
  {
    id: 7,
    link: "https://youtu.be/udCuNsweGc0",
    name: "10-THIS[IS]LNightlifek",
  },
  {
    id: 8,
    link: "https://youtu.be/iEFIfDTx9Y0",
    name: "10-AMV_HARUHI_SUZUMIYA_ALAN_WUALKER_THE_SPECTRE_:3",
  },
  {
    id: 9,
    link: "https://youtu.be/2E_eZEp1a5U",
    name: "always__AND__forever",
  },
  {
    id: 10,
    link: "https://marlbara.com/s/qskh/index.php",
    name: "QTpie's Hunt",
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
