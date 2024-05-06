import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Projects from "../components/Projects";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path={`/product/view/details/:_id`} element={<ProductDetails />}></Route> */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

// export { AppRoutes };
