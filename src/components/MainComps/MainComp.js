import React from "react";
import "./MainStyle.css";
import UserInfoComp from "./UserInfoComp";
import RightInfoUserComp from "./RightInfoUserComp";
import SLineChartComp from "../RechartComps/SLineChart/SLineChartComp";
import SRadarChartComp from "../RechartComps/SRadarChart/SRadarChartComp";
import SPieChartComp from "../RechartComps/SPieChart/SPieChartComp";
import SBarChartComp from "../RechartComps/SBarChart/SBarChartComp";

const MainComp = () => {
  return (
    <div className="containerMain">
      <div className="containUserInfo">
        <UserInfoComp />
      </div>
      <div className="subMainContainer">
        <div className="subLeftContainerMain">
          <SBarChartComp />
          <div className="containRowRecharts">
            <SLineChartComp />
            <SRadarChartComp />
            <SPieChartComp />
          </div>
        </div>
        <div className="subRightContainerMain">
          <RightInfoUserComp />
        </div>
      </div>
    </div>
  );
};

export default MainComp;
