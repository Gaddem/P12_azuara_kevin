import React from "react";
import "./CardIconInfoStyle.css";
import iconFire from "../../../img/icons_right/fire_icon.png";
import iconApple from "../../../img/icons_right/apple_icon.png";
import iconBurger from "../../../img/icons_right/cheeseburger_icon.png";
import iconChicken from "../../../img/icons_right/chicken_icon.png";

const CardIconInfoComp = ({ type, countValue }) => {
  let unitValue = "g";
  let backgroundRGB = `0,0,0`;
  let src = iconFire;
  if (type === "Calories") {
    unitValue = "kCal";
    backgroundRGB = `255,0,0`;
    src = iconFire;
  } else if (type === "Proteines") {
    backgroundRGB = `74,184,255`;
    src = iconChicken;
  } else if (type === "Glucides") {
    backgroundRGB = `249,206,35`;
    src = iconApple;
  } else if (type === "Lipides") {
    backgroundRGB = `253,81,129`;
    src = iconBurger;
  }

  return (
    <div className="childrenRightInfo">
      <div className="subChildrenRightInfo">
        <div
          style={{ backgroundColor: `rgba(${backgroundRGB}, 0.5)` }}
          className="containerIconCardInfo"
        >
          <img src={src} alt="icone yoga" className="imgIconCardInfo" />
        </div>
        <div className="partTextRightInfo">
          <h3 className="cardIconCountUnit">
            {countValue}
            {unitValue}
          </h3>
          <p className="cardIconTitleType">{type}</p>
        </div>
      </div>
    </div>
  );
};

export default CardIconInfoComp;
