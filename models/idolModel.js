import mongoose, { Schema, ObjectId } from "mongoose";

export const idolInfoModel = mongoose.model(
  "idol_infos",
  new Schema({
    id: { type: ObjectId },
    image: String,
    name: {
      type: String, //type
      required: true, //required
      validate: {
        //validate
        validator: (value) => value.length > 3,
        // Message
        message: "Username must be atleast 3 cheracters",
      },
    },
    age: {
      type: String,
      required: true,
    },
    height: { type: String, required: true },
    weight: { type: String, required: true },
  })
);
