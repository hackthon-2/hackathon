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
  console.log(Boxs);
  return (
    <div>
      <div
        onClick={() => {
          setisAdd(false);
          setIsFilter(false);
          setIsDlt(false)
        }}
        className={isFilter ? "showDiaryFilter showDiary" : "showDiary"}
      >
        {Boxs.map((box) => {
          if (box.text === undefined) {
            return (
              <Todobox
                question={box.question}
                key={box.todoItems[0].id}
                todoItems={box.todoItems}
                isDlt={isDlt}
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
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default Diarybody;
