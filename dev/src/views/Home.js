import React, { useState } from "react";
import Nav from "../components/Nav";
import Hometop from "../components/Home/Hometop";
import "../styles/Home.css";
import Upload from '../components/Home/Upload';

function Home(props) {
  const { Nav, Link } = props;
  const [checkStatus, setCheckStatus] = useState(true);
  return (
    <div>
      <Hometop />
      <div className="home-body">
        <div className="choose-monitor">
          <span
            className={(checkStatus ? "choose-bottom" : null) + " choose-item"}
            onClick={() => setCheckStatus(true)}
          >
            我的计划
          </span>
          <span
            className={(checkStatus ? null : "choose-bottom") + " choose-item"}
            onClick={() => setCheckStatus(false)}
          >
            我的监督
          </span>
        </div>
      </div>
      {/* <div>
        <Upload />
      </div> */}
      <div style={{ height: "10vh" }}>
        <Nav Link={Link} />
      </div>
    </div>
  );
}

export default Home;
