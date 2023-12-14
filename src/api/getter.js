import axios from "axios";
import mockData from "../data/mockData.json";

axios.defaults.baseURL = process.env.REACT_APP_PATH_API;

const useMock = process.env.REACT_APP_USE_MOCK === "true";

export const getUserById = async (userId, useMockup = useMock) => {
  try {
    if (useMockup) {
      return mockData.USER_MAIN_DATA.find((user) => user.id === userId);
    } else {
      const response = await axios.get(`/user/${userId}`);
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};

export const getActivityByUserId = async (userId, useMockup = useMock) => {
  try {
    if (useMockup) {
      return mockData.USER_ACTIVITY.find((activity) => activity.userId === userId);
    } else {
      const response = await axios.get(`/user/${userId}/activity`);
      let dataResponse = response.data;
      if (dataResponse.data.sessions) {
        let arraySessionNewDays = dataResponse.data.sessions?.map((session) => {
          let dateObj = new Date(session.day);
          let theDay = dateObj.getUTCDate();
          session.day = theDay.toString();
          return session;
        });
        dataResponse.sessions = arraySessionNewDays;
      }
      return dataResponse;
    }
  } catch (error) {
    throw error;
  }
};

export const getAverageByUserId = async (userId, useMockup = useMock) => {
  try {
    if (useMockup) {
      return mockData.USER_AVERAGE_SESSIONS.find((average) => average.userId === userId);
    } else {
      const response = await axios.get(`/user/${userId}/average-sessions`);
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};

export const getPerfByUserId = async (userId, useMockup = useMock) => {
  try {
    if (useMockup) {
      return mockData.USER_PERFORMANCE.find((performance) => performance.userId === userId);
    } else {
      const response = await axios.get(`/user/${userId}/performance`);
      let allKindTitleFr = {
        1: "Cardio",
        2: "Energie",
        3: "Endurance",
        4: "Force",
        5: "Vitesse",
        6: "Intensité",
      };
      let allDetailData = response.data.data.data;
      let newArrayResponse = allDetailData.map((item) => {
        item.kind = allKindTitleFr[item.kind];
        item.A = item.value;
        delete item.value;
        return item;
      });
      let newResponse = {
        data: newArrayResponse,
      };
      return newResponse;
    }
  } catch (error) {
    throw error;
  }
};