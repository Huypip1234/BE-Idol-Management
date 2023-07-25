import * as idolModel from "../models/idolModel.js";

export const getAllIdol = async () => {
  let allIdol = await idolModel();
  return allIdol;
};
