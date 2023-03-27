import "../App.css";
import pReal from "../img/pReal.png";

export default function About() {
  return (
    <div className="snap-start relative min-h-screen bg-len-Black">
      <div className="grid h-screen place-items-center">
        <div className="min-h-[23rem] min-w-[45rem] flex bg-len-White">
          <img className="max-h-[23rem]" src={pReal} alt="1st Drawing" />
          <div className="m-6">
            <h1 className="text-len-Black text-[1.75rem] font-LineR">
              user_00.01.0002.0000003.9
            </h1>
            <p className="text-left subpixel-antialiasedfont-nsl font-normal tracking-wide w-[34rem] text-md">
              4D 65 74 20 6D 65 20 61 74 20 74 68 65 20 30 78 20 73 74 61 74 69
              6F 6E 2E 20 49 20 77 61 73 20 74 61 6B 65 6E 20 74 6F 20 61 20 30
              78 20 49 20 67 65 6E 75 69 6E 65 6C 79 20 77 61 73 20 6F 70 74 69
              6D 69 73 74 69 63 20 61 6E 64 20 62 65 6C 69 65 76 65 64 20 74 68
              69 73 20 63 6F 75 6C 64 20 77 6F 72 6B 2E 20 47 6F 64 20 49 20 77
              69 73 68 20 49 20 77 61 73 6E 27 74 20 73 6F 20 73 74 75 70 69 64
              2E 20 49 20 64 69 64 20 6E 6F 74 20 72 65 61 6C 69 7A 65 20 66 61
              73 74 20 65 6E 6F 75 67 68 20 77 68 61 74 20 77 61 73 20 68 61 70
              70 65 6E 69 6E 67 2E 20 30 78 20 50 6C 65 61 73 65 2E
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
