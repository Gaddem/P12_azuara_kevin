import React from "react";
import { useProvider } from "../../provider/Provider";
import './UserInfoStyle.css'

const UserInfoComp = () => {
  const { user } = useProvider();

  return (
    <div className="containerUserInfo">
        <h1>Bonjour {user?.userInfos?.firstName}</h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
};

export default UserInfoComp;
     