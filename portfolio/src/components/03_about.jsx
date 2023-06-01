import "../App.css";
import AM from "../img/haruhism.png";

export default function About() {
  return (
    <div className="snap-start relative min-h-screen bg-len-Black">
      <div className="flex flex-row">
        <img className="h-screen left-0" src={AM} alt="AboutPagePicture" />
        <div className="p-16">
          <div className="flex flex-row py-3">
            <h1 className="text-6xl font-NJPBold text-len-White">ハルヒズム</h1>
            <h1 className="text-2xl font-NJPBold text-len-White">/ Haruhism</h1>
          </div>
          <p
            id="Haruhism"
            className="text-xl font-NJPMedium text-len-White py-6"
          >
            ますます成長する新しい反宗教、信者は涼宮ハルヒが 3
            年前にすべてを作成し、生物に偽りの記憶を与え、物事に古い時代の偽りの外観を与えると信じています。ハルヒズムは信仰のみに基づいているため、同じ
            他の宗教と同様の基盤。
            現在、ソーシャルネットワーク上でハルヒズムの信奉者を見つけるのは簡単で、アクティブなグループは数十あります。
          </p>
          <p className="text-sm text-len-White py-6"></p>
        </div>
      </div>
    </div>
  );
}
