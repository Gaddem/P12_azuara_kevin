import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { useProvider } from "../../../provider/Provider";
import "./SPieChartStyle.css";

// const percentage = 20;
// const data = {
//     labels: ['Percentage'],
//     datasets: [
//       {
//         data: [percentage, 100 - percentage],
//         backgroundColor: ['#36A2EB', '#E7E7E7'],
//       },
//     ],
//   };

const SPieChartComp = () => {
  const { user } = useProvider();

  const data = [
    { name: "Group A", value: user?.todayScore * 100 || user?.score * 100 },
    {
      name: "parent",
      value: 100 - (user?.todayScore * 100 || user?.score * 100),
    },
  ];

  return (
    <div className="childRechartRow">
      <ResponsiveContainer height="80%" width="100%">
        <PieChart>
          <Pie
            data={data}
            startAngle={230}
            endAngle={-50}
            innerRadius={68}
            outerRadius={75}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
              radius={50}
              style={{
                borderRadius:5,
              }}
                key={`cell-${index}`}
                fill={index === 0 ? "#E60000" : "#FFFFFF"}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <p className="SPieDetail">
        {user?.todayScore * 100 || user?.score * 100}% de votre objectif
      </p>
    </div>
  );
};

export default SPieChartComp;
