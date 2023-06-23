import "../App.css";
import Home from "../components/01_home.jsx";
import Gallery from "../components/02_gallery.jsx";
import Map from "../components/03_map.jsx";
import EndLetter from "../components/04_endLetter.jsx";

function Main() {
  return (
    <section className="snap-y snap-mandatory scroll-smooth h-screen overflow-scroll overflow-x-hidden">
      <Home />
      <Gallery />
      <Map />
      <EndLetter />
    </section>
  );
}

export default Main;
