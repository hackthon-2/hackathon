import React, { useEffect, useState } from "react";
import "../styles/Statistics.css";
import randomId from "randomid";
import Stacard from "../components/Statistics/Stacard";
import axios from "axios";

const barColor = ["#B8F1FF"];

function Statistics(props) {
  const { Link, Nav } = props;
  //选择时间查看次数
  const [selectStatus, setSelectStatus] = useState("一周内");
  //每个卡片的数据
  const [staCards, setStaCards] = useState([
    {
      header: "我今天去过哪些地方",
      todoItems: [
        {
          item: "图书馆",
          times: 2,
          id: randomId(),
        },
        {
          item: "汇源楼",
          times: 7,
          id: randomId(),
        },
        {
          item: "商业街",
          times: 4,
          id: randomId(),
        },
        {
          item: "三食堂",
          times: 3,
          id: randomId(),
        },
      ],
    },
    {
      header: "我今天喝了几杯水",
      todoItems: [
        {
          item: "三杯",
          times: 3,
          id: randomId(),
        },
        {
          item: "四杯阿萨的埃斯",
          times: 7,
          id: randomId(),
        },
        {
          item: "没有喝",
          times: 7,
          id: randomId(),
        },
      ],
    },
    {
      header: "今天看的英语文章",
      todoItems: [
        {
          item: "一篇",
          times: 3,
          id: randomId(),
        },
        {
          item: "两篇",
          times: 3,
          id: randomId(),
        },
        {
          item: "三篇",
          times: 7,
          id: randomId(),
        },
        {
          item: "没去看啊",
          times: 4,
          id: randomId(),
        },
      ],
    },
  ]);
  useEffect(() => {
    axios({
      url: "/user/statistics",
      method: "get",
    }).then((res) => {
      console.log(res);
    });
  });
  return (
    <>
      <div className="statistics-box">
        <div className="statistics-top">
          <h2>统计</h2>
        </div>
        <div className="statistics-body">
          {staCards.map((staCard) => {
            return (
              <Stacard
                key={staCard.todoItems[0].id}
                selectStatus={selectStatus}
                setSelectStatus={setSelectStatus}
                staCard={staCard}
              />
            );
          })}
        </div>
      </div>
      <div style={{ height: "10vh" }}>
        <Nav Link={Link} />
      </div>
    </>
  );
}

export default Statistics;
