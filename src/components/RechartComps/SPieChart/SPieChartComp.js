import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { useProvider } from "../../../provider/Provider";

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

  const {user} = useProvider();

const data = [{ name: "Group A", value: (user?.todayScore*100 || user?.score*100) },{ name: "parent", value: 100 - (user?.todayScore*100 || user?.score*100)  }];

  return (
    <div className="childRechartRow">
      <PieChart width={200} height={200}>
        <Pie
          data={data}
   
          startAngle={230}
          endAngle={-50}
          innerRadius={68}
          outerRadius={75}
          dataKey="value"
        >
           {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={index===0?"#E60000":"#FFFFFF"} />
            // <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          
        </Pie>
      </PieChart>
    </div>
  );
};

export default SPieChartComp;
