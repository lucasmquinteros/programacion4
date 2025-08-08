import axios, { HttpStatusCode } from "axios";

export const instanceDBS = axios.create({
  baseURL: "https://dragonball-api.com/api",
  timeout: 1000,
});

export const defaultDBSGet = async (url) => {
  const { data, status } = await instanceDBS.get(url);
  switch (status) {
    case HttpStatusCode.Ok: {
      return data;
    }
    default:
      throw new Error("Error desconocido");
  }
};

export * from "./characters";
export * from "./planets";
