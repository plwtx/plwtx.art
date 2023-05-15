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
          <p className="text-xl font-NJPMedium text-len-White py-6">
            ますます成長する新しい反宗教、信者は涼宮ハルヒが 3
            年前にすべてを作成し、生物に偽りの記憶を与え、物事に古い時代の偽りの外観を与えると信じています。ハルヒズムは信仰のみに基づいているため、同じ
            他の宗教と同様の基盤。
            現在、ソーシャルネットワーク上でハルヒズムの信奉者を見つけるのは簡単で、アクティブなグループは数十あります。
          </p>
          <p className="text-sm text-len-White py-6">
            48 61 72 75 68 69 20 53 75 7A 75 6D 69 79 61 20 69 73 20 69 6E 20 64
            65 73 70 61 69 72 20 61 6E 64 20 73 74 75 63 6B 20 69 6E 20 61 20 73
            68 69 74 74 79 20 63 6F 75 6E 74 72 79 20 77 68 65 72 65 20 73 68 65
            20 68 61 73 20 6E 6F 20 61 62 69 6C 69 74 79 20 74 6F 20 62 65 63 6F
            6D 65 20 68 65 72 73 65 6C 66 2E 20 54 68 65 72 65 66 6F 72 65 20 73
            68 65 20 69 73 20 74 72 61 70 70 65 64 20 69 6E 20 61 20 62 6F 64 79
            20 74 68 61 74 20 64 6F 65 73 20 6E 6F 74 20 62 65 6C 6F 6E 67 20 74
            6F 20 68 65 72 2E 20 4D 61 6B 69 6E 67 20 68 65 72 20 64 61 69 6C 79
            20 6C 69 66 65 20 6D 69 73 65 72 61 62 6C 65 2E
          </p>
        </div>
      </div>
    </div>
  );
}
