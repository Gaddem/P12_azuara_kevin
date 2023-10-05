import React from "react";
import { useProvider } from "../../../provider/Provider";
import './UserInfoStyle.css'

const UserInfoComp = () => {
  const { user } = useProvider();

  return (
    <div className="containerUserInfo">
        <h1>Bonjour <span style={{color:"#FF0101"}}>{user?.userInfos?.firstName}</span></h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
};

export default UserInfoComp;
     