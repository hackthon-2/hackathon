import React from "react";
import "../../styles/Diary/Box.css";
import axios from "axios";

function Todobox({ question, todoItems, isDlt, id, setBoxs, Boxs }) {
  const handleDeleteBox = () => {
    axios({
      url: "/user/todoDeletion?todoID=" + id,
      method: "delete",
    })
      .then((res) => {
        Boxs = Boxs.filter((box) => box.id !== id);
        setBoxs(Boxs);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="Box">
      <h2 className="header">{question}</h2>
      {todoItems.map((todoitem) => {
        const { id, item, isComplete } = todoitem;
        return (
          <div className="todo-item" key={id}>
            <input type="checkbox" />
            <p className="todo-text">{item}</p>
            <span className="check-button">
              <i className={isComplete ? "CB" : ""}></i>
            </span>
          </div>
        );
      })}
      <button
        onClick={handleDeleteBox}
        className="delete-box"
        style={isDlt ? null : { display: "none" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13.044"
          height="13.044"
          viewBox="0 0 9.044 9.044"
          className="delete-box-svg"
        >
          <g
            id="组件_15_1"
            data-name="组件 15 – 1"
            transform="translate(1.061 1.061)"
          >
            <line
              id="直线_7"
              data-name="直线 7"
              x2="6.923"
              y2="6.923"
              fill="none"
              stroke="#979797"
              strokeWidth="3"
            />
            <path
              id="路径_58"
              data-name="路径 58"
              d="M6.923,0,2.163,4.76,0,6.923"
              fill="none"
              stroke="#979797"
              strokeWidth="3"
            />
          </g>
        </svg>
      </button>
    </div>
  );
}

export default Todobox;
