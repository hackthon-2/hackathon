import React from "react";
import styled from "styled-components";

export default function Showdata({ times = 7, item, barCard }) {
  const Bar = styled.div`
    width: ${20 * times + "px"};
    height: 20px;
    position: absolute;
    left: 53px;
    background-color: ${barCard};
    border-radius: 0 4px 4px 0;
  `;
  const ItemName = styled.p`
    color: #949494;
    position: absolute;
    font-size: 14px;
    text-align: right;
    width: 42px;
    height: 18px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  `;
  const Times = styled.p`
    color: #949494;
    position: absolute;
    right: 0;
    transform: translateY(1px);
    font-size: 14px;
    text-align: right;
    width: 42px;
    height: 18px;
  `;
  return (
    <div className="bar-chart">
      <ItemName>{item}</ItemName>
      <Bar></Bar>
      <Times>{times}次</Times>
    </div>
  );
}
