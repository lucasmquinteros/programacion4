import { HttpStatusCode } from "axios";
import { instanceDBS } from "./index.js";

const defaultGet = async (url) => {
  const { data, status } = await instanceDBS.get(url);
  switch (status) {
    case HttpStatusCode.Ok: {
      return data;
    }
    default:
      throw new Error("Error desconocido");
  }
};

export const getAllPlanets = async () => defaultGet("/planets");

export const getOnePlanetById = async (id) => defaultGet(`/planets/${id}`);
