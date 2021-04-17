import React, { useEffect, useState } from "react";
import "../styles/Statistics.css";
import Stacard from "../components/Statistics/Stacard";
import axios from "axios";

const barColor = ["#B8F1FF", "#FFD5A4", "#FFC2B8", "#C4FFB8"];

function Statistics(props) {
  const { Link, Nav } = props;
  //选择时间查看次数
  const [selectStatus, setSelectStatus] = useState("一周内");
  //每个卡片的数据
  const [staCards, setStaCards] = useState([]);
  useEffect(() => {
    axios({
      url: "/user/statistics",
      method: "get",
    }).then((res) => {
      setStaCards(res.data.data);
    });
  });
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        padding: "20px 0 0 0",
        backgroundColor: "#FAF9F9",
      }}
    >
      <div className="statistics-box">
        <div className="statistics-top">
          <h2>统计</h2>
        </div>
        <div className="statistics-body">
          {staCards.map((staCard, index) => {
            return (
              <Stacard
                key={staCard.todoItems[0].id}
                selectStatus={selectStatus}
                setSelectStatus={setSelectStatus}
                staCard={staCard}
                barColor={barColor}
              />
            );
          })}
        </div>
      </div>
      <div style={{ height: "10vh" }}>
        <Nav Link={Link} />
      </div>
    </div>
  );
}

export default Statistics;
