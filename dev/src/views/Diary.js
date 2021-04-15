import React, { useState } from "react";
import "../styles/Nav.css";
import "../styles/Diary.css";
import Diarytop from "../components/Diarytop";
import Box from "../components/Box";
import randomid from "randomid";

function Diary(props) {
  const { Link, Nav } = props;
  const [isFilter, setIsFilter] = useState(false);
  const [isAdd, setisAdd] = useState(false);
  const [Boxs, setBoxs] = useState([
    {
      header: "我今天去过哪些地方奥i速度较快拉升的卡拉是快乐的哈利斯科",
      todoItems: [
        {
          id: randomid(),
          item:
            "图书安神颗粒的哈斯卡拉等哈看来是打开了是卡拉还是埃斯看到哈桑离开等哈开始了",
          isComplete: false,
        },
        {
          id: randomid(),
          item:
            "图书啊实打实健康大使的卡拉是觉得拉上看看啦当时的卡拉还是拉伸和克拉生的卢卡省的卡拉还是",
          isComplete: true,
        },
        { id: randomid(), item: "图", isComplete: false },
        {
          id: randomid(),
          item: "图书馆阿斯达卡上阿三大苏打实打实 ",
          isComplete: false,
        },
        { id: randomid(), item: "图书", isComplete: true },
        { id: randomid(), item: "图", isComplete: false },
        ``,
      ],
    },
    {
      header: "我今天玩过哪些地方",
      todoItems: [{ id: randomid(), item: "慧源楼", isComplete: false }],
    },
    {
      header: "我今天吃过哪些地方",
      todoItems: [{ id: randomid(), item: "三食堂", isComplete: false }],
    },
    {
      header: "我今天吃过哪些地方",
      todoItems: [{ id: randomid(), item: "三食堂", isComplete: false }],
    },
    {
      header: "我今天吃过哪些地方",
      todoItems: [{ id: randomid(), item: "三食堂", isComplete: false }],
    },
    {
      header: "我今天吃过哪些地方",
      todoItems: [{ id: randomid(), item: "三食堂", isComplete: false }],
    },
    {
      header: "我今天吃过哪些地方",
      todoItems: [{ id: randomid(), item: "三食堂", isComplete: false }],
    },
    {
      header: "我今天吃过哪些地方",
      todoItems: [{ id: randomid(), item: "三食堂", isComplete: false }],
    },
    {
      header: "我今天吃过哪些地方",
      todoItems: [{ id: randomid(), item: "三食堂", isComplete: false }],
    },
  ]);

  return (
    <div className="diaryBox">
      <div>
        <Diarytop setIsFilter={setIsFilter} setisAdd={setisAdd} isAdd={isAdd} />
      </div>
      <div>
        {isAdd ? (
          <div className="addOrdlt">
            <div className="addBox">
              <i className="addicon">
                <svg
                  t="1618472843294"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2184"
                  width="21"
                  height="15"
                >
                  <path
                    d="M68.266667 460.8m51.2 0l785.066666 0q51.2 0 51.2 51.2l0 0q0 51.2-51.2 51.2l-785.066666 0q-51.2 0-51.2-51.2l0 0q0-51.2 51.2-51.2Z"
                    fill="#999999"
                    p-id="2185"
                  ></path>
                  <path
                    d="M460.8 955.733333m0-51.2l0-785.066666q0-51.2 51.2-51.2l0 0q51.2 0 51.2 51.2l0 785.066666q0 51.2-51.2 51.2l0 0q-51.2 0-51.2-51.2Z"
                    fill="#999999"
                    p-id="2186"
                  ></path>
                </svg>
              </i>
              <p className="addText">增加格子</p>
            </div>
            <div className="dltBox">
              <i className="addicon">
                <svg
                  t="1618473801180"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2941"
                  width="21"
                  height="15"
                >
                  <path
                    d="M903.053 570.75H121.046c-32.391 0-58.649-26.256-58.649-58.647s26.256-58.661 58.649-58.661h782.009c32.406 0 58.649 26.27 58.649 58.661-0.001 32.393-26.245 58.647-58.649 58.647z"
                    p-id="2942"
                    fill="#bfbfbf"
                  ></path>
                </svg>
              </i>
              <p className="dltText">删除格子</p>
            </div>
          </div>
        ) : null}
      </div>
      <div>
        <div
          onClick={() => {
            setisAdd(false);
            setIsFilter(false);
          }}
          className={isFilter ? "showDiaryFilter showDiary" : "showDiary"}
        >
          {Boxs.map((box) => {
            return (
              <Box
                header={box.header}
                key={box.todoItems[0].id}
                todoItems={box.todoItems}
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

export default Diary;
