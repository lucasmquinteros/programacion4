import { instanceDBS } from "./index";
import { HttpStatusCode } from "axios";

export const defaultGet = async (url) => {
  const { data, status } = await instanceDBS.get("/characters");
  switch (status) {
    case HttpStatusCode.Ok: {
      return data.items;
    }
    default: {
      throw new Error("Error fetching characters");
    }
  }
};

export const getAllCharacters = async () => defaultGet("/characters");

export const getOneCharacterById = async (id) =>
  defaultGet(`/characters/${id}`);
export const getOneCharacterByName = (name) =>
  defaultGet(`/characters?name=${name}`);
