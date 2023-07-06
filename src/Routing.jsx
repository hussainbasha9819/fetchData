import { BrowserRouter, Routes, Route } from "react-router-dom";
import Heading from "./Componenets/Heading/Head";
import Main1 from "./Componenets/Main1/Main1";
import Main2 from "./Componenets/Main2/Main2";
import Main3 from "./Componenets/Main3/Main3";
import Main4 from "./Componenets/Main4/Main4";
import Footer from "./Componenets/Footer/Footer";
import Home from "./Componenets/Home/Home";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Heading />
        <Routes>
          <Route path="/" element={<Main1 />} />
          <Route path="/about" element={<Main2 />} />
          <Route path="/services" element={<Main3 />} />
          <Route path="/pricing" element={<Main4 />} />
          <Route path="/contact" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default Routing;
