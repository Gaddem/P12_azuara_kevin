import React from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import "./SRadarChartStyle.css";
import { useProvider } from "../../../provider/Provider";

const SRadarChartComp = () => {

  const { userPerformance } = useProvider();

  return (
    <div className="containerRadar childRechartRow">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart margin={{ top: 20, right: 50, bottom: 20, left: 50 }}  data={userPerformance}> 
          <PolarGrid radialLines={false}  />
          <PolarAngleAxis tick={{ fontSize: 12 }} dataKey="kind" color="white"/>
          <Radar
            name="Mike"
            dataKey="A"
            fill="#FF0101"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SRadarChartComp;
