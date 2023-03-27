import "../App.css";
import pReal from "../img/pReal.png";

export default function About() {
  return (
    <div className="snap-start relative min-h-screen bg-len-Black">
      <div className="grid h-screen place-items-center">
        <div className="min-h-[23rem] min-w-[45rem] flex bg-len-White">
          <img className="max-h-[23rem]" src={pReal} alt="1st Drawing" />
          <div>
            <h1 className="text-len-Black text-[1.3rem] font-LineR">
              user_00.01.0002.0000003.9
            </h1>
            <p className=" text-left subpixel-antialiasedfont-nsl font-normal tracking-wide p-3 w-[50rem] text-xl">
              4D6574206D65206174207468652030782073746174696F6E2E20492
              07761732074616B656E20746F206120307820492067656E75696E65
              6C7920776173206F7074696D697374696320616E642062656C69657
              66564207468697320636F756C6420776F726B2E20476F6420492077
              6973682049207761736E277420736F207374757069642E204920646
              964206E6F74207265616C697A65206661737420656E6F7567682077
              686174207761732068617070656E696E672E20307820506C656173652E
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
