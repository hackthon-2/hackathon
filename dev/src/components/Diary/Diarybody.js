import React from "react";
import Textbox from "./Textbox";
import Todobox from "./Todobox";

function Diarybody({
  setisAdd,
  setIsFilter,
  setIsDlt,
  Boxs,
  isDlt,
  isFilter,
  setBoxs,
}) {
  return (
    <div>
      <div
        onClick={() => {
          setisAdd(false);
          setIsFilter(false);
          setIsDlt(false);
        }}
        className={isFilter ? "showDiaryFilter showDiary" : "showDiary"}
      >
        {Boxs.map((box) => {
          if (box.text === undefined) {
            return (
              <Todobox
                question={box.header}
                key={box.id}
                todoItems={box.todoItems}
                isDlt={isDlt}
                id={box.id}
                setBoxs={setBoxs}
                Boxs={Boxs}
                className="animate__animated animate__fadeInDown"
              />
            );
          } else {
            return (
              <Textbox
                key={box.id}
                id={box.id}
                text={box.text}
                question={box.question}
                setBoxs={setBoxs}
                isDlt={isDlt}
                Boxs={Boxs}
                className="animate__animated animate__fadeInDown"
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default Diarybody;
