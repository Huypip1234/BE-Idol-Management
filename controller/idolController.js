import * as idolRepository from "../repositories/idolRepositorie.js";

export const getAllIdol = async (req, res) => {
  try {
    let data = await idolRepository.getAllIdol();
    res.status(200).json({
      message: "Getting all Idol successfully",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
    console.log("Error cmnr: " + error);
  }
};

export const insertIdol = async (req, res) => {
  try {
    let data = await idolRepository.insertIdol(req.body);
    res.status(200).json({
      message: "Insert new Idol successfully",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.errors.name.message,
    });
    console.log("Error cmnr: " + error);
  }
};
