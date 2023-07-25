import mongoose from "mongoose";

const connect = async (req, res) => {
  try {
    console.log("Connecting...");
    let connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("Connect to database!");
    return connection; //return void
  } catch (error) {
    res.status(500).json({
      message: "Loi server cmnr",
    });
    console.log("Error cmnr: " + error);
    throw new Error("Fail to connect to DB cmnr");
  }
};

export default connect;
