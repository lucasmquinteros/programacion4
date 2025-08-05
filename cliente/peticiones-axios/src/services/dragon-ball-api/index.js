import axios from "axios";

export const instanceDBS = axios.create({
  baseURL: "https://dragonball-api.com/api",
  timeout: 1000,
});

export {
  getAllCharacters,
  getOneCharacterById,
  getOneCharacterByName,
} from "./charactes";
