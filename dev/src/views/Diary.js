import React, { useEffect, useState } from "react";
import "../styles/Nav.css";
import "../styles/Diary/Diary.css";
import Diarytop from "../components/Diary/Diarytop";
import randomid from "randomid";
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
  // 每个盒子
  const [container, setContainer] = useState({});
  // 所有盒子
  const [Boxs, setBoxs] = useState([
    // {
    //   question: "我今天去过哪些地方奥i速度较快拉升的卡拉是快乐的哈利斯科",
    //   todoItems: [
    //     {
    //       id: randomid(),
    //       item:
    //         "图书安神颗粒的哈斯卡拉等哈看来是打开了是卡拉还是埃斯看到哈桑离开等哈开始了",
    //       isComplete: false,
    //     },
    //     {
    //       id: randomid(),
    //       item:
    //         "图书啊实打实健康大使的卡拉是觉得拉上看看啦当时的卡拉还是拉伸和克拉生的卢卡省的卡拉还是",
    //       isComplete: true,
    //     },
    //     { id: randomid(), item: "图", isComplete: false },
    //     {
    //       id: randomid(),
    //       item: "图书馆阿斯达卡上阿三大苏打实打实 ",
    //       isComplete: false,
    //     },
    //     { id: randomid(), item: "图书", isComplete: true },
    //     { id: randomid(), item: "图", isComplete: false },
    //   ],
    // },
    // {
    //   question: "我今天玩过哪些地方",
    //   todoItems: [{ id: randomid(), item: "慧源楼", isComplete: false }],
    // },
    // {
    //   question: "我今天玩过哪些地方",
    //   text:
    //     "            asd asd as撒旦阿萨的阿萨的阿萨的阿萨的阿萨的埃斯打算打算打算     啊实打实打算的撒打算打算打算啊实打实的阿萨的阿三大苏打实打实的埃斯阿萨的 啊实打实的埃斯埃斯大埃斯asklldjasdasdjasghdjkashdlask啊就是快点哈就看啥克里斯蒂拉卡市后打开拉萨回来打卡是海拉克斯的话拉卡市的离开按时艰苦的环境阿喀琉斯的拉卡市的拉卡市和卡拉是刻录大师离开安徽省考虑哈康老师奎拉山口拉伸的卡拉省的看安神颗粒",
    // },
  ]);
  useEffect(() => {
    axios({
      url: "/user/diaryList",
      method: "get",
    })
      .then((res) => {
        // res.data.data.forEach((box) => console.log(box));
        console.log(res.data.data[1]);
        setBoxs(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(Boxs);
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
          container={container}
          setContainer={setContainer}
          setBoxs={setBoxs}
          Boxs={Boxs}
        />
      ) : null}
      <Diarybody
        setisAdd={setisAdd}
        setIsFilter={setIsFilter}
        setIsDlt={setIsDlt}
        Boxs={Boxs}
        isDlt={isDlt}
        isFilter={isFilter}
        setBoxs={setBoxs}
      />

      <div style={{ height: "10vh" }}>
        <Nav Link={Link} />
      </div>
    </div>
  );
}

export default Diary;
