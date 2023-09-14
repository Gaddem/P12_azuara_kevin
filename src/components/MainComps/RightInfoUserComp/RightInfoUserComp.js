import React from "react";
import { useProvider } from "../../../provider/Provider";
import "./RightInfoUserStyle.css";
import CardIconInfoComp from "../CardIconInfoComp/CardIconInfoComp";

const RightInfoUserComp = () => {
  const { user } = useProvider();
console.log(user.keyData);
  //   keyData: {
  //     calorieCount: 1930,
  //     proteinCount: 155,
  //     carbohydrateCount: 290,
  //     lipidCount: 50
  // }

 


  return (
  <div className="containerRightInfo">
    <CardIconInfoComp countValue={user?.keyData?.calorieCount || 0} type={"Calories"} />
    <CardIconInfoComp countValue={user?.keyData?.proteinCount || 0} type={"Proteines"} />
    <CardIconInfoComp countValue={user?.keyData?.carbohydrateCount || 0} type={"Glucides"} />
    <CardIconInfoComp countValue={user?.keyData?.lipidCount || 0} type={"Lipides"} />
  </div>
  );
};

export default RightInfoUserComp;
