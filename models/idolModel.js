import mongoose, { Schema, ObjectId } from "mongoose";

export default mongoose.model(
  "idol_infos",
  new Schema({
    id: { type: Number },
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
      type: Number,
      required: true,
    },
    Height: { type: Number, required: true },
    Weight: { type: Number, required: true },
  })
);
