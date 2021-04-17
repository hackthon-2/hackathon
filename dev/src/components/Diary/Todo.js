import React from "react";

function Todo({ id, item, isComplete, handleDelete, handleCheck }) {
  return (
    <div className="todo-list">
      <div className="todo-item">
        <input type="checkbox" />
        <p className={"todo-text " + (isComplete ? "done" : "")}>{item}</p>
        <span className="check-button" onClick={() => handleCheck(id)}>
          <i className={`${isComplete === true ? "CB" : ""}`}></i>
        </span>
        <button className="delete" onClick={() => handleDelete(id)}>
          <i className="dlt"></i>
        </button>
      </div>
    </div>
  );
}

export default Todo;
