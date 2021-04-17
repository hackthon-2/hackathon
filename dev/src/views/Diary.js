import React, { useEffect, useState } from "react";
import "../styles/Nav.css";
import "../styles/Diary/Diary.css";
import Diarytop from "../components/Diary/Diarytop";
import Addcard from "../components/Diary/Addcard";
import axios from "axios";
import Diarybody from "../components/Diary/Diarybody";

function Diary(props) {
  const { Link, Nav } = props;
  //判断box区域是否需要模糊
  const [isFilter, setIsFilter] = useState(false);
  //用来增加或删除格子（小卡片） 判断出现的时机
  const [isAdd, setisAdd] = useState(false);
  // 判断是否要出现删除box按钮
  const [isDlt, setIsDlt] = useState(false);
  //用来确认卡片类型
  const [typeStatus, setTypeStatus] = useState("待办");
  //用来判断卡片出现时机
  const [isCard, setIsCard] = useState(false);
  //卡片标题
  const [question, setQuestion] = useState("");
  //卡片日记文本
  const [text, setText] = useState("");
  //卡片待办输入框的输入内容
  const [value, setValue] = useState("");
  //待办的todoItem
  const [todoItems, setTodoItems] = useState([]);
  // 所有盒子
  const [Boxs, setBoxs] = useState([]);
  let BOXS = [];
  useEffect(() => {
    axios({
      url: "/user/todoList",
      method: "get",
    })
      .then((res) => {
        BOXS = BOXS.concat(res.data.data);
      })
      .then(() => {
        axios({
          url: "/user/diaryList",
          method: "get",
        }).then((res) => {
          setBoxs(BOXS.concat(res.data.data));
          console.log(BOXS.concat(res.data.data));
        });
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="diaryBox">
      <div>
        <Diarytop
          setIsFilter={setIsFilter}
          setisAdd={setisAdd}
          isAdd={isAdd}
          isCard={isCard}
        />
      </div>
      {/* 右上角卡片 */}
      {isAdd && isFilter ? (
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
            <p
              className="addText"
              onClick={() => {
                setIsCard(true);
                setisAdd(false);
              }}
            >
              增加格子
            </p>
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
            <p
              className="dltText"
              onClick={() => {
                setIsDlt(true);
                setisAdd(false);
                setIsFilter(false);
              }}
            >
              删除格子
            </p>
          </div>
        </div>
      ) : null}
      {/* 中间卡片 */}
      {isCard ? (
        <Addcard
          typeStatus={typeStatus}
          setTypeStatus={setTypeStatus}
          value={value}
          setValue={setValue}
          todoItems={todoItems}
          setTodoItems={setTodoItems}
          setIsFilter={setIsFilter}
          setIsCard={setIsCard}
          question={question}
          setQuestion={setQuestion}
          text={text}
          setText={setText}
          setBoxs={setBoxs}
          Boxs={Boxs}
        />
      ) : null}
      {/* 日记展示区 */}
      <Diarybody
        setisAdd={setisAdd}
        setIsFilter={setIsFilter}
        setIsDlt={setIsDlt}
        Boxs={Boxs}
        isDlt={isDlt}
        isFilter={isFilter}
        setBoxs={setBoxs}
      />
      {/* 底部导航栏 */}
      <div style={{ height: "10vh" }}>
        <Nav Link={Link} />
      </div>
    </div>
  );
}

export default Diary;
