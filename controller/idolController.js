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
      message: "Internal server error!",
    });
    console.log("Error cmnr: " + error);
  }
};

export const insertIdol = async (req, res) => {
  try {
    let data = await idolRepository.insertIdol(req.body);
    res.status(200).json({
      message: "Insert new Idol Successfully",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.errors.name.message,
    });
    console.log("Error cmnr: " + error);
  }
};

export const updateIdol = async (req, res) => {
  try {
    let data = await idolRepository.updateIdol(req.body);
    res.status(200).json({
      message: "Edit Idol Successfully",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.errors.name.message,
    });
    console.log("Error cmnr: " + error);
  }
};

export const getIdolDetail = async (req, res) => {
  try {
    let data = await idolRepository.getIdolDetail(req.params.id);
    res.status(200).json({
      message: "Get Idol Detail Successfully",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error!",
    });
    console.log("Error cmnr: " + error);
  }
};

export const deleteIdol = async (req, res) => {
  try {
    let data = await idolRepository.deleteIdol(req.params.id);
    res.status(200).json({
      message: "Delete Idol Successfully",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error!",
    });
    console.log("Error cmnr: " + error);
  }
};