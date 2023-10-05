import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useProvider } from "../../../provider/Provider";
const SBarChartComp = () => {
  const { userActivty } = useProvider();

  const customBarStyle = (props) => {
    const { x, y, height, fill } = props;
    return (
      <rect
        x={x + 2}
        y={y>0 ? y:0}
        width={7}
        ry={2}
        rx={2}
        height={height>0 ?height:0}
        fill={fill}
      />
    );
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: "#E60000",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 15,
            paddingBottom: 15,
            gap: 30,
            marginLeft: 30,
            marginRight: 30,
          }}
        >
          <p style={{ color: "white", fontSize: 10 }}>{payload[0].value}kg</p>
          <p style={{ color: "white", fontSize: 10 }}>{payload[1].value}Kcal</p>
        </div>
      );
    }

    return null;
  };
  const CustomCursor = (props) => {
    const { x, y, height, width } = props;

    return (
      <rect
        x={x + 15}
        y={y>0 ? y:0}
        height={height >0 ? height:0}
        width={(width - 30 )>0 ? width:0}
        fill={"#C4C4C4"}
        fillOpacity={0.5}
      />
    );
  };

  return (
    <div
      style={{
        width: "90%",
        height: "50%",
        backgroundColor: "#FBFBFB",
        borderRaduis: 5,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
        alignSelf: "flex-start",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "89%",
        }}
      >
        <p style={{ fontSize: 13, fontWeight: 600 }}>Activité quotidienne</p>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 50,
                backgroundColor: "#282D30",
                marginRight: 10,
              }}
            ></div>
            <p style={{ fontSize: 14, fontWeight: 500, color: "#74798C" }}>
              Poids(kg)
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 30,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 50,
                backgroundColor: "#E60000",
                marginRight: 10,
              }}
            ></div>
            <p style={{ fontSize: 14, fontWeight: 500, color: "#74798C" }}>
              Calories brûlées (kCal)
            </p>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="90%" height="70%">
        <BarChart
          barCategoryGap="32%"
          height={"90%"}
          margin={{ right: 10, left: 0 }}
          data={userActivty.sessions || []}
        >
          <CartesianGrid
            horizontal={true}
            vertical={false}
            strokeDasharray="3"
          />
          <ReferenceLine
            y={0}
            tick={{ fill: "#9B9EAC"  }}
            opacity={1}
            fill={"#DEDEDE"}
            strokeWidth={2}
          />
          <XAxis
            tick={{ fill: "#9B9EAC"  }}
            padding={{ left: -25, right: -26 }}
            tickLine={false}  
            dataKey="day"
            axisLine={false}
          />
         
          <YAxis
            tick={{ fill: "#9B9EAC", height: 0,marginLeft:60 }}
            tickSize={30}
            orientation="right"
            strokeOpacity={0}
            minTickGap={69}
          />
          <Tooltip cursor={<CustomCursor />} content={<CustomTooltip />} />
            <Bar dataKey="kilogram" shape={customBarStyle} fill="#282D30" />
            <Bar dataKey="calories" shape={customBarStyle} fill="#E60000" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SBarChartComp;
