import React, { useState } from "react";
import "../styles/Nav.css";
import "../styles/Diary.css";
import Diarytop from "../components/Diarytop";
import Box from "../components/Box";
import randomid from "randomid";

function Diary(props) {
  const { Link, Nav } = props;
  const [isFilter,setIsFilter]=useState(false)
  const [Boxs, setBoxs] = useState([
    {
      header: "我今天去过哪些地方奥i速度较快拉升的卡拉是快乐的哈利斯科",
      todoItems: [
        { id: randomid(), item: "图书安神颗粒的哈斯卡拉等哈看来是打开了是卡拉还是埃斯看到哈桑离开等哈开始了", isComplete: false },
        { id: randomid(), item: "图书啊实打实健康大使的卡拉是觉得拉上看看啦当时的卡拉还是拉伸和克拉生的卢卡省的卡拉还是", isComplete: true },
        { id: randomid(), item: "图", isComplete: false },
        { id: randomid(), item: "图书馆阿斯达卡上阿三大苏打实打实 ", isComplete: false },
        { id: randomid(), item: "图书", isComplete: true },
        { id: randomid(), item: "图", isComplete: false },
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
      <Diarytop setIsFilter={setIsFilter} />
      <div className={isFilter?"showDiaryFilter showDiary":"showDiary"}>
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
      <Nav Link={Link} />
    </div>
  );
}

export default Diary;
