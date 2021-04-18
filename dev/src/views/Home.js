import React from "react";
import Nav from "../components/Nav";
import Hometop from "../components/Home/Hometop";
import "../styles/Home.css";

function Home(props) {
  const { Nav, Link } = props;
  return (
    <div>
      <Hometop />
      <div className="home-body">
        <div className="choose-monitor">
          <span className="choose-item">我的计划</span>
          <span className="choose-item">我的监督</span> 
        </div>
      </div>
      <div style={{ height: "10vh" }}>
        <Nav Link={Link} />
      </div>
    </div>
  );
}

export default Home;
