import React from "react";
import { Cell, ResponsiveContainer, RadialBar, RadialBarChart } from "recharts";
import { useProvider } from "../../../provider/Provider";
import "./SRadialBarChartStyle.css";

const SRadialBarChartComp = () => {
  const { user } = useProvider();

  const data = [
    { name: "Group A", value: user?.todayScore * 100 || user?.score * 100 },
    {
      name: "parent",
      value: 100 - (user?.todayScore * 100 || user?.score * 100),
    },
  ];

  return (
    <div
      className="childRechartRow"
      style={{ position: "relative", backgroundColor: "#FBFBFB" }}
    >
      <p className="titleRadial">Score</p>

      <ResponsiveContainer height="80%" width="100%">
        <RadialBarChart
          innerRadius={85}
          outerRadius={60}
          data={data}
          startAngle={220}
          endAngle={-60}
          // barSize={800
        >
          <RadialBar
            cornerRadius={10}
            dataKey="value"
            strokeWidth={100}
            clockWise
          >
            {data?.map((entry, index) => {
              if (index === 0) {
                return (
                  <Cell
                    startAngle={220}
                    radius={50}
                    style={{
                      borderRadius: 5,
                    }}
                    key={`cell-${index}`}
                    innerRadius={65}
                    fill={"#FF0000"}
                  />
                );
              } else {
                return (
                  <Cell
                    startAngle={220}
                    endAngle={580}
                    radius={50}
                    style={{
                      borderRadius: 5,
                    }}
                    key={`cell-${index}`}
                    innerRadius={ 0}
                    fill={ "#FFFFFF"}
                  />
                );
              }
            })}
          </RadialBar>
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="SPieDetail">
        <p style={{ fontWeight: 800, fontSize: 24 }}>
          {user?.todayScore * 100 || user?.score * 100}%
        </p>
        <p
          style={{ color: "#74798C", margin: 8, fontSize: 14, fontWeight: 500 }}
        >
          de votre
        </p>
        <p style={{ color: "#74798C", fontSize: 14, fontWeight: 500 }}>
          {" "}
          objectif
        </p>
      </div>
    </div>
  );
};

export default SRadialBarChartComp;
