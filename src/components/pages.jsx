import { Route, Routes } from "react-router-dom";
import Blue from "./blue";
import Red from "./red";
import Home from "./home";
import Green from "./green";
import Yellow from "./yellow";

export default function Pages() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/green" element={<Green />} />
        <Route path="/yellow" element={<Yellow />} />
      </Routes>
    </>
  );
}
