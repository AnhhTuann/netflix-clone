import axios from "axios";
import { ENV_VARS } from "../config/envVars.js";

export const fetchFromTMDB = async (url) => {
  const options = {
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + ENV_VARS.TMDB_API_KEY,
    },
  };

  await axios.get(url, options);

  const response = await axios.get(url, options);

  if (response.status !== 200) {
    throw new Error("Error fetching data from TMDB" + response.statusText);
  }

  //   const res = await fetch("");
  //   const data = await res.json();
  //   return data;

  return response.data;
};
