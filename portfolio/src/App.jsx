import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Main from "./pages/0p_main.jsx";
import Error404 from "./pages/0p_error404.jsx";
import Lab from "./pages/0p_lab.jsx";
import Drawings from "./pages/gallerypages/drawings.jsx";
import Photographs from "./pages/gallerypages/photographs.jsx";
import Stickers from "./pages/gallerypages/stickers.jsx";
import TDModels from "./pages/gallerypages/tdmodels.jsx";
import CaseHatsuneMiku829 from "./pages/observare/CaseHatsuneMiku829.jsx";

function App() {
  useEffect(() => {
    document.title = `plwtx | 0x706C777478`;
  }, []);
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Lab" element={<Lab />} />
          <Route path="/gallery/drawings" element={<Drawings />} />
          <Route path="/gallery/photographs" element={<Photographs />} />
          <Route path="/gallery/stickers" element={<Stickers />} />
          <Route path="/gallery/tdmodels" element={<TDModels />} />
          <Route path="/CaseHatsuneMiku829" element={<CaseHatsuneMiku829 />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
