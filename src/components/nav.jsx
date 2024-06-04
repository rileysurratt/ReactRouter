import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div id="navbar">
        <Link to="/home">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/green">Green</Link>
        <Link to="/yellow">Yellow</Link>
      </div>
    </>
  );
}
