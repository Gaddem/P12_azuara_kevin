import React from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
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
  // const CustomizedTitle = ({ width, height, text }) => (

  //   );

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

  return (
    // <ResponsiveContainer  width="100%" height="100%">

    <div
      className="childRechartRow"
      style={{
        background: "#FF0000",
        justifyContent: "center",
        alignItems: "flex-end",
        margin: 10,
      }}
    >
      <ResponsiveContainer height='80%' width='100%'>
      <LineChart
        type="monotoneX"
        data={data}
        cursor="default"
        margin={{
          top: 15,
          bottom: 5,
        }}
      >
        <XAxis
          tick={{ fill: "#ffffff", opacity: "50%" }}
          strokeWidth={0}
          dataKey="day"
          // className="XAxisStyle"
          // padding={{ left: 40, right: 40 }}
          minTickGap={0}
        />

        <Tooltip cursor={false} content={<CustomTooltip />} dataKey={"trainingTime"} />

        <Line
          
          type="monotoneX"
          dataKey="trainingTime"
          stroke="#FFFFFF"
          strokeOpacity={"50%"}
          strokeWidth={3}
          dot={{ r: 0, strokeWidth: 0 }}
          activeDot={{ r: 4, strokeWidth: 7, strokeOpacity: "50%" }}
        />
        {/* <CustomizedTitle text="Durée moyenne des sessions" /> */}
        {/* <h1 className="LineChartTitle">Text</h1> */}
     
      </LineChart>
   
      </ResponsiveContainer>
 
    </div>

    // </ResponsiveContainer>
  );
};

export default SLineChartComp;
