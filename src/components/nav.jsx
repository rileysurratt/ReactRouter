import { Link } from "react-router-dom";
import styled from "styled-components";


export default function NavBar() {

const linkHomeStyle = {
    color: '#B795BE'
  };
  const linkBlueStyle = {

    color: '#275db3'
  };
  const linkRedStyle = {

    color: '#b05f6d'
  };
  const linkGreenStyle = {
    color: '#a3b899'
  };
  const linkYellowStyle = {
    color: '#ffe39f'
  };
  return (
    <>
      <div id="navbar">
        <Link to="/home" style={linkHomeStyle}>Home</Link>
        <Link to="/blue" style={linkBlueStyle}>Blue</Link>
        <Link to="/red" style={linkRedStyle}>Red</Link>
        <Link to="/green" style={linkGreenStyle}>Green</Link>
        <Link to="/yellow" style={linkYellowStyle}>Yellow</Link>
      </div>
    </>
  );
}
