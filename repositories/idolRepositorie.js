import idolModel from "../models/idolModel.js";

export const getAllIdol = async () => {
  let allIdol = await idolModel.find({});
  return allIdol;
};

export const insertIdol = async ({ name, age, height, weight }) => {
  const idolInserted = await idolModel.create({ name, age, height, weight });
  return idolInserted;
};
