import React from "react";
import Showdata from "./Showdata";

function Stacard({ setSelectStatus, selectStatus, staCard, barColor }) {
  const { header, todoItems } = staCard;
  return (
    <div className="statistics-card">
      <div className="statistics-card-header">
        <h2 className="statistics-card-question">{header}</h2>
        <select
          className="statistics-choose-date"
          onChange={(event) => setSelectStatus(event.target.value)}
        >
          <option value="一周内" hidden={selectStatus === "一周内"}>
            一周内
          </option>
          <option value="二周内" hidden={selectStatus === "二周内"}>
            二周内
          </option>
          <option value="一月内" hidden={selectStatus === "一月内"}>
            一月内
          </option>
        </select>
      </div>
      <div className="statistics-show-data" id="container">
        {todoItems.map((todoItem,index ) => {
          const { times, item, id } = todoItem;
          return (
            <Showdata barCard={barColor[index]} key={id} times={times} item={item} />
          );
        })}
      </div>
    </div>
  );
}

export default Stacard;
