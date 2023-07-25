import mongoose, { Schema, ObjectId } from "mongoose";

export default mongoose.model(
  "idol",
  new Schema(
    {
      id: { type: ObjectId },
      name: {
        type: String,
        required: true,
        validate: {
          validator: (value) => value.length > 3,
          message: "Username must be atleast 3 cheracters",
        },
      },
    },
    {
      autoCreate: false, //mac dinh
      autoIndex: true, //mac dinh
    }
  )
);
