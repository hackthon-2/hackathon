import React from "react";
import axios from "axios";
import randomid from "randomid";
import Todo from "./Todo";
import dayjs from "dayjs";
import "../../styles/Diary/Card.css";

function Editorcard({ data }) {
  const handleInputTodo = (e) => {
    value = e.target.value;
    setValue(value);
  };
  const handleInputQuestion = (e) => {
    question = e.target.value;
    setQuestion(question);
  };
  const handleInputText = (e) => {
    text = e.target.value;
    setText(text);
  };
  const handleKeyUp = (e) => {
    if (e.keyCode !== 13 || value === "") return;

    todoItems = [
      ...todoItems,
      { isComplete: false, item: value, id: randomid() },
    ];
    setTodoItems(todoItems);
    setValue("");
  };
  const handleBTN = () => {
    if (value === "") {
      return;
    } else {
      todoItems = [
        ...todoItems,
        { isComplete: false, item: value, id: randomid() },
      ];
      setTodoItems(todoItems);
      setValue("");
    }
  };
  const handleDelete = (id) => {
    const Ntodos = todoItems.filter((todo) => todo.id !== id);
    setTodoItems(Ntodos);
  };
  const handleCheck = (id) => {
    setTodoItems(
      todoItems.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isComplete: !todo.isComplete,
          };
        }
        return todo;
      })
    );
  };
  const handleCancel = () => {
    setIsFilter(false);
    setIsCard(false);
  };
  const handleSave = () => {
    let todayDate = dayjs().format("YYYY-MM-DD");
    if (typeStatus === "待办") {
      let dataTodo = {
        header: question,
        todoItems,
        time: todayDate,
      };
      axios({
        url: "/user/todoCreation",
        method: "post",
        data: JSON.stringify(dataTodo),
        headers: { "Content-Type": "application/json" },
      }).then((res) => {
        axios({
          url: "/user/todoList",
          method: "get",
        })
          .then((res) => {
            Boxs.push(res.data.data);
            setBoxs(Boxs);
          })
          .catch((err) => console.log(err));
      });
    } else {
      let urlencoded = new URLSearchParams();
      urlencoded.append("question", question);
      urlencoded.append("text", text);
      urlencoded.append("time", todayDate);
      axios({
        url: "/user/diaryCreation",
        method: "post",
        data: urlencoded,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }).then((res) => {
        axios({
          url: "/user/diaryList",
          method: "get",
        }).then((res) => {
          Boxs.push(res.data.data);
          // res.data.data.forEach((box) => console.log(box));
          setBoxs(Boxs);
        });
      });
      // Boxs.push(box);
      // setBoxs(Boxs);
    }
    setQuestion("");
    setText("");
    handleCancel();
  };
  if (typeStatus !== "记录")
    return (
      <div className="diary-card">
        <div className="card-header">
          <div
            style={{
              borderBottom: "2px solid rgb(255, 197, 96)",
              position: "relative",
              height: "35px",
            }}
          >
            <input
              type="text"
              className="input-header"
              placeholder="写下一个问题..."
              value={question}
              onChange={handleInputQuestion}
            />
            <button className="type-btn" onClick={() => setTypeStatus("记录")}>
              {typeStatus}
            </button>
          </div>
        </div>
        <div className="card-body">
          <div className="todo-items">
            {todoItems.map((todoItem) => {
              return (
                <Todo
                  {...todoItem}
                  key={todoItem.id}
                  handleCheck={handleCheck}
                  handleDelete={handleDelete}
                />
              );
            })}
          </div>
          <div className="add-todo">
            <input
              type="text"
              placeholder="写点什么要做的吧..."
              value={value}
              className="add-todo-body"
              onChange={handleInputTodo}
              onKeyUp={handleKeyUp}
            />
            <button className="add-btn" onClick={handleBTN}>
              <i>
                <svg
                  t="1618508100399"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="6740"
                  width="30"
                  height="30"
                >
                  <path
d="M503.466667 628.352l130.773333-130.773333a39.936 39.936 0 0 1 56.533333 56.490666l-157.994666 158.037334a39.978667 39.978667 0 0 1-49.322667 5.674666 39.893333 39.893333 0 0 1-11.52-8.021333l-102.357333-102.357333a39.936 39.936 0 0 1 56.490666-56.490667l77.44 77.44zM768 213.333333h85.76C900.608 213.333333 938.666667 251.306667 938.666667 298.666667v554.666666a85.333333 85.333333 0 0 1-84.906667 85.333334H170.24C123.392 938.666667 85.333333 900.693333 85.333333 853.333333V298.666667a85.333333 85.333333 0 0 1 84.906667-85.333334H256V170.24C256 146.986667 274.944 128 298.666667 128a42.666667 42.666667 0 0 1 42.666666 42.24V213.333333h341.333334V170.24c0-23.296 18.944-42.24 42.666666-42.24a42.666667 42.666667 0 0 1 42.666667 42.24V213.333333z m0 85.333334v43.093333c0 23.296-18.944 42.24-42.666667 42.24a42.666667 42.666667 0 0 1-42.666666-42.24V298.666667H341.333333v43.093333C341.333333 365.013333 322.389333 384 298.666667 384a42.666667 42.666667 0 0 1-42.666667-42.24V298.666667h-17.066667A68.266667 68.266667 0 0 0 170.666667 366.933333v418.133334A68.266667 68.266667 0 0 0 238.933333 853.333333h546.133334a68.266667 68.266667 0 0 0 68.266666-68.266666V366.933333A68.266667 68.266667 0 0 0 785.066667 298.666667H768z"
                    p-id="6741"
                    fill="#f4ea2a"
                  ></path>
                </svg>
              </i>
            </button>
          </div>
        </div>
        <div className="card-footer">
          <button className="cancel-footer" onClick={handleCancel}>
            取消
          </button>
          <button className="save-footer" onClick={handleSave}>
            完成
          </button>
        </div>
      </div>
    );

  return (
    <div className="diary-card">
      <div className="card-header">
        <div
          style={{
            borderBottom: "2px solid rgb(255, 197, 96)",
            position: "relative",
            height: "35px",
          }}
        >
          <input
            type="text"
            className="input-header"
            placeholder="写下一个问题..."
            value={question}
            onChange={handleInputQuestion}
          />
          <button className="type-btn" onClick={() => setTypeStatus("待办")}>
            {typeStatus}
          </button>
        </div>
      </div>
      <div className="card-body">
        <textarea
          className="input-body"
          value={text}
          onChange={handleInputText}
        ></textarea>
      </div>
      <div className="card-footer">
        <button className="cancel-footer" onClick={handleCancel}>
          取消
        </button>
        <button className="save-footer" onClick={handleSave}>
          完成
        </button>
      </div>
    </div>
  );
}

export default Editorcard;
