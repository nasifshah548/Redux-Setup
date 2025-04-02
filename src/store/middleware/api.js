import axios from "axios";
import { createAction } from "@reduxjs/toolkit";

// 1. Create action for initiating the API call
export const apiCallBegan = createAction("api/callBegan");

// 2. Middleware to handle API calls
const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== apiCallBegan.type) {
      return next(action); // returning the API request back
    }

    const { url, method, data, onSuccess, onError } = action.payload;

    try {
      const response = await axios.request({
        baseURL: "http://localhost:5000/api", // Backend base URL
        url,
        method,
        data,
      });

      dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      if (error) {
        dispatch({ type: onError, payload: { error: error.message } });
        dispatch({ type: "SHOW_ERROR", payload: { error: error.message } });
      }
    }
  };

export default api;
