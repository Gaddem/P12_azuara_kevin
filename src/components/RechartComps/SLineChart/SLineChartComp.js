import React, { useState } from "react";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";
import "./SLineChartStyle.css";

const data = [
  { day: "L", trainingTime: 30 },
  { day: "M", trainingTime: 45 },
  { day: "M", trainingTime: 60 },
  { day: "J", trainingTime: 20 },
  { day: "V", trainingTime: 50 },
  { day: "S", trainingTime: 40 },
  { day: "D", trainingTime: 55 },
];

const SLineChartComp = () => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="lineChartCustomTooltip">
          <p className="lineChartCustomTooltipTxt">{`${payload[0].value} min`}</p>
        </div>
      );
    }

    return null;
  };
  const [indexAnim, setIndexAnim] = useState(null);
  function adaptativeWidth() {
    let newWidth = 0;
    switch (indexAnim) {
      case 0:
        newWidth = `100%`;
        break;
      case 1:
        newWidth = `83%`;
        break;
      case 2:
        newWidth = `66.5%`;
        break;
      case 3:
        newWidth = `50%`;
        break;
      case 4:
        newWidth = `33%`;
        break;
      case 5:
        newWidth = `16.5%`;
        break;
      default:
        newWidth = 0;
        break;
    }
    return newWidth;
  }

  return (
    <div
      className="childRechartRow"
      id="parentContainerLineChart"
      style={{
        background: "#FF0000",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <p className="titleLineChart">Durée moyenne des sessions</p>
      <div
        className="overChart"
        style={{
          width: adaptativeWidth(),
          height: "100%",
          position: "absolute",
          zIndex: 0,
          backgroundColor: "black",
          right: 0,
          opacity: 0.2,
        }}
      ></div>
      <ResponsiveContainer height="90%" width="100%">
        <LineChart
          onMouseMove={(e) => {
            setIndexAnim(e.activeTooltipIndex);
          }}
          type="monotoneX"
          data={data}
          cursor="default"
          margin={{
            top: 70,
          }}
        >
          <Tooltip
            cursor={false}
            content={<CustomTooltip />}
            dataKey={"trainingTime"}
          />

          <Line
            type="monotoneX"
            dataKey="trainingTime"
            stroke="#FFFFFF"
            strokeOpacity={"50%"}
            strokeWidth={3}
            dot={{ r: 0, strokeWidth: 0 }}
            activeDot={{ r: 4, strokeWidth: 7, strokeOpacity: "50%" }}
          ></Line>
        </LineChart>
      </ResponsiveContainer>
      <div className="dayContainerAxis">
        {data.map((item,i) => {
          return (
            <p
              key={i}
              style={{
                width: "14.2%",
                textAlign: "center",
                color: "#FFFFFF",
                opacity: 0.5,
              }}
            >
              {item.day}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default SLineChartComp;
