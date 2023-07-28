import idolModel from "../models/idolModel.js";

export const getAllIdol = async () => {
  let allIdol = await idolModel.find({});
  return allIdol;
};

export const insertIdol = async ({ name, age, height, weight }) => {
  const idolInserted = await idolModel.create({ name, age, height, weight });
  return idolInserted;
};

export const updateIdol = async ({ id, name, age, height, weight }) => {
  const idol = await idolModel.findById(id);

  idol.name = name ?? idol.name;
  idol.age = age ?? idol.age;
  idol.height = height ?? idol.height;
  idol.weight = weight ?? idol.weight;

  await idol.save();
  return idol;
};

export const deleteIdol = async (id) => {
  const idolDeleted = await idolModel.deleteOne({ _id: id });
  return idolDeleted;
};
