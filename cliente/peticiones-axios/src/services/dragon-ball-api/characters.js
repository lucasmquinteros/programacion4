import { HttpStatusCode } from "axios";
import { instanceDBS } from "./index.js";

export const defaultGet = async (url) => {
  const { data, status } = await instanceDBS.get(url);
  switch (status) {
    case HttpStatusCode.Ok: {
      return data;
    }
    default:
      return "Hubo un error qsy";
  }
};

export const getAllCharacters = async () => defaultGet("/characters");

export const getOneCharacterByID = async (id) =>
  defaultGet(`/characters/${id}`);

export const getOneCharacterByName = (name) =>
  defaultGet(`/characters?name=${name}`);
