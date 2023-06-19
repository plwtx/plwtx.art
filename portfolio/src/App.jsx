import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Main from "./pages/0p_main.jsx";
import Error404 from "./pages/0p_error404.jsx";

function App() {
  useEffect(() => {
    document.title = `plwtx | 0x706C777478`;
  }, []);
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
