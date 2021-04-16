import React from "react";
import "../styles/Box.css";

function Box({ header, todoItems }) {
  // const { id, item, isComplete } = todoitem;
  // console.log(cb);

  return (
    <div className="Box">
      <h2 className="header">{header}</h2>
      {todoItems.map((todoitem) => {
        const { id, item, isComplete } = todoitem;
        return (
          <div className="todo-item" key={id}>
            <input type="checkbox" />
            <p className="todo-text">{item}</p>
            <span className="check-button">
              <i className={isComplete?"CB":""}></i>
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Box;
