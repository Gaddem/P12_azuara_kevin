// UserContext.js
import React, { createContext, useState, useContext, useEffect } from "react";
import { getActivityByUserId, getAverageByUserId, getPerfByUserId, getUserById } from "../api/getter";

const Context = createContext();

export const useProvider = () => useContext(Context);

export const ProviderContext = ({ children }) => {


  const [user, setUser] = useState(null);
  const [userActivty, setUserActivty] = useState(null);
  const [userAverageSession, setUserAverageSession] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);

  async function chargeAllDataUserById(idUser) {
    try {
        if(idUser){
            let userInfo = await getUserById(idUser)
            let activity = await getActivityByUserId(idUser);
            let average = await getAverageByUserId(idUser)
            let performance = await getPerfByUserId(idUser);
            setUser(userInfo?.data);
            setUserActivty(activity?.data);
            setUserAverageSession(average?.data);
            setUserPerformance(performance?.data);
        }
        return;
    } catch (error) {
        console.log(error);
        dechargeAllDataUser();
    }
    
  }
  async function dechargeAllDataUser (){
    setUser(null);
    setUserActivty(null);
    setUserAverageSession(null);
    setUserPerformance(null);
  }

  const getUserIdFromUrl = async () => {
    const pathname = window.location.pathname;
    const parts = pathname.split("/");
    const idIndex = parts.indexOf("id") + 1;
    if (idIndex > 0 && idIndex < parts.length && parts[idIndex]) {
      getUserById(parts[idIndex])
        .then(async(res) => {
            if(res){
               await chargeAllDataUserById(parts[idIndex]);
            }
            return;
        })
        .catch((e) => {
          console.log(e);
          dechargeAllDataUser();
        });
      return;
    }
    dechargeAllDataUser();
    return;
  };
 
    useEffect(() => {
        getUserIdFromUrl();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

  const providerValues = {
    user,
    setUser,
    userAverageSession,
    setUserAverageSession,
    userActivty,
    setUserActivty,
    userPerformance,
    setUserPerformance,

    getUserIdFromUrl,
  };

  return <Context.Provider value={providerValues}>{children}</Context.Provider>;
};
