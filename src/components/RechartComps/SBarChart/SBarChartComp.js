import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useProvider } from "../../../provider/Provider";
const SBarChartComp = () => {
  const { userActivty } = useProvider();
  const customBarStyle = (props) => {
    const { x, y, width, height, fill } = props;
    return <rect x={x} y={y} width={7} height={height} fill={fill} />;
  };
  return (
    // <div>
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={userActivty.sessions || []}>
        <CartesianGrid
          horizontal={true}
          vertical={false}
          strokeDasharray="2  1"
        />
        <XAxis tick={{ fill: "#9B9EAC" }} strokeOpacity={0} dataKey="name" />
        <YAxis
          tick={{ fill: "#9B9EAC" }}
          orientation="right"
          strokeOpacity={0}
          minTickGap={69}
        />
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey="kilogram" shape={customBarStyle} fill="#282D30" />
        <Bar dataKey="calories" shape={customBarStyle} fill="#E60000" />
      </BarChart>
    </ResponsiveContainer>
    // </div>
  );
};

export default SBarChartComp;
