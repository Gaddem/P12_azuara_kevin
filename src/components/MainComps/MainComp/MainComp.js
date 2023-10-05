import React from "react";
import "./MainStyle.css";
import UserInfoComp from "../UserInfoComp/UserInfoComp";
import RightInfoUserComp from "../RightInfoUserComp/RightInfoUserComp";
import SLineChartComp from "../../RechartComps/SLineChart/SLineChartComp";
import SRadarChartComp from "../../RechartComps/SRadarChart/SRadarChartComp";
import SBarChartComp from "../../RechartComps/SBarChart/SBarChartComp";
import SRadialBarChartComp from "../../RechartComps/SRadialBarChart.js/SRadialBarChartComp";

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
             <SRadialBarChartComp />
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
