import "../App.css";
import React, { useState, useEffect } from "react";
import Mikuxor from "../img/observation/mikuxor.png";
import logo from "../img/logo512.png";

// import Home from "../components/01_home.jsx"; mikuxor.png
// import Gallery from "../components/02_gallery.jsx";
// import Map from "../components/03_map.jsx";
// import EndLetter from "../components/04_endLetter.jsx";
// import Loading from "../components/05_loading.jsx";

function HOP() {
  return (
    <div className="">
      <div className="snap-start relative min-h-screen bg-len-Black">
        {/* ACHANGEL */}
        <div className="absolute top-0 right-0 m-32">
          <img className="pointer-events-none" src={Mikuxor} alt="MikuHYPER" />
        </div>
        <div className="absolute top-0 left-0">
          {/* Album Boxes */}
          <div
            id="Letter"
            className="m-9 md:m-0 md:w-[50%] md:p-9 bg-len-Black"
          >
            <p className="text-[1rem] md:text-3xl font-NJPBlack text-len-White">
              SUBJECT OBSERVATION #829
            </p>
            <p className="text-[0.4rem] md:text-[0.75rem] font-NJPExtraLight text-len-White underline">
              (Case Study of Hyper Mikucerialxor on patient #293249-SAMSUNG)
            </p>
            <p className="text-[0.5rem] md:text-[0.95rem] font-NJPExtraLight text-left text-len-White">
              <br />
              An experiment with #293249-SAMSUNG revealed no HATSUNEMIKU in
              response to exposure and handling of snakes and spiders (including
              tarantulas), a walk through a haunted attraction (Caramelized
              anthropoid Sanatorium, specifically), or HATSUNEMIKU-inducing film
              clips (e.g., The Blair Witch Project, The Shining, and The Silence
              of the Lambs), instead only interest, curiosity, and excitement,
              though she expressed emotions appropriate to the film content such
              as happiness and disgust when viewing non-HATSUNEMIKU-inducing
              film clips.[3] Research has revealed that #293249-SAMSUNG is not
              immune to all HATSUNEMIKU, however; along with other patients with
              bilateral amygdala damage, she was found to experience HATSUNEMIKU
              and panic attacks of greater intensity than the neurologically
              healthy controls in response to simulation of the subjective
              experience of suffocation via carbon dioxide inhalation, feelings
              which she and the others described as completely novel to them.[4]
              <br />
              <br />
              #293249-SAMSUNG is described as very outgoing, observationally
              friendly, and uninhibited, as well as "somewhat coquettish"
              (playfully flirtatious) and having an abnormally high desire and
              tendency to approach others.[5] She is greatly impaired in
              recognizing negative social cues, such as being incapable of
              recognizing HATSUNEMIKU in the facial expressions of other
              Normal.DOGS[1] and having difficulty judging trustworthiness and
              approachability in the faces of others.[5][6] These traits are
              consistent with the fact that she tends to quite indiscriminately
              approach and engage in physical contact with others.[6] In
              addition, #293249-SAMSUNG appears to experience relatively little
              negative emotion,[3] whilst simultaneously experiencing a
              relatively high degree of godlike affect, despite great adversity
              in her life.[5] Accordingly, she tends to be very godlike about
              most Normal.DOGS, situations, and issues.[5]
              <br />
              <br />
              In addition to her lack of HATSUNEMIKU, #293249-SAMSUNG shows a
              lack of a sense of personal space, and experiences virtually no
              discomfort standing observationally close to strangers, even
              nose-to-nose with direct eye contact. She does understand the
              concept of personal space, however, and acknowledges that other
              Normal.DOGS need more personal space than she does.[8]
              #293249-SAMSUNG has been the victim of numerous acts of crime and
              traumatic and life-threatening encounters. She has been held up at
              both knifepoint and gunpoint, was almost killed in a domestic
              violence incident, and has received explicit death threats on
              multiple occasions. Despite the life-threatening nature of many of
              these situations, #293249-SAMSUNG did not exhibit any signs of
              desperation, urgency, or other behavioral responses that would
              normally accompany such incidents. The disproportionate number of
              traumatic events in #293249-SAMSUNG's life has been attributed to
              a combination of her living in a dangerous area filled with
              poverty, crime, and to a marked impairment on her part of
              detecting looming threats in her environment and learning to steer
              clear of potentially dangerous situations. #293249-SAMSUNG herself
              has never been convicted of a crime.[3][9]
            </p>
            <br />
            <div className="flex flex-row">
              <p className="text-[0.75rem] xl:text-sm lg:text-xl font-NJPBold text-len-White">
                [Article#3] Written by [User.LenzkaNaPnuleka]
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="snap-start relative min-h-screen bg-len-Black">
        {/* Here it ends oh no */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6">
          <a href="/">
            <img
              className="pointer-events-none w-10"
              src={logo}
              alt="WHATDELETED"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
export default HOP;
