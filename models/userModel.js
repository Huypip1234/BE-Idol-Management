import mongoose, { Schema, ObjectId } from "mongoose";

export const userModel = mongoose.model(
  "users",
  new Schema({
    id: { type: ObjectId },
    fullName: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
      validate: {
        validator: (value) => value.length > 3,
        message: "Username must be atleast 3 cheracters",
      },
    },
    password: {
      type: String,
      required: true,
    },
  })
);
