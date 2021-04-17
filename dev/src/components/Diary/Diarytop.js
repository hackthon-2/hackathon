import React, { useState } from "react";
import "../../styles/Diary/Diarytop.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import datebtnY from "../../assets/datebtnY.svg";
import datebtnT from "../../assets/datebtnT.svg";
import chooseBtn from "../../assets/chooseBtn.svg";

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
        <img src={chooseBtn} alt="choose-btn"></img>
      </button>
    </div>
  );
}

export default Diarytop;
