import axios from "axios";
import {
  getAllCharacters,
  getOneCharacterByID,
  getOneCharacterByName,
} from "./characters";

export const instanceDBS = axios.create({
  baseURL: "https://dragonball-api.com/api",
  timeout: 1000,
});
export { getAllCharacters, getOneCharacterByID, getOneCharacterByName };

/*
export const ctatusCode = Object.freeze({
  ...success,
  ...serverError,
});

const success = {
  OK: 200,
  Created: 201,
  NoContent: 204,
};

const serverError = {
  BadRequest: 400,
  NotFount: 404,
  InternalServerError: 500,
};

const userError = {};
*/
