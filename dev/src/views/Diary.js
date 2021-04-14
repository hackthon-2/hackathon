import React, { useState } from "react";
import "../styles/Nav.css";
import "../styles/Diary.css";
import Diarytop from "../components/Diarytop";
import Box from "../components/Box";
import randomid from "randomid";

function Diary(props) {
  const { Link, Nav } = props;
  const [Boxs, setBoxs] = useState([
    {
      header: "我今天去过哪些地方",
      todoItems: [
        { id: randomid(), item: "图书馆", isComplete: false },
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
      <Diarytop />
      <div className="showDiary">
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
