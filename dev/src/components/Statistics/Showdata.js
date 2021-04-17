import React from "react";
import styled from "styled-components";
// import { BarChart, Bar } from "recharts";

// const data = [
//   {
//     name: "Page A",
//     uv: 8000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
// ];

export default function Showdata({ times = 7, color = "#8884d8", item }) {
  const Bar = styled.div`
    width: ${20 * times + "px"};
    height: 20px;
    position: absolute;
    left: 53px;
    background-color: ${color};
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
