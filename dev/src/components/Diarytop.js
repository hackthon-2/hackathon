import React from "react";
import "../styles/Diarytop.css";
function Diarytop() {
  let date = new Date();
  let weekday = date.getDay();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let day = date.getDate();
  if (weekday === 1) {
    weekday = "星期一";
  } else if (weekday === 2) {
    weekday = "星期二";
  } else if (weekday === 3) {
    weekday = "星期三";
  } else if (weekday === 4) {
    weekday = "星期四";
  } else if (weekday === 5) {
    weekday = "星期五";
  } else if (weekday === 6) {
    weekday = "星期六";
  } else {
    weekday = "星期日";
  }
  console.log(day, month, year, weekday);
  return (
    <div className="diary-top">
      <div className="show-date">
        <p className="show-day">
          <i className="showday">{day - 10}</i>
        </p>
        <p className="show-weekday">
          {weekday}
          <br />
          <i className="show-month">{month + "月" + year}</i>
        </p>
      </div>
      <button className="choose-btn">
        <i>
          <svg
            id="组件_6_1"
            data-name="组件 6 – 1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              id="choose"
              data-name="路径 41"
              d="M467.27,364.783a12,12,0,1,1,12-12A12,12,0,0,1,467.27,364.783Zm0-1.714a10.286,10.286,0,0,0,.006-20.571h-.006a10.286,10.286,0,1,0,0,20.571Zm-5.254-11.086a.994.994,0,0,1,1.045.942c0,.023,0,.047,0,.07a.994.994,0,0,1-.292.738,1.093,1.093,0,0,1-.754.291.984.984,0,0,1-.72-.291,1,1,0,0,1-.309-.738.933.933,0,0,1,.309-.72A.919.919,0,0,1,462.016,351.982Zm5.726,0a1.018,1.018,0,0,1,.754.292.982.982,0,0,1,.292.72.994.994,0,0,1-.292.738,1.093,1.093,0,0,1-.754.291,1.051,1.051,0,0,1-.737-.291.983.983,0,0,1-.292-.738.919.919,0,0,1,.292-.72A.979.979,0,0,1,467.742,351.982Zm5.709,0a.979.979,0,0,1,.737.292.933.933,0,0,1,.309.72.945.945,0,0,1-.309.738,1.078,1.078,0,0,1-1.474,0,.983.983,0,0,1-.292-.738.919.919,0,0,1,.292-.72A.979.979,0,0,1,473.45,351.982Z"
              transform="translate(-455.27 -340.783)"
              fill="rgb(188, 188, 188)"
            />
          </svg>
        </i>
      </button>
    </div>
  );
}

export default Diarytop;
