import { userModel } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async ({ fullName, userName, password }) => {
  const existingUser = await userModel.findOne({ userName }).exec();
  if (!!existingUser) {
    // !!: cast to bool (to convert null or undefine to false)
    throw new Error("UserName exits!");
  }
  // encode pass: encrypt (module bycrypt)
  const hashedPassword = await bcrypt.hash(
    password,
    parseInt(process.env.SALT_ROUNDS)
  );
  const data = await userModel.create({
    //key and value is the same so just need once
    fullName,
    userName,
    password: hashedPassword,
  });
  return {
    ...data._doc, // or .toJSON() or .toObject()
    password: "Not show",
  };
};

export const login = async ({ userName, password }) => {
  // If found UserName
  let existingUser = await userModel.findOne({ userName }).exec();
  if (!!existingUser) {
    // not encrypt password!
    // If match password
    let isMatch = await bcrypt.compare(password, existingUser.password);
    if (!!isMatch) {
      //Create Json Web Token (JWT)
      let token = jwt.sign(
        //3 params: payload, secret key, option
        {
          data: existingUser,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "30 days", // 60 = 1 minute
        }
      ); //return string
      return {
        ...existingUser._doc, // or .toJSON() or .toObject()
        password: "not show",
        token: token,
      };
    } else {
      throw new Error("Wrong UserName or Password");
    }
  } else {
    throw new Error("Wrong UserName or Password");
  }
};

export const getDetailUser = async (id) => {
  let userDetail = await userModel.findById(id);
  return {
    ...userDetail._doc, // or .toJSON() or .toObject()
    password: "not show",
  };
};
