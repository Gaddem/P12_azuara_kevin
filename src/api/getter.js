import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_PATH_API;

export const getUserById = async (userId) => {
  try {
    const response = await axios.get(`/user/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getActivityByUserId = async (userId) => {
  try {
    const response = await axios.get(`/user/${userId}/activity`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAverageByUserId = async (userId) => {
  try {
    const response = await axios.get(`/user/${userId}/average-sessions`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPerfByUserId = async (userId) => {
  try {
    const response = await axios.get(`/user/${userId}/performance`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
