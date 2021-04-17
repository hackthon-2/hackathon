import React, { useState } from "react";
import "../../styles/Diary/Diarytop.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import datebtnY from "../../assets/datebtnY.svg";
import datebtnT from "../../assets/datebtnT.svg";

let weekdayArr = ["日", "一", "二", "三", "四", "五", "六"];
function Diarytop({ setIsFilter, isAdd, setisAdd, isCard }) {
  let [startDate, setStartDate] = useState(new Date());
  let weekday = startDate.getDay();
  let month = startDate.getMonth() + 1;
  let year = startDate.getFullYear();
  let day = startDate.getDate();
  let weekDay = "星期" + weekdayArr[weekday];
  const handleDate = (date) => {
    setIsFilter(false);
    setStartDate(date);
  };
  const lastDay = () => {
    startDate = new Date(startDate.setDate(startDate.getDate() - 1));
    setStartDate(startDate);
  };
  const nextDay = () => {
    startDate = new Date(startDate.setDate(startDate.getDate() + 1));
    setStartDate(startDate);
  };
  const hanldeBoxs = () => {
    setIsFilter(true);
    setisAdd(true);
  };
  return (
    <div className="diary-top">
      <div className="date-container">
        <button className="datebtn" style={{ left: "10px" }} onClick={lastDay}>
          <img src={datebtnY} alt="上一天"></img>
        </button>
        <div className="show-date">
          <p className="show-day">
            <i className="showday" style={{ fontStyle: "normal" }}>
              {day}
            </i>
          </p>
          <p className="show-weekday">
            {weekDay}
            <br />
            <i className="show-month">{month + "月" + year}</i>
          </p>
        </div>
        <button className="datebtn" style={{ left: "136px" }} onClick={nextDay}>
          <img src={datebtnT} alt="下一天"></img>
        </button>
      </div>
      <DatePicker
        selected={startDate}
        onCalendarOpen={() => setIsFilter(true)}
        onCalendarClose={() => setIsFilter(false)}
        onSelect={handleDate}
      />
      <button className="choose-btn" onClick={hanldeBoxs}>
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
            fill={isAdd ? "#FF8839" : "#B9B9B9"}
          />
        </svg>
      </button>
    </div>
  );
}

export default Diarytop;
