import React from "react";
import "../styles/Box.css";

function Textbox({ Question, Text }) {
  return (
    <div className="Box">
      <h2 className="header">{Question}</h2>
      <div className="text-body">
        <p className="show-text">{Text}</p>
      </div>
      {/* {todoItems.map((todoitem) => {
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
      })} */}
    </div>
  );
}

export default Textbox;
