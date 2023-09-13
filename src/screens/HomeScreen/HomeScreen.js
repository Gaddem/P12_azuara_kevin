import React from "react";
import "./HomeStyle.css";
import { useProvider } from "../../provider/Provider";
import ErrorComp from "../../components/ErrorComp/ErrorComp";
import MainComp from "../../components/MainComps/MainComp";

const HomeScreen = () => {
  const { user } = useProvider();

  return (
    <div className="HS_container">
      {user?.id ? <MainComp /> : <ErrorComp />}
    </div>
  );
};

export default HomeScreen;
