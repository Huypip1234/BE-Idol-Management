import { idolInfoModel } from "../models/idolModel.js";

export const getAllIdol = async () => {
  let allIdol = await idolInfoModel.find({});
  return allIdol;
};

export const insertIdol = async ({ name, age, height, weight, image }) => {
  const idolInserted = await idolInfoModel.create({
    name,
    age,
    height,
    weight,
    image,
  });
  return idolInserted;
};

export const updateIdol = async ({ id, name, age, height, weight, image }) => {
  const idol = await idolInfoModel.findById(id);

  idol.name = name ?? idol.name;
  idol.age = age ?? idol.age;
  idol.height = height ?? idol.height;
  idol.weight = weight ?? idol.weight;
  idol.image = image ?? idol.image;

  await idol.save();
  return idol;
};

export const getIdolDetail = async (id) => {
  let idolDetail = await idolInfoModel.findById(id);
  return idolDetail;
};

export const deleteIdol = async (id) => {
  const idolDeleted = await idolInfoModel.deleteOne({ _id: id });
  return idolDeleted;
};
