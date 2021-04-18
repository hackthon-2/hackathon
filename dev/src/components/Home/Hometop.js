import { Avatar } from "@geist-ui/react";
import React from "react";
import home from "../../assets/home.svg";
import head from '../../assets/head.svg';

function Hometop() {
  return (
    <div className="home-top">
      <img src={home} alt="home" className="home-svg" onClick={()=>alert("代开发")}></img>
      <img src={head} alt="head" className="home-head"></img>
      <span className="home-name">
      <p>激情王老吉</p>
      </span>
    </div>
  );
}

export default Hometop;
