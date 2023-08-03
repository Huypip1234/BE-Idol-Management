import * as userRepository from "../repositories/userRepositorie.js";

export const register = async (req, res) => {
  const { fullName, userName, password } = req.body;
  try {
    const data = await userRepository.register({
      fullName,
      userName,
      password,
    });
    res.status(200).json({ message: "Register Successfully", data: data });
  } catch (error) {
    res.status(500).json({ message: error.toString() });
    console.log("Error cmnr: " + error);
  }
};

export const login = async (req, res) => {
  const { userName, password } = req.body;
  try {
    let data = await userRepository.login({ userName, password });
    res.status(200).json({
      message: "Login Successfully",
      data: data,
    });
  } catch (error) {
    res.status(500).json({ message: error.toString() });
    console.log("Error cmnr: " + error);
  }
};

export const getDetailUser = async (req, res) => {
  try {
    let data = await userRepository.getDetailUser(req.params.id);
    res.status(200).json({
      message: "Get User Detail Successfully",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error!",
    });
    console.log("Error cmnr: " + error);
  }
};
