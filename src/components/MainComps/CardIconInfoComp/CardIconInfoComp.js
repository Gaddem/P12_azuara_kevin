import React from "react";
import "./CardIconInfoStyle.css";

const CardIconInfoComp = ({ type,countValue }) => {

    let unitValue ="g";
    if(type ==="Calories"){
        unitValue="kCal";
    }else if(type === "Proteines"){
        
    }else if(type === "Glucides"){

    }else if(type === "Lipides"){

    }
    

  return (
    <div className="childrenRightInfo">
      <div className="subChildrenRightInfo">
        <div style={{backgroundColor:`rgba(0, 0, 0, 0.5)`}} className="containerIconCardInfo">

        </div>
        {/* <img /> */}
        <div>
            <h3>{countValue}{unitValue}</h3>
            <p className="cardIconTitleType">{type}</p>
        </div>

      </div>
    </div>
  );
};

export default CardIconInfoComp;
